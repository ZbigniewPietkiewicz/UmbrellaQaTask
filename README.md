# umbrellalimited_recruitment

## Wprowadzenie

Prosimy Cię o wykonanie testów 3 wersji tej samej aplikacji.
Po otrzymaniu wyników Twoich testów oraz kodu testów automatycznych, który ma być odpowiedzią na poniższe zadanie będziemy chcieli ocenić Twój potencjał.

Rozwiązanie zadania chcielibyśmy otrzymać w terminie **5 dni**.

### uruchomienie frontendu

```
cd frontned
npm install
npm run dev
```

### uruchomienie backendu

```
cd backend
npm install
npm run start
```

### Opis aplikacji

Aplikacja umożliwia prezentację danych o stawkach transportowych w postaci tabelki na stronie wraz z opcją edycji bezpośredniej.
Dane do tabelki pobierane i aktualizowane poprzez wymianę komunikatów api pomiędzy frontendem i backendem.

### Wymagania

- dane powinny być prezentowane w formie tabelarycznej
- każda komóra przedstawia wartość stawki (rate) dla danej pary 
kraju źródłowego (sourceCountry) i docelowego (destincationCountry)  
- stawki powinny być edytowalne bezpośrednio 
- zapis zmiany powinien być automatyczny w każdej komórce tabeli 
- stawka powinna być z zakresu (0, 100> 
- po lewej stronie i nad tabelką powinna być wyświetlona legenda (Kraj źródłowy i Kraj docelowy)  
- tabelka powinna zawierać nagłówki kolumn z kodami krajów docelowych (destintionCountry)  
- tabelka powinna zawierać nagłówki wierszy z kodami krajów źródłowych (sourceCountry)  
- aktywna komórka oraz odpowiadające jej nagłówki kolumn i wierszy powinny być oznaczone (np innym tłem)  
- nagłówki wierszy i kolumn powinny zostawać w miejscu w przypadku przewijania tabelki w poziomie lub pionie  
- tabelka powinno dać się zawężać (poprzez wybór kraju źródłowego i/lub docelowego - np z selectów)  
- po zawężeniu tabelka pokazuje tylko jedną kolumnę (wybrany kraj docelowy), lub jeden wiersz (wybrany kraj źródłowy) lub jedną komórkę (wybrany kraj źródłowy i docelowy)  
- jesli podczas zapisu zmiany przez api wystapi blad nalezy dana komórkę oznaczyć jako błędną  

Aplikacja powinna być napisana w taki sposób aby umożliwiać jej przegląd zarówno w przeglądarce jak i na urządzeniach **mobilnych** 
Jeśli to możliwe aplikacja powinna zostać pokryta **testami** cypress'owymi

### Wygląd

Przykładowy wygląd tabelki został przedstawiony w pliku _sample.png_, developerzy dostali jednak dowolność co do ostatecznego wyglądu aplikacji.
Chcemy jedynie aby tabelka spłeniała wymagania przedawione powyżej, spełniała ogólnie przyjęte standardy jeśli chodzi o UI/UX oraz aby była intuicyjna.  

Pozycje niedostępne powinny zostać wyświetlone w sposób wyróżniający się od reszty, np. czerwona otoczka.

### Zasoby

w repozytorium zadania znajdziesz:
- to readme :)
- katalog _backend_, który po uruchomieniu będzie źródłem danych
- katalog _frontend_, który po uruchomieniu będzie źródłem danych
- przykładowy plik z wyglądem tabelki _sample.png_

### Kryteria oceny

Ocenimy Twój testy pod kątem:

- ilości wychwyconych błedów
- ilości oraz jakości napisanych testów automatycznych

### Schemat pracy z repozytorium

Prosimy Cię o utworzenie kopii (NIE FORK'a) aktualnego repozytorium na bitbucket oraz wysłanie adresu repozytorium na adres: ``kontakt@umbrella.limited``.

Pracuj na gałęzi odchodzącej od mastera. Zespół chciałby wykonać code review projektu, który wykonujesz.

### Kontakt i pytania
Jeżeli opis zadania jest dla Ciebie niejasny, lub będziasz mieć jakiekolwiek pytania do zadania, śmiało pisz na adres ``kontakt@umbrella.limited``, postaramy
się odpowiedzieć na pytania najszybciej jak się tylko da.

Powodzenia

