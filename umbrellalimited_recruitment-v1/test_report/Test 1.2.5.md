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
		2. Value provided: [1 0]
		3. Cell used: GR/GR
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [7  87]
		3. Cell used: GR/AT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1 1]
		3. Cell used: SK/GR
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [5   7 2]
		3. Cell used: PL/FR
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [5 5 5]
		3. Cell used: HU/HU
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [6 6]
		3. Cell used: HU/AT
	5. Outcome: Success, modal with information that it is incorrect value was displayed.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [1 0 0]
		3. Cell used: SK/HU
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided:  [3 5]
		3. Cell used: BG/LU
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
Reproduction:

Notes:
