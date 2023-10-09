Story:
If I enter erroneous value that contains special character outside those allowed for decimal separator (.), it should not be saved.
Steps:
1. Select cell
2. Fill out with new value that contains not allowed special characters
3. There should be information on value not being saved
4. Reload page
5. New value should not be in edited cell
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [{@1}]
		3. Cell used: SE/SE
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [5%]
		3. Cell used: SE/AT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [4:5]
		3. Cell used: SK/SE
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [2.(4)]
		3. Cell used: FR/MT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [{@1}]
		3. Cell used: HR/HR
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [=5]
		3. Cell used: AT/HR
	5. Outcome: Success, modal with information that it is incorrect value was displayed.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [!@#$]
		3. Cell used: HR/SK
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [4^7]
		3. Cell used: CZ/IE
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
Reproduction:

Notes:
