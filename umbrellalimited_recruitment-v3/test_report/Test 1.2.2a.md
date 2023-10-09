Story:
If I copy paste erroneous input like in scenario 1.2.2, it should be handled in same way like in 1.2.2.
Steps:
1. Prepare erroneous value that contains one or more letters and copy this value
2. Select cell
3. Copy value into cell
4. There should be information on value not being saved
5. Reload page
6. New value should not be in edited cell
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [dwa]
		3. Cell used: FI/FI
	2. Outcome: Success, value is not accepted.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [e.3]
		3. Cell used: FI/AT
	2. Outcome: Success, value is not accepted.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [o.oo2]
		3. Cell used: SK/FI
	2. Outcome: Success, value is not accepted.
4.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [mp5]
		3. Cell used: ES/HR
	2. Outcome: Success, value is not accepted.
5. Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [five5]
		3. Cell used: PT/PT
	2. Outcome: Success, value is not accepted.
6. Execution
	4. Additional information:
		1. Used browser: Brave
		2. Value provided: [aaaa]
		3. Cell used: PT/AT
	5. Outcome: Success, value is not accepted.
7.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [20S]
		3. Cell used: SK/PT
	2. Outcome: Success, value is not accepted.
8.   Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1f]
		3. Cell used: GB/MT
	2. Outcome: Success, value is not accepted.
Reproduction:

Notes:
Outcomes and observations are same as in 1.2.2.