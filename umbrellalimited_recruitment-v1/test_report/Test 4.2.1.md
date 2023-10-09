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
		3. Selected filter: BG for "Kraj źródłowy", BG for "Kraj docelowy"
	2. Outcome: Complete failure. AT row is being displayed.
2. Execution:
	1. Additional information:
		2. Used browser: Microsoft Edge
		3. Selected filter: IT for "Kraj źródłowy", then FI for "Kraj docelowy"
	2. Outcome: Complete failure. AT row is being displayed.
Reproduction:
1.  Failure: Displays AT row.
	1. Select any country code in "Kraj źródłowy" selector
	2. Select any country code in "Kraj docelowy" selector
	3. Remove "Kraj docelowy" selector
	4. AT row will be visible, erroneously marked as "Kraj źródłowy" row.
Notes:
I think issues in 4.0.1, 4.0.2, 4.1.1, 4.1.2 are sign of the same defect in code, there are similar pattern of behaviors. I would suggest to create task and link to all those four reports.