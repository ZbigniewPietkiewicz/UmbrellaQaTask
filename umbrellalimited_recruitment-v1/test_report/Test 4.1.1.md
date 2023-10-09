Story:
If I have both "Kraj źródłowy" and "Kraj docelowy" filters applied, I should be able to remove "Kraj źródłowy" filter by choosing empty value.
Steps:
1. Click on "Kraj źródłowy" selector
2. Select country code
3. Click on "Kraj docelowy" selector
2. Select country code
4. One cell should be visible and it's data same as in unfiltered table
5. Click on "Kraj źródłowy" selector
6. Selecty empty value
7. Column of data of just selected country code should be visible and it's data same as in unfiltered table.
Execution logs:
1. Execution:
	1. Additional information:
		2. Used browser: Brave
		3. Selected filter: EE for "Kraj źródłowy", DK for "Kraj docelowy"
	2. Outcome: Complete failure. Whole table is displayed, first column header is wrong and rest of column headers are missing.
2. Execution:
	1. Additional information:
		2. Used browser: Microsoft Edge
		3. Selected filter: IT for "Kraj źródłowy", then FI for "Kraj docelowy"
	2. Outcome: Complete failure. Whole table is displayed, first column header is wrong and rest of column headers are missing.
Reproduction:
1.  Failure: Displays a whole table.
	1. Select any country code in "Kraj źródłowy" selector
	2. Select any country code in "Kraj docelowy" selector
	3. Remove "Kraj źródłowy" selector
	4. Whole table will be displayed
Notes:
