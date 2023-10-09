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
		3. Cell used: CY/CY
	2. Outcome: Failure, value was accepted and saved. Value displayed is 5.55.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [99.999]
		3. Cell used: AT/CY
	2. Outcome: Failure, value was accepted and saved. Value displayed is rounded up to 100.00.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided:  [0.0004]
		3. Cell used: CY/SK
	2. Outcome: Failure, value was accepted and saved. Value displayed is rounded down to 0.00.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [4.123456789]
		3. Cell used: SE/GB
	2. Outcome: Failure, value was accepted and saved. Value is displayed as 4.12.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [20.076]
		3. Cell used: LV/LV
	2. Outcome: Failure, value was accepted and saved. Value displayed is rounded up to 20.08.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.667]
		3. Cell used: AT/LV
	5. Outcome: Failure, value was accepted and saved. Value displayed is 0.67.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.009]
		3. Cell used: LV/SK
	2. Outcome: Failure, value was accepted and saved. Value displayed is 0.01.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [99.9999]
		3. Cell used: SE/EE
	2. Outcome: Failure, value was accepted and saved. Value displayed is 100.
Reproduction:
1.  Failure: Decimal with scale above 2 is saved and allows zero to be displayed in table.
	1. Select any cell
	2. Enter value of 0.0001
	3. Value is saved and user can see 0.00 in table which is not allowed value.
2. Failure: Decimal with scale above 2 is saved and display issues.
	1. Select any cell
	2. Enter value that at third or further position after decimal separator has number from (0, 5> range ie 7.455
	3. Reload page
	4. In this case value displayed will seem to be trimmed as it will display 7.45
	5. Select any cell 
	6. Enter value that at third or further position after decimal separator has number from (5, 9> range, ie 1.006
	7. Reload page
	8. In this case value displayed will seem to be rounded up as it will display 1.01
Notes:
Same error like last time.