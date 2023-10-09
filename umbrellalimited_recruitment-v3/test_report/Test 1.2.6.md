Story:
If I enter malformed value that contains whitespaces before or after value, it should be handled by trimming of trailing or leading whitespaces.
Steps:
1. Select cell
2. Fill out with new value that contains additional whitespaces after or before numbers
3. Value should be trimmed
4. Reload page
5. New value should be in edited cell without additional whitespaces
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [ 2]
		3. Cell used: EE/EE
	2. Outcome: Success, leading space was trimmed and value was saved.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1.01 ]
		3. Cell used: AT/EE
	2. Outcome: Success, trailing space can't be entered.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [ 6.6 ]
		3. Cell used: SK/EE
	2. Outcome: Success, both leading and trailing space was trimmed and value was saved.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [   20]
		3. Cell used: HR/FI
	2. Outcome: Partial failure, user can't enter such value as input seems to be locked to 3 characters or 2 characters decimal separator 2 characters. I consider it as partial failure as it is erroneous input and by being unable to enter user is informed it is erroneous but in not most user friendly way. 
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [60.21    ]
		3. Cell used: FR/FR
	2. Outcome: Success, multiple trailing spaces were trimmed and value was saved.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [  0.03  ]
		3. Cell used: FR/AT
	5. Outcome: Same conclusion as in execution 4. It is not exactly success as user clarity is not too high but technically it fulfills requirement.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [9 ]
		3. Cell used: SE/FR
	2. Outcome: Success, trailing space was trimmed and value was saved.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [ 83]
		3. Cell used: CH/HU
	2. Outcome: Success, leading space was trimmed and value was saved.
Reproduction:

Notes:
