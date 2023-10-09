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
		3. Selected filter: CZ for "Kraj źródłowy", FR for "Kraj docelowy"
	2. Outcome: Success, only CZ/FR cell is being displayed.
2. Execution:
	1. Additional information:
		2. Used browser: Microsoft Edge
		3. Selected filter: FR for "Kraj źródłowy", then BE for "Kraj docelowy"
	2. Outcome: Success, only FR/BE cell is being displayed
Reproduction:

Notes:
