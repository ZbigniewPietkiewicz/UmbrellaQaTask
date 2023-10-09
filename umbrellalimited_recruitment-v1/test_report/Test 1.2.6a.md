Story:
If I copy paste erroneous input like in scenario 1.2.6, it should be handled in same way like in 1.2.6
Steps:
1. Prepare erroneous value that that contains additional whitespaces after or before numbers and copy this value
2. Select cell
3. Copy value into cell
4. Value should be trimmed
5. Reload page
6. New value should be in edited cell without additional whitespaces
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [20 ]
		3. Cell used: LV/LV
	2. Outcome: Success, leading space was trimmed and value was saved.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [80.2 ]
		3. Cell used: LV/AT
	2. Outcome: Success, trailing space was trimmed and value was saved.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [ 4.65 ]
		3. Cell used: SK/LV
	2. Outcome: Success, both leading and trailing space was trimmed and value was saved.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [   50]
		3. Cell used: CH/RO
	2. Outcome: Success, multiple leading spaces were trimmed and value was saved.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.03       ]
		3. Cell used: SK/SK
	2. Outcome: Success, multiple trailing spaces were trimmed and value was saved.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [  54.5  ]
		3. Cell used: SK/AT
	5. Outcome: Success, multiple leading and trailing spaces were trimmed and value was saved.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [24 ]
		3. Cell used: AT/SK
	2. Outcome: Success, trailing space was trimmed and value was saved.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [ 1.1]
		3. Cell used: PL/FI
	2. Outcome: Success, leading space was trimmed and value was saved.
Reproduction:

Notes:
