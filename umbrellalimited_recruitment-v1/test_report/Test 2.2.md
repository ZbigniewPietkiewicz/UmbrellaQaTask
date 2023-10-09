Story:
I should be able to see change of data when switching "Kraj docelowy" option from one country code to another.
Steps:
1. Click on "Kraj docelowy" selector
2. Select country code
3. Column of data of selected country code should be visible and it's data same as in unfiltered table
4. Click on "Kraj docelowy" selector
5. Select another country code
6. Column of data of just selected country code should be visible and it's data same as in unfiltered table
Execution logs:
1. Execution:
	1. Additional information:
		2. Used browser: Brave
		3. Selected filter: SK, then IT
	2. Outcome: Failure. Header changes but data in column does not.
2. Execution:
	1. Additional information:
		2. Used browser: Microsoft Edge
		3. Selected filter: DK, then FR
	2. Outcome: Failure. Header changes but data in column does not.
Reproduction:
1.  Failure: New selected column data is not loading.
	1. Select any country code, ie AT in "Kraj docelowy" selector
	2. Note that correct data is displayed
	3. Select any other country node, ie BG in "Kraj docelowy" selector
	4. Note that data of country code that was selected first is still being displayed despite header changed.
Notes:
Worth noting is that user decides to clear filter before applying new filter, this issue doesn't emerge. IT seems it is some refresh/pull data issue.
