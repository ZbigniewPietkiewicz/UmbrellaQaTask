-UI is far from desired look. UX suffers as well.
UI main concerns:
-On Chromium based browsers anything that is not table and its filter controls is a default gray which makes quite bad look and makes it hard to look at:
![[Pasted image 20231006083833.png]]
This issue is not occurring on Microsoft Edge:
![[Pasted image 20231006083920.png]]
-Scroll bars in row headers are bit confusing - seems some CSS is missing here.
-Speaking of styling, some highlighting every other row or column would do wonders for readability.
-Some subtle minor choices like colors of highlights are far away from desired look, while still visible.
UX main concerns:
-Selectors are not working as excepted, and even more their usage is not most user friendly. While it allows drop-down select ability and even allows typing in country code to find desired code faster, it is marred by following issues:
	- Said typing option is case sensitive. I feel this is oversight to leave it as is if this is UI element we want to use
	- Removing selection option is not obvious. Empty choice or "x" button to clear would do wonders.
	- Selecting any option in "Kraj docelowy" filter causes whole displayed page to squish into width of a bit over one column. It should not behave like this at all. Even worse, filter selectors start to overlap in this case as seen below. ![[Pasted image 20231006084526.png]]
-Headers, only row header is "sticky", that is remains fixed to screen. Column header is not "sticky" which made testing procedure more painful. I feel it is quite big UX problem.
-Responsiveness seems to be lacking as it downscales UI elements with screen quite a lot. I am not sure if this will be readable in current version and surely it won't be comfortable for user.
-Modal to confirm data was saved is quite disruptive design choice. It has its use where data has failed to save or doesn't match criteria (it should take user focus), but not in excepted use case.