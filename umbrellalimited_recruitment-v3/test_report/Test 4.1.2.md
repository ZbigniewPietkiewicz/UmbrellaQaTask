Story:
If I have both "Kraj źródłowy" and "Kraj docelowy" filters applied, I should be able to remove "Kraj źródłowy" filter by pressing clear value button.
Steps:
1. Click on "Kraj źródłowy" selector
2. Select country code
3. Click on "Kraj docelowy" selector
2. Select country code
4. One cell should be visible and it's data same as in unfiltered table
5. Select clear value button (x) next to "Kraj źródłowy" selector
7. Column of data of just selected country code should be visible and it's data same as in unfiltered table.
Execution logs:
1. Execution:
	1. Additional information:
		2. Used browser: Brave
		3. Selected filter: PL for "Kraj źródłowy", FR for "Kraj docelowy"
	2. Outcome: Success, only FR column is being displayed.
2. Execution:
	1. Additional information:
		2. Used browser: Microsoft Edge
		3. Selected filter: ES for "Kraj źródłowy", then IE for "Kraj docelowy"
	2. Outcome: Success, only IE column is being displayed.
Reproduction:
Reproduction:

Notes:
No such functionality exists at current moment. Awaiting introduction of this functionality.