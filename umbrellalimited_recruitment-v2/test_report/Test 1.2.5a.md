Story:
If I copy paste erroneous input like in scenario 1.2.5, it should be handled in same way like in 1.2.5
Steps:
1. Prepare erroneous value  that contains additional whitespaces between numbers and copy this value
2. Select cell
3. Copy value into cell
4. There should be information on value not being saved
5. Reload page
6. New value should not be in edited cell
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [5 56]
		3. Cell used: SE/SE
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [35 7]
		3. Cell used: AT/SE
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1.1 0]
		3. Cell used: SE/AT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [89 90]
		3. Cell used: BE/GR
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0 1]
		3. Cell used: SI/SI
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [4 5]
		3. Cell used: AT/SI
	5. Outcome: Success, modal with information that it is incorrect value was displayed.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [8 33]
		3. Cell used: SI/SK
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [100 00]
		3. Cell used: SE/FR
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
Reproduction:

Notes:
Outcomes and observations are same as in 1.2.5.