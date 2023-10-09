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
		3. Cell used: IE/IE
	2. Outcome: Success, value is not accepted.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [0 4]
		3. Cell used: AT/IE
	2. Outcome: Success, value is not accepted.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [16 8]
		3. Cell used: IE/SK
	2. Outcome: Success, value is not accepted but again odd behavior noticed.
		1. Note added later: while in this case it is not a bug, related behavior causes bug that test 1.2.10 is covering.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1 0 0]
		3. Cell used: LU/BE
	2. Outcome: Success, value is not accepted.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [10 00]
		3. Cell used: GB/GB
	2. Outcome: Success, value is not possible to be entered as it starts trimming after space.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [87 1]
		3. Cell used: AT/GB
	5. Outcome: Success, value is not possible to be entered as it starts trimming after space.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [6 4]
		3. Cell used: GB/SK
	2. Outcome: Success, value is not accepted.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0 0]
		3. Cell used: GB/BE
	2. Outcome: Success, value is not accepted.
Reproduction:

Notes:
