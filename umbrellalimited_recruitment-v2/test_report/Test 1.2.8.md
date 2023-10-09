Story:
If I click cell that I just edited and didn't introduce any change, this cell shouldn't cause any action, i.e. sending information to server or displaying information about change being saved.
Steps:
1. Select cell
2. Fill out with new value that is number in range of (0, 100>
3. There should be information on value being saved
4. Press on another cell
5. New value should be in edited cell
6. Press cell that was edited
7. Press on other cell
8. Nothing should happen
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1.23]
		3. Cell used: GR/GR
	2. Outcome: Failure, information about new rating is displayed and data is being sent to server.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [13.7]
		3. Cell used: GR/AT
	2. Outcome: Failure, information about new rating is displayed and data is being sent to server.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided:  [20]
		3. Cell used: SK/GR
	2. Outcome: Failure, information about new rating is displayed and data is being sent to server.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [75.5]
		3. Cell used: HU/RO
	2. Outcome: Failure, information about new rating is displayed and data is being sent to server.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.13]
		3. Cell used: PL/PL
	2. Outcome: Failure, information about new rating is displayed and data is being sent to server.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [3]
		3. Cell used: PL/AT
	5. Outcome: Failure, information about new rating is displayed and data is being sent to server.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [1]
		3. Cell used: SK/PL
	2. Outcome: Failure, information about new rating is displayed and data is being sent to server.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [42.24]
		3. Cell used: RO/CZ
	2. Outcome: Failure, information about new rating is displayed and data is being sent to server.
Reproduction:
1.  Failure: Data is being saved and sent to server despite no change being made
	1. Select any cell
	2. Enter valid data into cell
	3. Select another cell to save data
	4. Select edited cell
	5. DO NOT EDIT CELL
	6. Press another cell
	7. Information about data being saved will be displayed and data is being send to server.
Notes:
Seems that some trigger is failing here.
