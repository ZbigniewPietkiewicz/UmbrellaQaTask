Story:
If I copy paste erroneous input like in scenario 1.2.1, it should be handled in same way like in 1.2.1.
Steps:
1. Prepare erroneous value that falls under or is equal 0 or is above 100 and copy this value
2. Select cell
3. Copy value into cell
4. There should be information on value not being saved
5. Reload page
6. New value should not be in edited cell
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [0.00]
		3. Cell used: PL/PL
	2. Outcome: Partial failure, value is not saved, but it wasn't blocked from being sent to server.
2. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [105]
		3. Cell used: PL/AT
	2. Outcome: Success, user is informed via modal that this is not valid value.
3. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [-0.01]
		3. Cell used: SK/PL
	2. Outcome: Success, user is informed via modal that this is not valid value.
4. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1000]
		3. Cell used: RO/HU
	2. Outcome: Success, user is informed via modal that this is not valid value.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [100.01]
		3. Cell used: IT/IT
	2. Outcome: Success, user is informed via modal that this is not valid value.
6. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [2000]
		3. Cell used: IT/AT
	2. Outcome: Partial success, value is not saved, but it wasn't blocked from being sent to server.
7. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [-0]
		3. Cell used: CZ/NL
	2. Outcome: Partial failure, value is not saved, but it wasn't blocked from being sent to server.
8. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [-5]
		3. Cell used: PL/PL
	2. Outcome: Success, user is informed via modal that this is not valid value.
Reproduction:
Notes:
Outcomes and observations are same as in 1.2.1.