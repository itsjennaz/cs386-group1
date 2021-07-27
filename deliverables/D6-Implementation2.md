# D6 Implementation 2 

Grading: 49 points
This deliverable should describe the second release of your project. A release is a fully functional
software that delivers a set of features (don’t need to be the complete set but they need to be
usable). Structure your deliverable using the following sections. See the “Team Project
Instructions” for details about formatting.

## 1. Introduction 

Designed for customers who continuously check for out of stock items, AlertX is an inventory alert system that notifies a shopper as soon as their desired product comes back into stock. Our solution offers a customizable notification system to ensure you know exactly when you can purchase an item, unlike most product's websites. With a clean and functioning interface, our user will successfully receive gathered information about products and their stock status quickly so that they can worry less about a certain item being sold-out again. 

Our system will be kept relatively simple and straight forward. Through our web interface, the customer will be able to browse products that they would like to be selected to be notified for. After product selection, there is a notification option. Here there is a SMS or email option, where the user can select their preference and even choose both options. Our product uses a Database; within this Database, basic user information is documented to help notify the user of their product via notification. The central requirement of our system is that restock notifications are accurate and up to date with the current market. Users have access to their own search history where they can view everything they track. Depending on which is selected, the client’s information and the product they selected will be stored in our database. When the time comes that the product they selected is back in stock, we can pull their information from our data base and send them their specified notification. With items in high demand and limited supply, we offer a fighting chance to consumers. AlertX is an inventory tracker that allows shoppers to avoid the wait, track it once and get a personal notification when that item is back in store.


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

Example:
Requirement: As a Student, I want to add a homework assignment so that I can organize my ToDo
list.

Issue: <link to your Trello or GitHub issue>

Pull request: https://github.com/user/project/pull/426

Implemented by: Martin Fowler

Approved by: Ada Lovelace

Print screen: A print screen that depicts the implemented feature (if applicable)

Remember that all source code should be submitted by means of pull requests and the
quality assurance person in the team should review and approve each pull request. For
more information about pull requests:
https://help.github.com/articles/about-pull-requests/

Grading (25 points): This section will be evaluated in terms of correctness, completeness,
thoroughness, consistency, coherence, adequate use of language, and amount of work put
into the implementation. Students can receive different grades depending on their
involvement. It is expected that all members contribute with non-trivial implementation.
All pull request should be approved and integrated by the quality assurance person. You
should follow an adequate workflow (description of the requirement on the issue tracker,
submission of the implemented requirement as a pull request, and review of the pull
request by another developer.

## 3. Demo
Include a link to a video showing the system working.

Grading (15 points): This section will be graded based on the quality of the video and on
the evidence that the features are running as expected. Additional criteria are the
relevance of the demonstrated functionalities, correctness of the functionalities, and
quality of the developed system from the external point of view (user interface).

## 4. Code quality
Describe how your team managed code quality. What were your policies, conventions,
adopted best practices, etc. to foster high quality code?

Grading (4 points): Adequate list of practices that were adopted to improve code quality
and clear description with adequate use of language.

## 5. Lessons learned
In retrospective, describe what your team learned during this second release and what
would you change if you would continue developing the project:

* Learning a new environment is difficult - As a team, we put many hours into this week’s deliverable, the majority of which went into understanding how to implement a new API and working with HTML/Python for sending emails to customers who sign up with a form to get notified on restocks.

* Developing a client-face deliverable is complicated - Our product’s value relies heavily on the backend since we designed it to select what product the user wants a restock email on. Unfortunately, it isn’t very easy to deliver that email until the API actually sends a message, when something is back in stock, to your device from the database. Since our product’s purpose is around client-facing, email/message-communicated deliverables, we spent our time doing research around the API we plan on using and  HTML/Python to at least write the structure of the software. 

* More time to continue developing the project would be great - If our team would continue developing the project, we would probably change our time management with the deliverables and dedicate more time on our website. We had many barriers during the process of making AlertX, so with more time, resources, and research, we could probably make everything better. However, with the time frame we have and putting lots of effort into our deliverables, we were only able to do the minimum. 
