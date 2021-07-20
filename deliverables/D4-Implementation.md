# D.4 Implementation 1

Grading: 40 points
For this deliverable, you should have a fully functional piece of software that delivers a set of 
features (don’t need to be the complete set, but it needs to be a working prototype). Structure 
your deliverable according to the following sections. See the “Team Project Instructions” for 
details about formatting. 

## 1. Introduction

Designed for customers who continuously check for out of stock items, AlertX is an inventory alert system that notifies a shopper as soon as their desired product comes back into stock. Our solution offers a customizable notification system to ensure you know exactly when you can purchase an item, unlike most product's websites. With a clean and functioning interface, our user will successfully recieve gathered information about products and their stock status quickly so that they can worry less about a certain item being sold-out again. The search bar allows the user to search and select for products they desire to be notified about. After product selection, there is a customizeable notification page. Here there is a SMS or email option, where the user can select their preference and even choose both options. Our product uses a Database; within this Database, basic user information is documented to help notify the user of their product via notification. The central requirement of our system is that restock notifications are accurate and up to date with the current market. Users have acces to their own search history where they can view everything they track. With items in high demand and limited supply, we offer a fighting chance to consumers. AlertX is an inventory tracker that allows shoppers to avoid the wait, track it once and get a personal notification when that item is back in store.

## 2. Implemented requirements

List in this section, the requirements and associated pull request that you implemented for 
this release, following the example below---include the description of the requirement, 
link to the issue, link to the pull request(s) that implement the requirement, who 
implemented the requirement, who approved it, and a print screen that depicts the 
implemented feature (if applicable). Order the requirements by the name of the student 
who implemented it.
We expect that you implement/prototype features you specified in your MVP (c.f. D.2 
Requirements). We expect that all the members of the group have been involved in some 
programming activities and report several pull requests. 

### Example:

* Requirement: _As a Student, I want to add a homework assignment so that I can organize my ToDo 
list._
* Issue:  (link to your Trello or GitHub issue)
* Pull request: https://github.com/user/project/pull/426
* Implemented by: Martin Fowler
* Approved by: Ada Lovelace
* Print screen: A print screen that depicts the implemented feature (if applicable)2
Remember that all source code should be submitted by means of pull requests and the 
quality assurance person in the team should review and approve each pull request. 
* For more information about pull requests:
https://help.github.com/articles/about-pull-requests/ 

Grading (10 points): This section will be evaluated in terms of correctness, completeness,
thoroughness, consistency, coherence, adequate use of language, and amount of work put 
into the implementation. Students can receive different grades depending on their 
involvement. It is expected that all members contribute with non-trivial implementation.
All pull request should be approved and integrated by the quality assurance person. You 
should follow an adequate workflow (description of the requirement on the issue tracker, 
submission of the implemented requirement as a pull request, and review of the pull 
request by another developer. 

## 3. Adopted technologies

**List the adopted technologies with a brief description and justification for choosing them.**

* Node.js - Our main backend technology. Node interprets our backend javascript and continuously serves our website by integrating with Express.
* Express - Our route handler. We use Express to statically serve our website directory structure as it is hosted on our server.
* Bootstrap - Our CSS and javascript library. We use Bootstrap components to create the client-side layout and styling of our website.
* ...

## 4. Learning/training

Our team's primary learning strategy has been to research and assign in to each group members according to interests and availability during a weekly cyle. Our original idea was to use Best Buy's API that implemented technologies like Bootstrap, Node.js, and VS Code. However, we then discovered that Best Buy's API may not be available, so we decided to go with Newegg's API that implements Java SDK and possibly web-scrape that implements Python. We discovered in our project that Java SDK could be difficult for everyone to learn and web-scraping could be easier as it implements Python. 

For any given topic, most of our members research independently, then educate the rest of the group on what we have learned either during meetings or on Discord. Since some people had prior knowledge, we were able to cover some topics early on during our weekly meetings and setup the framework, Bootsrap, and hosted a website. Throughout the semester, we have used Discord as a source for posting resources and keeping everyone up to date. During this time, in-person meetings are not possible, but we have effectively used Discord to screen-share and communicate and Trello to keep us all busy with tasks and develop productively. As the web application continues to develop, we hope this cycle of learning, sharing, and modification continues. 

## 5. Deployment

We are hosting our website on one of our member's virtual private servers. The site is reachable at: www.colinwood.dev/alertx. We are using Node.js as the backend framework and Express to handle routing. For local development, we simply open the .html files directly in our own browsers using the file:/// protocol.

## 6. Licensing

This project has adopted the MIT Licences for its general use and flexibility. This allows us to use our code in a buisness capacity and for commercial purposes as we see fit. Other people may use our code as well, so long as they credit us as the original author; If others decide to use our code or software, we can not be held liable under the MIT license, which for our purposes, is a benefit. Right now, the MIT license will suit our needs appropiately, it is incredibly permissive but also supplies the perfect amount of protection.

## 7. Readme File
[Readme.md](README.md)
[Code of Conduct](CODE_OF_CONDUCT.md)
[License](LICENSE)
[Contributing](CONTRIBUTING.md)

## 8. Look & feel

Describe the approach you adopted to design your user interface. Include some 
screenshots.

Grading (4 points): This section will be graded based on the appearance (aesthetics) and 
usability (ease of use) of the system.

## 9. Lessons learned

In retrospective, describe what your team learned during this first release and what you 
are planning to change for the second release. 

Grading (2 points): Adequate reflection about problems and solutions, clear description 
with adequate use of language.

## 10.Demo

Include a link to a video showing the system working.

Grading (8 points): This section will be graded based on the quality of the video and on the 
evidence that the features are running as expected. Additional criteria are the relevance 
of the demonstrated functionalities, correctness of the functionalities, and quality of the 
developed system from the external point of view (user interface).

## Additional Grading criteria

Penalties in the deliverable will be imposed for participants with a low level of coding activities 
and projects with inadequate usage of the Trello and GitHub features (e.g., pull requests) or 
insufficient implementation of the system.

Example from the previous semester (not necessarily perfect or complete)
https://github.com/ChrisKeefe/DontPanic/blob/master/project_documentation/Implementation.md
