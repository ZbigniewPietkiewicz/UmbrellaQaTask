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
		2. Value provided: [0]
		3. Cell used: ES/ES
	2. Outcome: Success, value is not accepted.
2. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [150]
		3. Cell used: ES/AT
	2. Outcome: Success, value is not accepted.
3. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [-0.15]
		3. Cell used: SK/ES
	2. Outcome: Success, value is not accepted.
4. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1000]
		3. Cell used: IE/GR
	2. Outcome: Success, value is not accepted but curious behavior found. Additional notes in notes section
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [200.00]
		3. Cell used: IT/IT
	2. Outcome: Success, value is not accepted but curious behavior found. Additional notes in notes section
6. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [-0.00]
		3. Cell used: IT/AT
	2. Outcome: Success, value is not accepted but curious behavior found. Additional notes in notes section
7. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0]
		3. Cell used: SK/IT
	2. Outcome: Partial failure, value is not saved, but it wasn't blocked from being sent to server.
8. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [-100]
		3. Cell used: BG/GB
	2. Outcome: Success, user is informed via modal that this is not valid value.
Reproduction:
Notes:
Interesting thing occurs when number that has more than four numbers is copy-pasted. If it is first copy paste, number will be cropped only to 4 chars (i.e., 200.00 becomes 200.), and user is able to add more numbers. However, if in same cell correct number will be entered and then too-long-number will be copy-pasted again, it will be trimmed to max 3 numbers (ie, 200.00 becomes plain 200). Further investigation is required, but it doesn't seem to be critical issue as incorrect value still won't be accepted.