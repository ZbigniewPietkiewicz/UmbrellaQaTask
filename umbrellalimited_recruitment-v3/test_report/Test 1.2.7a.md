Story:
If I copy paste erroneous input like in scenario 1.2.7, it should be handled in same way like in 1.2.7
Steps:
1. Prepare erroneous value that scale exceeds two
2. Select cell
3. Copy value into cell
4. Value should be not accepted beyond two numbers after decimal separator or should be trimmed down to two numbers after decimal separator
5. Reload page
6. New value should be in edited cell and only have two numbers after decimal separator
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [5.555]
		3. Cell used: SE/SE
	2. Outcome: Success, user is unable to enter number with scale more than two.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [99.999]
		3. Cell used: AT/SE
	2. Outcome: Success, user is unable to enter number with scale more than two.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [ 0.0004]
		3. Cell used: SE/SK
	2. Outcome: Success, user is unable to enter number with scale more than two.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [4.123456789]
		3. Cell used: CY/HR
	2. Outcome: Success, user is unable to enter number with scale more than two.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [20.076]
		3. Cell used: IT/IT
	2. Outcome: Success, user is unable to enter number with scale more than two.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.667]
		3. Cell used: AT/IT
	5. Outcome: Success, user is unable to enter number with scale more than two.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.009]
		3. Cell used: IT/SK
	2. Outcome: Success, user is unable to enter number with scale more than two.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [99.9999]
		3. Cell used: GR/DK
	2. Outcome: Success, user is unable to enter number with scale more than two.
Reproduction:
Notes:
I think all count as success as unlike bug found in 1.2.5a and 1.2.6a, this one does not lead to potential mistake from user that could lead into erroneous data being entered.