# D7 Verification & Validation

Grading: 40 points
Structure your deliverable according to the following sections. See the “Team Project
Instructions” for details about formatting. Check the lecture materials and perform additional
research to produce a high-quality deliverable. As usual, if you have any questions, let me know.

## 1. Description
Provide 1-2 paragraphs to describe your system. This will help us to remember what your
system is about.

Grading: 1 point. Criteria: completeness, language.

## 2. Verification (tests)
Verification aims to ensure that you correctly developed the product.

### 2.1. Unit test
A unit test is an automated test that aims to verify the behavior of a component isolated
from the rest of the system. For this deliverable, you should have automated tests for the
main components of your project. Provide the following information:

* 2.1.1. Test framework you used to develop your tests (e.g., JUnit, unittest, pytest,
etc.):
* 2.1.2. Link to your GitHub folder where your automated unit tests are located.
* 2.1.3. An example of a test case that makes use of mock objects. Include in your
answer a GitHub link to the class being tested and to the test.
* 2.1.4. A print screen showing the result of the unit tests execution.

Grading: 8 points. Criteria: adequate choice of a test framework, coverage of the tests,
quality of the tests, adequate use of Mock objects, print screen showing successful tests
execution.

### 2.2. Integration test
When designing our system, we intended to incorporate an automated emailing service to enhance our product. This task alone created issues as it required compatibility with our other API system for locating products. Due to time constraint and restrictions faced with third party services we were not able to fully implement this feature. This in turn hindered us from producing a full integration test.

* 2.2.1. When testing our system we would used Mocha. Mocha allows for a clean simple interface for testing synchronous and asynchronous code. Another benefit is that Mocha is used for Node.js; making it compatible for our system. 
* 2.2.2. Due to time constrants we were not able to fully implement an integration test. However the link, links the folder where our test our stored(finished and unfinished).
* 2.2.3. 
When creating the test, we would follow the format of making sure each feature has 1) a well-formed and complete response, 2) a well-formed and incomplete response, and 3) a malformed response. This allows for adequate testing of all situations that could occur from each feature in the system.
* 2.2.4. Due to the restrictions mentioned aboved, we were not able to produce a print screen. 

Grading: 5 points. Criteria: adequate choice of a test framework, coverage of the tests,
quality of the tests, adequate example of an integration test, print screen showing
successful tests execution.

### 2.3. Acceptance
An acceptance test is a test that verifies the correct implementation of a feature from the
user interface perspective. An acceptance test is a black box test (the system is tested
without knowledge about its internal implementation). Provide the following information:

As mentioned aboved in 2.2, we had issues fully developing an automative emailing service. This caused errors for us when creating an Acceptance test, as we did not have an automatic emailing service, however we were still able to produce a demo version of how the system would run through the eyes of the user.

* 2.3.1. When testing our system, we would use Selenium as it allows for testing of web application across many different browsers and platforms. 
* 2.3.2. Due to time constrants we were not able to fully implement an acceptance test. However the link, links the folder where our test our stored(finished and unfinished).
* 2.3.3. When creating our acceptance test we would follow the format similar to our unit test, however it would be from the perspective of the user (blackbox) and using the test in conjuncture.
* 2.3.4. Due to the restrictions mentioned aboved, we were not able to produce a print screen, however we do a demo to show the system running from the user's perspective.

Grading: 8 points. Criteria: adequate choice of a test framework, coverage of the tests,
quality of the tests, adequate example of an acceptance test, print screen/video showing
successful tests execution.

## 3. Validation (user evaluation)
Validation aims to ensure that you developed the right product. You started the software
inception by talking to users and stakeholders. Now it is time to check if you are on the
right track by conducting some user evaluation on the actual system. Include in this
deliverable the following information:

Script: The script should have the tasks that you will give to the user, what you are going
to collect, and what you are going to ask. Do not forget to add questions about the users’
general impressions. You can ask open questions (e.g., How would you describe the
homepage of our app? How do you compare our system to the competitor X?) or closed
questions (On a scale of 1 to 10, how would you rate the layout of our application? On
the same scale, how likely would you use the system in its current state?). Take a look at
the inception and requirements deliverables to help create the script (aim to check if you
are achieving your initial goals and if the features are implemented in a satisfactory way).

Results: Conduct the user evaluation with at least 3 users. Report the data that you
collected.

Reflections: Reflect on what you observed. Some questions that you can explore: What
features worked well? What can be changed? How is the learning curve of your system?
Did the users preform the tasks as you expected? Did the users’ actions produce the 
results they expected? What did the users like the most? Is your value proposition
accomplished?

Grading: 18 points. Criteria: adequate script, adequate report of the results, adequate
reflection, language.
