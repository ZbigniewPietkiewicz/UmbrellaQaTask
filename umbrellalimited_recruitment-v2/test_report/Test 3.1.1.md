Story:
I should be able to remove applied "Kraj źródłowy" filter by choosing empty value.
Steps:
1. Click on "Kraj źródłowy" selector
2. Select desired country code
2. Click on "Kraj źródłowy" selector
3. Select empty country code
4. Full data table should be visible
Execution logs:
1. Execution:
	1. Additional information:
		2. Used browser: Brave
		3. Selected filter: GR
	2. Outcome: Partial success. At this point there is no empty value that can be chosen, however user can manually remove selected country code and it will work same as selecting empty country code.
2. Execution:
	1. Additional information:
		2. Used browser: Microsoft Edge
		3. Selected filter: PT
	2. Outcome: Partial success. At this point there is no empty value that can be chosen, however user can manually remove selected country code and it will work same as selecting empty country code.
Reproduction:

Notes:
Same observation as in 2.1.1: Input is no longer case sensitive, progress. Potential issue found: If use only enters one letter from whole country code, for example "b", rows for BE, BG and GB will be displayed. Worthwhile to discuss is that is feature to be properly introduced. 
