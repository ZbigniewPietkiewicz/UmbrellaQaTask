Story:
If I copy a malformed data into cell, it shouldn't be accepted. Malformed data uses criteria defined as in tests 1.2.2a, 1.2.3a, 1.2.4a, 1.2.5a, 1.2.6a. 1.2.1a and 1.2.7a do not apply here as either they fit the same operation as manual entering (1.2.7a) or they are of proper format (1.2.1a).
Steps:
1. Prepare data fitting criteria of 1.2.2a, 1.2.3a, 1.2.4a, 1.2.5a, 1.2.6a test and copy it
2. Select cell
3. Paste data
4. Data should not be possible to save
Execution logs:
1. Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [23.33e]
		3. Cell used: DK/DK
	2. Outcome: Failure, data is trimmed to 23.3 and as such can be accepted.  With this it turns out that 1.2.1a can be also questioned.
2.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [3.21-1]
		3. Cell used: AT/DK
	2. Outcome:  Failure, data is trimmed to 3.21 and it can be accepted.
3.  Execution
	1. Additional information:
		1. Used browser: Brave
		2. Value provided: [20.567.20]
		3. Cell used: DK/SK
	2. Outcome: Failure, data is trimmed to 20.5 and it can be accepted. Interesting behavior confirmed - trying to copy-paste in same field again will trim to 20.56 at second time. Test to be expanded at 1.2.11.
4. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [20 30]
		3. Cell used: CH/CH
	5. Outcome: Failure, data is trimmed to 20 3. It still can't be saved, however if additional steps like in execution 3 are performed, data will be trimmed to 20 and it can be saved. Seems that once cell is saved into once it behavior fundamentally changes and it persists between page reloads.
5. Execution
	4. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [  30]
		3. Cell used: AT/CH
	5. Outcome: Failure, data is being trimmed to "   " and cannot be saved, unless as in execution 3 and 4, cell was already saved into.
6.  Execution
	1. Additional information:
		1. Used browser: Microsoft Edge
		2. Value provided: [.001]
		3. Cell used: CH/SK
	2. Outcome: Failure, but only if cell is "untouched", and in such case cell will show up filled with data provided and will accept. After reload data show in cell will be 0 and marked as error. Despite this, user can proceed as normal with rest of table. As such, we can safely assume that there is no handling for this case on backend either.
Reproduction:
1. Failure: Data trimming allows to save data that shouldn't be possible to be saved.
	1. Prepare data that when entered manually should result in user noticing the data they enter is incorrect. For example, data of any test scenarios above.
	2. Select cell that wasn't manipulated before.
	3. Try to copy-paste prepared data.
	4. If bug occurs data will be trimmed and possible to save.
2. Failure: Data trimming allows to save 0 in table
	1. Prepare .001 as string to copy.
	2. Select cell that wasn't manipulated before.
	3. Try to copy-paste prepared data.
	4. If bug occurs data will be trimmed and possible to save.
Notes: