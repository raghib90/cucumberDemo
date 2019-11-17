Feature: facebook loging validation
#Scenario: login validation of facebook.
#Given user is present in login fb page
#When user enters "raghib90@gmail.com" and "diplomaengg@90"
#Then user click on login buttons
#Then user is in facebook homepage 

Scenario Outline: login validation of facebook.
Given user is present in login fb page
When user enters "<userNames>" and "<passwords>"
Then user click on login buttons
Then user is in facebook homepage 
Examples:
 | userNames | passwords |
 | raghib90@gmail.com | diplomaengg@90 |
 | mahfoozrahi@gmail.com | Jhrca@12345 |
