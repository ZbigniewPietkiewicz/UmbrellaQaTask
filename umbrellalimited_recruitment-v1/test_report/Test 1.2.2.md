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
		2. Value provided: [a]
		3. Cell used: AT/AT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1O]
		3. Cell used: SK/AT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1.5e]
		3. Cell used: AT/SK
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1x.5]
		3. Cell used: MT/CY
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [one]
		3. Cell used: FR/FR
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [III]
		3. Cell used: FR/AT
	5. Outcome: Success, modal with information that it is incorrect value was displayed.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [LIV]
		3. Cell used: SK/FR
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [55.z]
		3. Cell used: MT/CY
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
Reproduction:

Notes:
