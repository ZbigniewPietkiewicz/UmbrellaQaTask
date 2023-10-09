Story:
If I copy paste erroneous input like in scenario 1.2.3, it should be handled in same way like in 1.2.3.
Steps:
1. Prepare erroneous value that contains special character outside those allowed for decimal separator (.) and copy this value
2. Select cell
3. Copy value into cell
4. There should be information on value not being saved
5. Reload page
6. New value should not be in edited cell
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [60-203]
		3. Cell used: EE/EE
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [7-70]
		3. Cell used: AT/EE
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [~11]
		3. Cell used: EE/SK
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [(10.01)]
		3. Cell used: GR/HR
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [--24]
		3. Cell used: BE/BE
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [7#4]
		3. Cell used: BE/AT
	5. Outcome: Success, modal with information that it is incorrect value was displayed.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [12!]
		3. Cell used: SK/BE
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [&66+]
		3. Cell used: CY/PL
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
Reproduction:

Notes:
Outcomes and observations are same as in 1.2.3.