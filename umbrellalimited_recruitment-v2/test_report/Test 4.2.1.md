Story:
If I have both "Kraj źródłowy" and "Kraj docelowy" filters applied, I should be able to remove "Kraj źródłowy" filter by choosing empty value.
Steps:
1. Click on "Kraj źródłowy" selector
2. Select country code
3. Click on "Kraj docelowy" selector
2. Select country code
4. One cell should be visible and it's data same as in unfiltered table
5. Click on "Kraj docelowy" selector
6. Selecty empty value
7. Row of data of just selected country code should be visible and it's data same as in unfiltered table.
Execution logs:
1. Execution:
	1. Additional information:
		2. Used browser: Brave
		3. Selected filter: CZ for "Kraj źródłowy", HR for "Kraj docelowy"
	2. Outcome: Success, CZ row is being displayed.
2. Execution:
	1. Additional information:
		2. Used browser: Microsoft Edge
		3. Selected filter: LV for "Kraj źródłowy", then LV for "Kraj docelowy"
	2. Outcome: Success, LV row is being displayed.
Reproduction:
1.  Failure: Displays AT row.
	1. Select any country code in "Kraj źródłowy" selector
	2. Select any country code in "Kraj docelowy" selector
	3. Remove "Kraj docelowy" selector
	4. AT row will be visible, erroneously marked as "Kraj źródłowy" row.
Notes:
Seems that filter functionality is functioning mostly as excepted - there is need for clarification if we follow with pre-defined select or select with typing and do we want any chance for multiple columns/filters to be displayed?