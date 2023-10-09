Story:
If I enter malformed value that contains whitespaces between numbers, it should not be saved. 
Steps:
1. Select cell
2. Fill out with new value that contains additional whitespaces between numbers
3. There should be information on value not being saved
4. Reload page
5. New value should not be in edited cell
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1 3]
		3. Cell used: AT/AT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [0 4]
		3. Cell used: AT/SK
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [16 8]
		3. Cell used: SK/AT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1 0 0]
		3. Cell used: HR/IE
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [10 00]
		3. Cell used: BG/BG
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [87 1]
		3. Cell used: AT/BG
	5. Outcome: Success, modal with information that it is incorrect value was displayed.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [6 4]
		3. Cell used: BG/SK
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0 0]
		3. Cell used: CY/CZ
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
Reproduction:

Notes:
