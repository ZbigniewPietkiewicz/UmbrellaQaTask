Used strategy of testing may be overkill - copy-paste testing produces no additional results.
Testing for out of bounds with current strategy may be wrong as it tests in only one dimension at the time.

Bugs found:
1. Bug:  Scale of data entered is always 2, even if user entered integer.
	1. Severity: minor
	2. Tests related to this bug:  1.1
	3. Reproduction: 
		1. Select any cell
		2. Enter any valid value that scale is less than 2 (ie 10 or 15.5)
		3. If value displayed has scale of 2, bug persists (ie 10.00 or 15.50)
2. Bug:  100 is not being accepted despite it should.
	1. Severity: major
	2. Tests related to this bug:  1.1
	3. Reproduction: 
		1. Select any cell
		2. Enter value of 100
		3. Value won't be accepted
3. Bug: Invalid data is accepted at frontend, only refused at backend.
	1. Severity: minor
	2. Tests related to this bug:  1.2.1
	3. Reproduction: 
		1. Select any cell
		2. Enter value of 0
		3. Value is sent to server
			1. It should be stopped at frontend level if possible
4. Bug: Input that has scale over 2 is accepted.
	1. Severity: minor
	2. Tests related to this bug: 1.2.7
	3. Reproduction:
		1. Failure: Decimal with scale above 2 is saved and display issues.
		2. Select any cell
		3. Enter value that at third or further position after decimal separator has number from (0, 5> range ie 7.455
		4. Reload page
		5. In this case value displayed will seem to be trimmed as it will display 7.45
		6. Select any cell 
		7. Enter value that at third or further position after decimal separator has number from (5, 9> range, ie 1.006
		8. Reload page
		9. In this case value displayed will seem to be rounded up as it will display 1.01
5. Bug: Input that will result in 0 being displayed in cell is being accepted.
	1. Severity: major
	2. Tests related to this bug: 1.2.7
	3. Reproduction:
		1. Select any cell
		2. Enter value of 0.0001
		3. Value is saved and user can see 0.00 in table which is not allowed value.
6. Bug: Data is being sent despite no change being introduced:
	1. Severity: major
	2. Tests related to this bug: 1.2.8
	3. Reproduction:
		1. Select any cell
		2. Enter valid data into cell
		3. Select another cell to save data
		4. Select edited cell
		5. DO NOT EDIT CELL
		6. Press another cell
		7. Information about data being saved will be displayed and data is being send to server.
7. Bug: Highlight of cell with wrong data is being lost
	1. Severity: minor
	2. Tests related to this bug: 1.2.9
	3. Reproduction:
		1. Select cell
		2. Fill out it with erroneous data, ie 0.0
		3. There should be information on error during data being saved
		4. Cell that had trouble being saved should be highlighted as error
		5. Press another cell
		6. Enter valid data into cell
		7. Press another cell
		8. Cell that had trouble being saves should still be highlighted as error
8. Bug: When switching from one "Kraj docelowy" selector to another, new data is not being loaded
	1. Severity: major
	2. Tests related to this bug: 2.2
	3. Reproduction:
		1. Select any country code, ie AT in "Kraj docelowy" selector
		2. Note that correct data is displayed
		3. Select any other country node, ie BG in "Kraj docelowy" selector
		4. Note that data of country code that was selected first is still being displayed despite header changed.
9. Bug: When switching from one "Kraj źródłowy" to another, AT row is being loaded instead
	1. Severity: major
	2. Tests related to this bug: 3.2
	3. Reproduction:
		1. Select any country code, ie DE in "Kraj źródłowy" selector
		2. Note that correct data is displayed
		3. Select any other country code, ie FR in "Kraj źródłowy" selector
		4. Note that data is displayed for AT country code
10. Bug: When both "Kraj źródłowy" and "Kraj docelowy" filters are being used wrong data is being displayed
	1. Severity: Critical
	2. Tests related to this bug: 4.0.1, 4.0.2, 4.1.1, 4.2.1
	3. Notes: Complex bug that requires thorough investigation. Please familiarize yourself with reproduction in each failed test.