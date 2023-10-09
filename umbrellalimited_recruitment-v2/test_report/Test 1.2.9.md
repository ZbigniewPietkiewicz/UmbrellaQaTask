Story:
If I have some cell highlighted as error I should not lose this information if I edit another cell.
Steps:
1. Select cell
2. Fill out it with erroneous data, ie 0.0
3. There should be information on error during data being saved
4. Cell that had trouble being saved should be highlighted as error
5. Press another cell
6. Enter valid data into cell
7. Press another cell
8. Cell that had trouble being saves should still be highlighted as error
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: 2
		3. Cell used: NL/NL for error cell, CZ/FR for valid cell.
	2. Outcome: Success, error cell is still highlighted.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: 3
		3. Cell used: NL/AT for error cell, CZ/FR for valid cell
	2. Outcome: Success, but new error was found - multiple error cells can't be highlighted.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided:  4
		3. Cell used: SK/NL for error cell, CZ/FR for valid cell
	2. Outcome: Success, error cell is still highlighted.
4. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: 5
		3. Cell used: DK/DK for error cell, HR/PL for valid cell
	5. Outcome: Success, error cell is still highlighted.
5. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: 6
		3. Cell used: DK/AT for error cell, HR/PL for valid cell
	5. Outcome: Success, error cell is still highlighted.
6.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: 7
		3. Cell used: SK/DK for error cell, HR/PL for valid cell
	2. Outcome: Success, error cell is still highlighted.
Reproduction:
1.  Failure: One error highlight cell overrides another:
	1. Select any cell
	2. Enter erroneous data, for example 0.0
	3. Select another cell
	4. Enter erroneous data, for example 0.0
	5. Original highlighted error cell won't be highlighted anymore.
Notes:
While there was improvement it is worthwhile question if multiple error cells should be displayed?