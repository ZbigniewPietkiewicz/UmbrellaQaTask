Story:
If I enter malformed value that contains multiple decimal separators, it should not be saved.
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
		3. Cell used: NL/NL
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1..0]
		3. Cell used: AT/NL
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [.6.7]
		3. Cell used: NL/SK
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1,5.7]
		3. Cell used: BG/CZ
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [..7]
		3. Cell used: ES/ES
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.1.2]
		3. Cell used: ES/AT
	5. Outcome: Success, modal with information that it is incorrect value was displayed.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [4.3.3.2]
		3. Cell used: SK/ES
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [54...]
		3. Cell used: SI/CH
	2. Outcome: Success, modal with information that it is incorrect value was displayed.
Reproduction:

Notes:
