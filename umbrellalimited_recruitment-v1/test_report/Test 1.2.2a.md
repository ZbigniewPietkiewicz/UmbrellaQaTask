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
		2. Value provided: [od]
		3. Cell used: CY/CY
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [pr23]
		3. Cell used: CY/AT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [C3]
		3. Cell used: SK/CY
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [X.4]
		3. Cell used: DK/MT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [four]
		3. Cell used: FI/FI
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
6. Execution
	4. Additional information:
		1. Used browser: Brave
		2. Value provided: [aaaa]
		3. Cell used: AT/FI
	5. Outcome: Success, modal with information that it is incorrect value was displayed.
7.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [3O7]
		3. Cell used: FI/SK
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
8.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [mp3]
		3. Cell used: CZ/NL
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
Reproduction:

Notes:
Outcomes and observations are same as in 1.2.2.