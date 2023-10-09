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
		2. Value provided: [  11]
		3. Cell used: PL/PL
	2. Outcome: Success, leading space was trimmed and value was saved.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [ 67.0 ]
		3. Cell used: AT/PL
	2. Outcome: Success, trailing space was trimmed and value was saved.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [ 5.5 ]
		3. Cell used: PL/SK
	2. Outcome: Success, both leading and trailing space was trimmed and value was saved.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [   21]
		3. Cell used: GB/SE
	2. Outcome: Same observation as in test 1.2.6, execution 4. However, in this case it is bit more critical as in copy paste scenario user may not notice anything went wrong. Considering upgrading it as bug and that maybe better copy paste handling is needed?
		1. Note added later: Test 1.2.10 is added to cover this scenario.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [6.67   ]
		3. Cell used: GR/GR
	2. Outcome: Success, multiple trailing spaces were trimmed and value was saved.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [  0.22  ]
		3. Cell used: AT/GR
	5. Outcome: With this scenario I decided this is a failure. Same reasoning I have uses in 1.2.5a, execution 3. It may lead to wrong data being entered and user will be none the wiser.
		1. Note added later: Test 1.2.10 is added to cover this scenario.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [87  ]
		3. Cell used: GR/SK
	2. Outcome: Success, trailing space was trimmed and value was saved.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [ 3.5]
		3. Cell used: LV/IE
	2. Outcome: Success, leading space was trimmed and value was saved.
Reproduction:
1.  Failure: Input is trimmed in such way it can pass through.
	1. Prepare string of "  2.22  " and copy it
	2. Select any cell
	3. Paste value in cell
	4. Value is accepted as 2
Notes:
