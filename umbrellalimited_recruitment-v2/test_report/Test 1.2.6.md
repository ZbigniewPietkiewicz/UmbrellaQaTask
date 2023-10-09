Story:
If I enter malformed value that contains whitespaces before or after value, it should be handled by trimming of trailing or leading whitespaces.
Steps:
1. Select cell
2. Fill out with new value that contains additional whitespaces after or before numbers
3. Value should be trimmed
4. Reload page
5. New value should be in edited cell without additional whitespaces
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [ 2]
		3. Cell used: SK/SK
	2. Outcome: Success, leading space was trimmed and value was saved.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1.01 ]
		3. Cell used: SK/AT
	2. Outcome: Success, trailing space was trimmed and value was saved.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [ 6.6 ]
		3. Cell used: AT/SK
	2. Outcome: Success, both leading and trailing space was trimmed and value was saved.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [   20]
		3. Cell used: FI/PL
	2. Outcome: Success, multiple leading spaces were trimmed and value was saved.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [60.21    ]
		3. Cell used: CZ/CZ
	2. Outcome: Success, multiple trailing spaces were trimmed and value was saved.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [  0.03  ]
		3. Cell used: CZ/AT
	5. Outcome: Success, multiple leading and trailing spaces were trimmed and value was saved.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [9 ]
		3. Cell used: SK/CZ
	2. Outcome: Success, trailing space was trimmed and value was saved.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [ 83]
		3. Cell used: MT/SE
	2. Outcome: Success, leading space was trimmed and value was saved.
Reproduction:

Notes:
