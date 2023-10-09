Story:
If I copy paste erroneous input like in scenario 1.2.4, it should be handled in same way like in 1.2.4.
Steps:
1. Prepare erroneous value that contains multiple decimal separators and copy this value
2. Select cell
3. Copy value into cell
4. There should be information on value not being saved
5. Reload page
6. New value should not be in edited cell
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [2.0.4.5]
		3. Cell used: MT/MT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [10,2.5]
		3. Cell used: MT/AT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [,80.3]
		3. Cell used: SK/MT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1.10.4]
		3. Cell used: FR/RO
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [.7.]
		3. Cell used: SI/SI
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [..]
		3. Cell used: SI/AT
	5. Outcome: Success, modal with information that it is incorrect value was displayed.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.0.1]
		3. Cell used: SK/SI
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [.56,5]
		3. Cell used: FR/PT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
Reproduction:

Notes:
Outcomes and observations are same as in 1.2.4.