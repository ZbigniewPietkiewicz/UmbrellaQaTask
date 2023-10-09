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
		2. Value provided: [2]
		3. Cell used: LV/LV for error cell, ES/RO for valid cell.
	2. Outcome: Success, error cell is still highlighted.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [3]
		3. Cell used: LV/AT for error cell, ES/RO for valid cell
	2. Outcome: Success, error cell is still highlighted.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided:  [4]
		3. Cell used: SK/LV for error cell, ES/RO for valid cell
	2. Outcome: Success, error cell is still highlighted.
4. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [5]
		3. Cell used: NL/NL for error cell, FR/HR for valid cell
	5. Outcome: Success, error cell is still highlighted.
5. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [6]
		3. Cell used: AT/NL for error cell, FR/HR for valid cell
	5. Outcome: Success, error cell is still highlighted.
6.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [7]
		3. Cell used: NL/SK for error cell, FR/HR for valid cell
	2. Outcome: Success, error cell is still highlighted.
Reproduction:
Notes: