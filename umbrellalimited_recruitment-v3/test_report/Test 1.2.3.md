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
		2. Value provided: [2%]
		3. Cell used: SI/SI
	2. Outcome: Success, value is not accepted.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [20!]
		3. Cell used: AT/SI
	2. Outcome: Success, value is not accepted.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [/333]
		3. Cell used: SI/SK
	2. Outcome: Success, value is not accepted.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [10.(6)]
		3. Cell used: LU/CY
	2. Outcome: Success, value is not accepted.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [;1}]
		3. Cell used: IE/IE
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [:=7]
		3. Cell used: IE/AT
	5. Outcome: Success, value is not accepted.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [!@#$%]
		3. Cell used: SK/IE
	2. Outcome: Success, value is not accepted.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [<56>]
		3. Cell used: IT/EE
	2. Outcome: Success, value is not accepted.
Reproduction:

Notes:
