Story:
I should be able to see change of data when switching "Kraj źródłowy" option from one country code to another.
Steps:
1. Click on "Kraj źródłowy" selector
2. Select country code
3. Row of data of selected country code should be visible and it's data same as in unfiltered table
4. Click on "Kraj źródłowy" selector
5. Select another country code
6. Row of data of just selected country code should be visible and it's data same as in unfiltered table.
Execution logs:
1. Execution:
	1. Additional information:
		2. Used browser: Brave
		3. Selected filter: DE, then FI
	2. Outcome: Failure. Header changes to selected country code but data changes as if AT was selected.
2. Execution:
	1. Additional information:
		2. Used browser: Microsoft Edge
		3. Selected filter: GR, then GB
	2. Outcome: Failure. Header changes to selected country code but data changes as if AT was selected.
Reproduction:
1.  Failure: New selected column data is not loading.
	1. Select any country code, ie DE in "Kraj źródłowy" selector
	2. Note that correct data is displayed
	3. Select any other country code, ie FR in "Kraj źródłowy" selector
	4. Note that data is displayed for AT country code
Notes:
