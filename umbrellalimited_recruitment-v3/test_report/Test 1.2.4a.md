Story:
If I copy paste erroneous input like in scenario 1.2.4, it should be handled in same way like in 1.2.4.
Steps:
1. Prepare erroneous value that contains multiple decimal separators and copy this value
2. Select cell
3. Copy value into cell
4. There should be information on value not being saved
5. Reload page
6. New value should not be in edited cell
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [200..5]
		3. Cell used: LU/LU
	2. Outcome: Success, value is not accepted.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [20.5.]
		3. Cell used: LU/AT
	2. Outcome: Value was trimmed of last . and as such it was able to pass through. I am not sure if I would qualify it as success, as such I would call for more tests and design discussion.
		1. Note added later: Decided it is treated as failure basing on observations in 1.2.5a tests. Test 1.2.10 is added to cover this scenario.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [20.2.2]
		3. Cell used: SK/LU
	2. Outcome: Same scenario as in 2 execution log. I am considering it as bug/oversight as it may lead to unwanted scenarios. To discuss with dev/design team.
		1. Note added later: Decided it is treated as failure basing on observations in 1.2.5a tests. Test 1.2.10 is added to cover this scenario.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [40..4]
		3. Cell used: MT/GB
	2. Outcome: Success, value is not accepted.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [..8.]
		3. Cell used: ES/ES
	2. Outcome: Success, value is not accepted.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [..]
		3. Cell used: AT/ES
	5. Outcome: Success, value is not accepted.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [1.0.0.3]
		3. Cell used: SE/AT
	2. Outcome: Success, value is not accepted.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [20.30.40]
		3. Cell used: ES/CZ
	2. Outcome: Same scenario as in 2 execution log. I am considering it as bug/oversight as it may lead to unwanted scenarios. To discuss with dev/design team.
		1. Note added later: Decided it is treated as failure basing on observations in 1.2.5a tests.
Reproduction:

Notes:
While there is behavior I can't outright call failure, it is concerning and may lead to some potential issues. Definitely to raise on dev synchro/standup/privately.