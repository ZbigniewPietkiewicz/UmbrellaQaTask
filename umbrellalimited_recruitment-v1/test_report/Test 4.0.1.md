Story:
If I select value from "Kraj źródłowy" filter and I select value from "Kraj docelowy", I should see only cell that has selected "coordinates".
Steps:
1. Click on "Kraj źródłowy" selector
2. Select country code
3. Click on "Kraj docelowy" selector
2. Select country code
4. One cell should be visible and it's data same as in unfiltered table
Execution logs:
1. Execution:
	1. Additional information:
		2. Used browser: Brave
		3. Selected filter: CH for "Kraj źródłowy", DE for "Kraj docelowy"
	2. Outcome: Failure. Data displayed if of completely different cell than one that should be displayed, seemingly as if for "Kraj źródłowy" value from "Kraj docelowy" was set and "Kraj docelowy" value was set to AT.
2. Execution:
	1. Additional information:
		2. Used browser: Microsoft Edge
		3. Selected filter: GR for "Kraj źródłowy", then GB for "Kraj docelowy"
	2. Outcome: Failure. Data displayed if of completely different cell than one that should be displayed, seemingly as if for "Kraj źródłowy" value from "Kraj docelowy" was set and "Kraj docelowy" value was set to AT.
Reproduction:
1.  Failure: Display of wrong cell data
	1. Select any country code in "Kraj źródłowy" selector
	2. Take note of what row data is pulled from
	3. Select any country code in "Kraj docelowy" selector
	4. Take note this value did not exist in row at step 2
	5. Unselect both selectors
	6. Select in "Kraj źródłowy" same country code as you selected in "Kraj docelowy"
	7. Take note that first value that at first column it is same value as in step 2
Notes:
