Story:
If I enter erroneous value that contains letters, it should not be saved.
Steps:
1. Select cell
2. Fill out with new value that contains one or more letters
3. There should be information on value not being saved
4. Reload page
5. New value should not be in edited cell
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [zero]
		3. Cell used: LT/LT
	2. Outcome: Success, value is not accepted.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [O.O1]
		3. Cell used: AT/LT
	2. Outcome: Success, value is not accepted.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1.e]
		3. Cell used: LT/SK
	2. Outcome: Success, value is not accepted.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [x.x4]
		3. Cell used: PL/CH
	2. Outcome: Success, value is not accepted.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [two]
		3. Cell used: HR/HR
	2. Outcome: Success, value is not accepted.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [III]
		3. Cell used: HR/AT
	5. Outcome: Success, value is not accepted.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [XIX]
		3. Cell used: SK/HR
	2. Outcome: Success, value is not accepted.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [z5.3y]
		3. Cell used: MT/PT
	2. Outcome: Success, value is not accepted.
Reproduction:

Notes:
