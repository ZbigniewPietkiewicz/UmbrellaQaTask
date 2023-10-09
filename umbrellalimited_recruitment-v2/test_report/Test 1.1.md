Story:
When I click cell of table I should be able to edit it's value.
Steps:
1. Select cell
2. Fill out with new value that is number in range of (0, 100>
3. There should be information on value being saved
4. Reload page
5. New value should be in edited cell
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [100]
		3. Cell used: CY/CY
	2. Outcome: Failure, 100 is refused despite fitting inside allowed range.
2. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [0.45]
		3. Cell used: AT/CY
	2. Outcome: Success.
3. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [65.5]
		3. Cell used: CY/SK
	2. Outcome: Partial success, further information in notes.
4. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1]
		3. Cell used: LT/GB
	2. Outcome: Partial success, further information in notes.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [97]
		3. Cell used: HR/HR
	2. Outcome: Partial success, further information in notes.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.04]
		3. Cell used: AT/HR
	5. Outcome: Success.
7. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [99.99]
		3. Cell used: HR/SK
	2. Outcome: Success.
8. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [100]
		3. Cell used: IE/RO
	2. Outcome: Failure, 100 is refused despite fitting inside allowed range.
Reproduction:
1. Failure: value 100 is not accepted.
	1. Select any cell
	2. Enter value of [100]
	3. Value won't be accepted
Notes:
The minor issue that was reported back in v1, test 1.1 is still in this version.