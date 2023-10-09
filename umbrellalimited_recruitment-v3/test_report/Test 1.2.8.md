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
		3. Cell used: CH/CH
	2. Outcome: Success, no data send to server.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [13.7]
		3. Cell used: CH/AT
	2. Outcome: Success, no data send to server.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [ 20]
		3. Cell used: SK/CH
	2. Outcome: Success, no data send to server.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [75.5]
		3. Cell used: PT/HR
	2. Outcome: Success, no data send to server.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.13]
		3. Cell used: MT/MT
	2. Outcome: Success, no data send to server.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [3]
		3. Cell used: MT/AT
	5. Outcome: Success, no data send to server.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [1]
		3. Cell used: SK/MT
	2. Outcome: Success, no data send to server.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [42.24]
		3. Cell used: PT/BG
	2. Outcome: Success, no data send to server.
Reproduction:
Notes:
