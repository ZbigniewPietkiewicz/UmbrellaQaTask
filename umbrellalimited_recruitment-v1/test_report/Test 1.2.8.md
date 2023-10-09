Story:
If I click cell that I just edited and didn't introduce any change, this cell shouldn't cause any action, ie sending information to server or displaying information about change being saved.
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
		2. Value provided: [6.6]
		3. Cell used: FI/FI
	2. Outcome: Failure, information about new rating is displayed and data is being sent to server.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [25]
		3. Cell used: FI/AT
	2. Outcome: Failure, information about new rating is displayed and data is being sent to server.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [0.5]
		3. Cell used: SK/FI
	2. Outcome: Failure, information about new rating is displayed and data is being sent to server.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [56]
		3. Cell used: PT/CZ
	2. Outcome: Failure, information about new rating is displayed and data is being sent to server.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [35]
		3. Cell used: RO/RO
	2. Outcome: Failure, information about new rating is displayed and data is being sent to server.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [2]
		3. Cell used: AT/RO
	5. Outcome: Failure, information about new rating is displayed and data is being sent to server.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [6.55]
		3. Cell used: RO/SK
	2. Outcome: Failure, information about new rating is displayed and data is being sent to server.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [99.99]
		3. Cell used: DK/GB
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
