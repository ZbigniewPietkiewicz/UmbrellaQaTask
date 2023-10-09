Story:
If I enter malformed value that contains multiple or wrong (,) decimal separators, it should not be saved.
Steps:
1. Select cell
2. Fill out with new value that contains multiple decimal separators
3. There should be information on value not being saved
4. Reload page
5. New value should not be in edited cell
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1.1.1]
		3. Cell used: SE/SE
	2. Outcome: Success, value is not accepted.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1..0]
		3. Cell used: SE/AT
	2. Outcome: Success, value is not accepted.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [.6.7]
		3. Cell used: SK/SE
	2. Outcome: Success, value is not accepted.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1,5.7]
		3. Cell used: EE/BG
	2. Outcome: Success, value is not accepted.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [..7]
		3. Cell used: HR/HR
	2. Outcome: Success, value is not accepted.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.1.2]
		3. Cell used: AT/HR
	5. Outcome: Success, value is not accepted.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [4.3.3.2]
		3. Cell used: HR/SK
	2. Outcome: Success, value is not accepted.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [54...]
		3. Cell used: DK/LV
	2. Outcome: Success, value is not accepted.
Reproduction:

Notes:
