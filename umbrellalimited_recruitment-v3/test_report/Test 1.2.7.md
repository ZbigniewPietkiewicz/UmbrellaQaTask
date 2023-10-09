Story:
If I enter value that scale exceeds two, value should not be accepted or trimmed to two numbers after decimal separator.
Steps:
1. Select cell
2. Fill out with new value that scale exceeds two
3. Value should be not accepted beyond two numbers after decimal separator or should be trimmed down to two numbers after decimal separator
4. Reload page
5. New value should be in edited cell and only have two numbers after decimal separator
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [5.555]
		3. Cell used: CZ/CZ
	2. Outcome: Success, user is unable to enter number with scale more than two.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [99.999]
		3. Cell used: AT/CZ
	2. Outcome: Success, user is unable to enter number with scale more than two.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [ 0.0004]
		3. Cell used: CZ/SK
	2. Outcome: Success, user is unable to enter number with scale more than two.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [4.123456789]
		3. Cell used: HR/CH
	2. Outcome: Success, user is unable to enter number with scale more than two.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [20.076]
		3. Cell used: LV/LV
	2. Outcome: Success, user is unable to enter number with scale more than two.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.667]
		3. Cell used: AT/LV
	5. Outcome: Success, user is unable to enter number with scale more than two.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.009]
		3. Cell used: LV/SK
	2. Outcome: Success, user is unable to enter number with scale more than two.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [99.9999]
		3. Cell used: SE/EE
	2. Outcome: Success, user is unable to enter number with scale more than two.
Reproduction:
Notes: