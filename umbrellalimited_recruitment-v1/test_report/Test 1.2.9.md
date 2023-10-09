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
		2. Value provided: [10.5]
		3. Cell used: GR/GR for error cell, BG/MT for valid cell.
	2. Outcome: Failure, highlight on error cell is lost.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [3]
		3. Cell used: GR/AT for error cell, BG/MT for valid cell
	2. Outcome: Failure, highlight on error cell is lost.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [0.5]
		3. Cell used: SK/GR for error cell, BG/MT for valid cell
	2. Outcome: Failure, highlight on error cell is lost.
4. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [9.45]
		3. Cell used: PL/PL for error cell, NL/HR for valid cell
	5. Outcome: Failure, highlight on error cell is lost.
5. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [21]
		3. Cell used: AT/PL for error cell, NL/HR for valid cell
	5. Outcome: Failure, highlight on error cell is lost.
6.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [44]
		3. Cell used: PL/SK for error cell, NL/HR for valid cell
	2. Outcome: Failure, highlight on error cell is lost.
Reproduction:
1.  Failure: Error cell highlight is lost
	1. Select any cell
	2. Enter 0.0 in cell 
	3. Select another cell to save data
	4. Information about error while saving data will be displayed and cell will be highlighted
	5. Select another cell to edit
	6. Enter valid data into cell, ie 15
	7. Press another cell
	8. Information about correct save will be displayed and highlight of cell with error will be lost.
Notes:
No risk for data as server still won't allow error data but risk for user comfort.
