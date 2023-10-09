Story:
If I saved data into cell and I try to save data again, cell should act in same way as before.
Steps:
1. Select cell that wasn't manipulate before
2. Prepare data that will either be malformed as described in task 1.2.10 or correct data that is at least 4 numbers long of which at least 2 are scale (i.e. 12.34) or correct data that starts with decimal separator followed by scale of 3 (i.e. .001) or which total length is at least 5 numbers.
 3. Copy-paste value. Observe value that is being displayed
4. If value can't be saved enter any valid value (i.e. 5)
5. Try to copy paste value again. Observe value that is being displayed
6. Values at step 3 and 5 should be same.
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [10.002]
		3. Cell used: PT/PT
	2. Outcome: Failure, data is trimmed to 10.0 at step 3 and then to 10. at step 5. Furthermore if user tries to add more numbers (i.e. 10.45) this input won't be saved (without highlighting it as error) until user removes decimal separator and reenters full number. There is issue with method that filters inputs.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [40 32]
		3. Cell used: AT/PT
	2. Outcome:  Failure, data is trimmed to 40 3 at step 3 and then to 40 at step 5. Even more interesting similar behavior occurs as in execution 1 - if users will try to add decimal separator and any scale it won't be possible to save (without it being error) unless user removes one number from copied data and then tries to fill in.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [1 203]
		3. Cell used: PT/SK
	2. Outcome: Failure, data is trimmed to 1 20 at step 3 and then to 1 2 at step 5. Same issue as before but even more curious. New value can't be saved until all data is removed.
4. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [20 30]
		3. Cell used: CY/CY
	5. Outcome: Failure, data is trimmed to 20 3 at step 3. It still can't be saved, however if additional steps like in execution 3 are performed, data will be trimmed to 20 and it can be saved. Seems that once cell is saved into once it behavior fundamentally changes and it persists between page reloads.
5. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [.1234]
		3. Cell used: AT/CY
	5. Outcome: Success for test condition but it confirms there is issue raised in 1.2.10, execution 6 and failure 2 but without such drastic consequences.
6.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [12345]
		3. Cell used: CY/SK
	2. Outcome: Failure, data is trimmed to 1234 at step 3 and to 123 at step 5. While neither is valid data, inconsistent behavior is confirmed.
Reproduction:
1. Prepare data as described in step 2.
2. Select cell that wasn't manipulated.
3. Copy-paste string in cell, observe how it displays.
4. Save data with this data or alter data inside to correct one and save.
5. Copy-paste data in cell once more, observe how it displays
6. If data displayed from step 3 and step 5 are different, it is bug.
Notes: