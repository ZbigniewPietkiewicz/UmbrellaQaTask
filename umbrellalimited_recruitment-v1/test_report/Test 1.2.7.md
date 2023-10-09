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
		2. Value provided: [10.555]
		3. Cell used: PT/PT
	2. Outcome: Failure, value was accepted and saved. Value displayed is 10.55.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1.999]
		3. Cell used: PT/AT
	2. Outcome: Failure, value was accepted and saved. Value displayed is rounded up to 2.00.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided:  [0.0001]
		3. Cell used: SK/PT
	2. Outcome: Failure, value was accepted and saved. Value displayed is rounded down to 0.00.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [2.33333]
		3. Cell used: GB/EE
	2. Outcome: Failure, value was accepted and saved. Value is displayed as 2.33.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.036]
		3. Cell used: IE/IE
	2. Outcome: Failure, value was accepted and saved. Value displayed is rounded up to 0.04.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.5549]
		3. Cell used: IE/AT
	5. Outcome: Failure, value was accepted and saved. Value displayed is 0.55.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.987654321]
		3. Cell used: SK/IE
	2. Outcome: Failure, value was accepted and saved. Value displayed is 0.99.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [99.996]
		3. Cell used: FR/IT
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
