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
		2. Value provided: [ 10]
		3. Cell used: LT/LT
	2. Outcome: Success, leading space was trimmed and value was saved.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1.56 ]
		3. Cell used: LT/AT
	2. Outcome: Success, trailing space was trimmed and value was saved.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [ 6.6 ]
		3. Cell used: SK/LT
	2. Outcome: Success, both leading and trailing space was trimmed and value was saved.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [   0.4]
		3. Cell used: ES/HR
	2. Outcome: Success, multiple leading spaces were trimmed and value was saved.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [99.99    ]
		3. Cell used: RO/RO
	2. Outcome: Success, multiple trailing spaces were trimmed and value was saved.
6. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [  0.01  ]
		3. Cell used: RO/AT
	5. Outcome: Success, multiple leading and trailing spaces were trimmed and value was saved.
7.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [9 ]
		3. Cell used: SK/RO
	2. Outcome: Success, trailing space was trimmed and value was saved.
8.   Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [ 5]
		3. Cell used: IE/BG
	2. Outcome: Success, leading space was trimmed and value was saved.
Reproduction:

Notes:
