Story:
If I copy paste erroneous input like in scenario 1.2.2, it should be handled in same way like in 1.2.2.
Steps:
1. Prepare erroneous value that contains one or more letters and copy this value
2. Select cell
3. Copy value into cell
4. There should be information on value not being saved
5. Reload page
6. New value should not be in edited cell
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [dwa]
		3. Cell used: MT/MT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [e.3]
		3. Cell used: AT/MT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [o.oo2]
		3. Cell used: MT/SK
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [mp5]
		3. Cell used: HR/CZ
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [five5]
		3. Cell used: CZ/CZ
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
6. Execution
	4. Additional information:
		1. Used browser: Brave
		2. Value provided: [aaaa]
		3. Cell used: AT/CZ
	5. Outcome: Success, modal with information that it is incorrect value was displayed.
7.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [20S]
		3. Cell used: CZ/SK
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
8.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1f]
		3. Cell used: BE/SI
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
Reproduction:

Notes:
Outcomes and observations are same as in 1.2.2.