Story:
If I copy paste erroneous input like in scenario 1.2.5, it should be handled in same way like in 1.2.5
Steps:
1. Prepare erroneous value  that contains additional whitespaces between numbers and copy this value
2. Select cell
3. Copy value into cell
4. There should be information on value not being saved
5. Reload page
6. New value should not be in edited cell
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [5 56]
		3. Cell used: LT/LT
	2. Outcome: Success, value is not accepted.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [35 7]
		3. Cell used: LT/AT
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1.1 0]
		3. Cell used: SK/LT
	2. Outcome: Failure, trims at space and so input is "1.1 " which trims down to "1.1" which is accepted. Not sure how big of issue it is but worth consideration as it may cause potential issue (ie user wanted to copy paste "9.95" but accidentally put space and instead copy pasted "9.9 5" and now we have 9.9 in table...)
		1. Note added later: Test 1.2.10 is added to cover this scenario.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [89 90]
		3. Cell used: GR/LU
	2. Outcome: Success, value is not accepted.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0 1]
		3. Cell used: FI/FI
	2. Outcome: Success, value is not accepted.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [4 5]
		3. Cell used: AT/FI
	5. Outcome: Success, value is not accepted
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [8 33]
		3. Cell used: FI/SK
	2. Outcome: Success, value is not accepted
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [100 00]
		3. Cell used: SE/LV
	2. Outcome: While 100.00 is not allowed at time being and user can't manually enter 100.00 either, I think trimming behavior a failure once more.
Reproduction:
1.  Failure: Input is trimmed in such way it can pass through without user noticing as error.
	1. Prepare string of 9.9 5 and copy it
	2. Select any cell
	3. Paste value in cell
	4. Value is accepted as 9.9
Notes: