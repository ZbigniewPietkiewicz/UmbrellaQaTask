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
		2. Value provided: [10]
		3. Cell used: DK/DK
	2. Outcome: Partial success, further information in notes.
2. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: 100
		3. Cell used: AT/DK
	2. Outcome: Failure, 100 is refused despite fitting inside allowed range.
3. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1.23]
		3. Cell used: DK/SK
	2. Outcome: Partial success, further information in notes.
4. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [25.4]
		3. Cell used: LT/FI
	2. Outcome: Partial success, further information in notes.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [97]
		3. Cell used: EE/EE
	2. Outcome: Partial success, further information in notes.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [100]
		3. Cell used: SK/EE
	5. Outcome: Failure, 100 is refused despite fitting inside allowed range.
7. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [0.01]
		3. Cell used: EE/AT
	2. Outcome: Partial success, further information in notes.
8. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [99.99]
		3. Cell used: PL/RO
	2. Outcome:  Partial success, further information in notes.
Reproduction:
1. Failure: value 100 is not accepted.
	1. Select any cell
	2. Enter value of 100
	3. Value won't be accepted
Notes:
Issue found is a bit of minor bug. No matter if number is provided as integer or decimal with scale of 1, it will be always displayed as decimal with scale of 2. While it doesn't break functionality, it breaks consistency of operation and data display.

Additional issue was found and test 1.2.8 was added.