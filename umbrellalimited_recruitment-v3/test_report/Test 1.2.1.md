Story:
If I enter erroneous value that falls beyond allowed range, it should not be saved.
Steps:
1. Select cell
2. Fill out with new value that falls under or is equal to 0 or is above 100
3. There should be information on value not being saved
4. Reload page
5. New value should not be in edited cell
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [-0]
		3. Cell used: BG/BG
	2. Outcome: Success, value is not accepted.
2. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [-5]
		3. Cell used: BG/AT
	2. Outcome: Success, value is not accepted.
3. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [100.05]
		3. Cell used: SK/BG
	2. Outcome: Success, value is not accepted and is impossible to enter.
4. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [-6.66]
		3. Cell used: CH/SE
	2. Outcome: Success, value is not accepted.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [1000.00]
		3. Cell used: RO/RO
	2. Outcome: Success, value is not accepted and is impossible to enter.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [-0.00]
		3. Cell used: RO/AT
	5. Outcome: Success, value is not accepted.
7. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0]
		3. Cell used: SK/RO
	2. Outcome: Success, value is not accepted.
8. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [100.1]
		3. Cell used: PT/MT
	2. Outcome: Success, value is not accepted and is impossible to enter.
Reproduction:

Notes:
Mechanism that blocks putting in more numbers if integer part has already three numbers may be bit odd for user, but makes sense from blocking point of view.