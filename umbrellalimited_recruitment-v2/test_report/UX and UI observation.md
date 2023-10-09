-UI is  getting closer to established design but some work is still needed.
UI main concerns:
-On Chromium based browsers anything that is not table and its filter controls is a default gray which makes quite bad look and makes it hard to look at:
![[Pasted image 20231006140857.png]]
This issue is not occurring on Microsoft Edge:
![[Pasted image 20231006140916.png]]
-Title of column heading, "Kraj źródłowy" is gone which lowers clarity.
-Speaking of styling, some highlighting every other row or column would do wonders for readability.
-Some subtle minor choices like colors of highlights are far away from desired look, while still visible.
UX main concerns:
-Selectors are functional now but I have doubt about comfort of use. While it is good that table is becoming smaller as it is filtered, case of filtering by "Kraj docelowy" on big screen causes unnecessary optical distance between table and selectors. Experience is less cohesive. It is worth consideration to either scale table down to the left, center filters or create some optical divider that experience is consistent.
![[Pasted image 20231006141359.png]]
-As seen on screen above there are also some slight quality of display issues, like how "sticky" headers look when table is moved just a bit:
![[Pasted image 20231006141619.png]]
I would suggest to introduce some snap to table grid to avoid this scenario, maybe with some animation ease for better comfort of eye tracking?
-Furthermore, I suggest styling of headers to some subtle color different from table itself to optically divide it more.
-Modal to confirm data was saved is still quite disruptive design choice.
-Responsiveness of application is improved, it doesn't scale oddly anymore and element stack vertically when there is no space for them horizontally. Some styling changes still should be introduced to avoid such close skew:
![[Pasted image 20231006141937.png]]
One more issue
-I noticed that on "PC" display there is permanent vertical scroll bar.