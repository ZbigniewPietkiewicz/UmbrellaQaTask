Story:
If I select value from "Kraj źródłowy" filter and I select value from "Kraj docelowy", I should see only cell that has selected "coordinates".
Steps:
1. Click on "Kraj docelowy" selector
2. Select country code
3. Click on "Kraj źródłowy" selector
2. Select country code
4. One cell should be visible and it's data same as in unfiltered table
Execution logs:
1. Execution:
	1. Additional information:
		2. Used browser: Brave
		3. Selected filter: SK for "Kraj docelowy", GR for "Kraj źródłowy"
	2. Outcome: Complete failure. Instead of one cell, whole row is showed and it is AT row.
2. Execution:
	1. Additional information:
		2. Used browser: Microsoft Edge
		3. Selected filter: GR for "Kraj docelowy", then GB for "Kraj źródłowy"
	2. Outcome: Complete failure. Instead of one cell, whole row is showed and it is AT row.
Reproduction:
1.  Failure: Displays a AT row.
	1. Select any country code in "Kraj docelowy" selector
	2. Select any country code in "Kraj źródłowy" selector
	3. AT row will be displayed, erroneously marked as "Kraj źródłowy" row.
Notes:
I feel this whole filtering module needs in depth analysis for source of problem.