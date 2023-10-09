Copy-Paste test dropping would leave to few bugs being undetected, I am glad I left this one in.

Bugs found:
1. Bug: Trimming rules introduced in this release may cause errors for users who copy-paste data
	1. Severity: critical
	2. Tests related to this bug: 1.2.1a, 1.2.2a, 1.2.3a, 1.2.4a, 1.2.5a, 1.2.6a, 1.2.7a, 1.2.10 and to extent 1.2.11
	3. Deep analysis required, please familiarize yourself with all those tests.
	4. Reproduction:
		1. They vary a little, but most crucial is 1.2.10
2. Bug: User may copy-paste value that will lead to 0 being saved in table.
	1. Severity: major
	2. Tests related to this bug: 1.2.10
	3. It can be assumed that if bug above will be fixed then this bug will be fixed too but I take not of this one.
	4. Reproduction:
		1. Prepare .001 as string to copy.
		2. Select cell that wasn't manipulated before.
		3. Try to copy-paste prepared data.
		4. If bug occurs data will be trimmed and possible to save.
3. Bug: Cell changes behavior depending on if it was manipulated before or not.
	1. Severity: major
	2. Tests related to this bug: 1.2.11
	3. It can be assumed that if bug above will be fixed then this bug will be fixed too but I take not of this one.
	4. Reproduction:
		1. Prepare data that is either:
			1. malformed as described in task 1.2.10 
			2. correct data that is at least 4 numbers long of which at least 2 are scale (i.e. 12.34)
			3. correct data that starts with decimal separator followed by scale of 3 (i.e. .001)
			4. which total length is at least 5 numbers.
		2. Select cell that wasn't manipulated.
		3. Copy-paste string in cell, observe how it displays.
		4. Save data with this data or alter data inside to correct one and save.
		5. Copy-paste data in cell once more, observe how it displays
		6. If data displayed from step 3 and step 5 are different, it is bug.