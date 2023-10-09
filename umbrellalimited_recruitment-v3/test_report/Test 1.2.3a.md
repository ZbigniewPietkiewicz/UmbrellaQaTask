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
		3. Cell used: GB/GB
	2. Outcome: Success, value is not accepted.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [7-70]
		3. Cell used: GB/AT
	2. Outcome: Success, value is not accepted.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [~11]
		3. Cell used: SK/GB
	2. Outcome: Success, value is not accepted.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [(10.01)]
		3. Cell used: NL/LT
	2. Outcome: Success, value is not accepted.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [--24]
		3. Cell used: HU/HU
	2. Outcome: Success, value is not accepted.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [7#4]
		3. Cell used: HU/AT
	5. Outcome: Success, value is not accepted.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [12!]
		3. Cell used: SK/HU
	2. Outcome: Success, value is not accepted.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [&66+]
		3. Cell used: LU/HR
	2. Outcome: Success, value is not accepted.
Reproduction:

Notes:
Curious behavior of trimming still occurs.