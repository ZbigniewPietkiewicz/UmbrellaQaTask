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
		2. Value provided: [0]
		3. Cell used: CZ/CZ
	2. Outcome: Partial failure, value is not saved, but it wasn't blocked from being sent to server.
2. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [-5]
		3. Cell used: CZ/SK
	2. Outcome: Success, user is informed via modal that this is not valid value.
3. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [100.1]
		3. Cell used: AT/CZ
	2. Outcome: Success, user is informed via modal that this is not valid value.
4. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [-1]
		3. Cell used: IE/MT
	2. Outcome: Success, user is informed via modal that this is not valid value.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [200]
		3. Cell used: GB/GB
	2. Outcome: Success, user is informed via modal that this is not valid value.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [-0.0]
		3. Cell used: AT/GB
	5. Outcome: Partial failure, value is not saved, but it wasn't blocked from being sent to server.
7. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [-20]
		3. Cell used: GB/SK
	2. Outcome: Success, user is informed via modal that this is not valid value.
8. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [-1]
		3. Cell used: IE/DK
	2. Outcome: Success, user is informed via modal that this is not valid value.
Reproduction:
1. Partial failure: value 0 handling
	1. Select any cell
	2. Enter value of 0
	3. Value is not saved but it's still being sent over to server when it could be blocked at frontend level.
Notes:
There is some obvious problem with handling zero.
Additional erroneous behavior was found that test 1.29 is covering.