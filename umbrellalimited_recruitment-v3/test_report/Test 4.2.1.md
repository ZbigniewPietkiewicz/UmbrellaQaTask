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
		3. Selected filter: BG for "Kraj źródłowy", LT for "Kraj docelowy"
	2. Outcome: Success, BG row is being displayed.
2. Execution:
	1. Additional information:
		2. Used browser: Microsoft Edge
		3. Selected filter: IE for "Kraj źródłowy", then NL for "Kraj docelowy"
	2. Outcome: Success, NL row is being displayed.
Reproduction:
Notes:
