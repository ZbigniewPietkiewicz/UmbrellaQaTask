Story:
If I have both "Kraj źródłowy" and "Kraj docelowy" filters applied, I should be able to remove "Kraj źródłowy" filter by choosing empty value.
Steps:
1. Click on "Kraj źródłowy" selector
2. Select country code
3. Click on "Kraj docelowy" selector
2. Select country code
4. One cell should be visible and it's data same as in unfiltered table
5. Click on "Kraj źródłowy" selector
6. Select empty value
7. Column of data of just selected country code should be visible and it's data same as in unfiltered table.
Execution logs:
1. Execution:
	1. Additional information:
		2. Used browser: Brave
		3. Selected filter: DE for "Kraj źródłowy", HU for "Kraj docelowy"
	2. Outcome: Success, only HU column is being displayed.
2. Execution:
	1. Additional information:
		2. Used browser: Microsoft Edge
		3. Selected filter: MT for "Kraj źródłowy", then SE for "Kraj docelowy"
	2. Outcome: Success, only SE column is being displayed.
Reproduction:

Notes:
