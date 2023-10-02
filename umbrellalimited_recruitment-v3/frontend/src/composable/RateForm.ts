import { computed, ref, watch } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import { RateApiClient } from '@/services/RateApiClient'
import type { RateResourceInterface } from '@/@interfaces/RateResourceInterface'

export function useRateForm(rate?: RateResourceInterface) {
  const orginalValue: Ref<number> = ref(Number(rate?.rate || 0) || 0)
  const rateValue: Ref<number | string> = ref(orginalValue.value)
  const isSaving: Ref<boolean> = ref(false)
  const isSuccess: Ref<boolean> = ref(false)
  const isError: Ref<boolean> = ref(false)

  const isRateValid: ComputedRef<boolean> = computed(
    () =>
      !!rateValue.value &&
      !isNaN(Number(rateValue.value)) &&
      Number(rateValue.value) > 0 &&
      Number(rateValue.value) <= 100
  )

  watch(rateValue, (value, oldValue) => {
    if (value && oldValue !== value) {
      rateValue.value = value.toString().replace(',', '.')
    }
  })

  function onSubmit() {
    if (!isRateValid.value || isSaving.value || orginalValue.value === Number(rateValue.value)) {
      return
    }
    isSaving.value = true
    isError.value = false
    isSuccess.value = false

    RateApiClient.update({
      id: rate?.id || 0,
      sourceCountry: rate?.sourceCountry || '',
      destinationCountry: rate?.destinationCountry || '',
      rate: Number(rateValue.value)
    })
      .then(({ rate }) => {
        isSuccess.value = true

        orginalValue.value = Number(rate)
        rateValue.value = Number(rate)
        setTimeout(() => {
          isSuccess.value = false
        }, 2350)
      })
      .catch(() => {
        isError.value = true
      })
      .finally(() => {
        setTimeout(() => {
          isSaving.value = false
        }, 350)
      })
  }

  return {
    rateValue,
    isSaving,
    isSuccess,
    isError,
    isRateValid,
    onSubmit
  }
}
