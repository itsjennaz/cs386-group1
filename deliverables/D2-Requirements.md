# Requirements

## 1. Positioning

### 1.1 Problem Statement

The problem of waiting for products that are frequently out of stock affects consumers; the 
impact of which is struggling to purchase desired products.

### 1.2 Product Position Statement

For consumers who check for items that are frequently out of stock, AlertX is an alert system 
that notifies a shopper as soon as their desired product comes back into stock; unlike the product's 
website, our product offers a customizeable notification system to ensure you know exactly when an 
item is back in store. 

### 1.3 Value Proposition and Customer Segment

Value proposition: AlertX is a notification system app that allows shoppers to avoid the wait, 
track it once and get a personal notification when that item is back in store.

Consumer segment: Shoppers who frequently check for an out-of-stock item.

## 2. Stakeholders

Users: Potential users shop online often and seek a solution to avoiding leaving stores without their desired products due to being out of stock.

Clients: Individuals and companies that must be alerted as to when supplies and products sell out rapidly.

Competitors: Software which offer similar features and possibly offer more varieties of API.

Detractors: The expectation is that the website has a clean, easy-to-understand interface that accurately fetches product stocks in the API.

Developers: A functioning, clean interface that successfully gathers information about product stocks and deliver the information to the user.

## 3. Functional Requirements (features)
Make a numbered list of requirements for your software. Just self-explanatory titles are
enough at this point. Remember that requirements should deliver the value proposition
and they must be consistent with the interviews you performed for the previous
deliverable. You can talk again to your clients to help defining the requirements. While
writing the requirements, focus on capabilities needed and not on how they should be
implemented.
Grading: 2 points – The list should be comprehensive (remember that you are not expect
to implement all the requirements by the end of the course but you should list them).
Follow the same pattern to describe all the requirements. The list of requirements should
be coherent with the previous sections.

## 4. Non-functional requirements

**1. Accuracy.** Items should only be reported in stock if they truly are in stock, and no item that is being tracked should come into stock without the proper notification. In the former case, a user's time would be wasted looking for an item they were led to believe was in stock but is not actually so. In the latter case, a user would miss the oportunity to get an in-stock item, having relied on our product. 5 out of 5 newly tracked products that are not in stock *should not* give an in-stock notification. 5 out of 5 tracked products that are initially out of stock but later come into stock *should* give an in-stock notification.

**2. Reliability.** Being able to connect to the website and/or recieve text messages are vitally important to the function of the product. 10 out of 10 arbitrarily timed requests to the web server should be successfully served. 5 out 5 example text message automations should be delivered successfully. 

**3. Usability.** Being able to intuitively interact with the webpage is important, otherwise first-time users will be frustrated and stop using the product. At least 4 out of 5 test users should agree with the following statement after having used the website for a short but reasonable amount of time: "The website layout was intuitive to me; I was able to understand and perform the basic actions necessary to create an account, track a product, and enter my contact information."

**4. Security & Trustability** Tentative users are unlikely to become full users if they do not feel like they can trust our product with their personal information. At least 4 out of 5 test users should agree with the following statement after having used the website for a short but reasonable amount of time: "I readily understood that the only personal information required for functionality is an email address or a phone number. I also understood that the site does not require or even accept payment information nor any other sensitive information. I would generally trust that my email and/or phone number would be secure should I provide the site with either."


## 5. MVP
What will be your MVP? Which features are you going to validate? How?
Grading: 4 points – Describe what would be considered the Minimal Viable Product and
how it will be tested (e.g., via implementation, prototyping, Wizard of Woz, etc.). Make
clear what you are going to validate. The MVP should be coherent with the previous
sections.

## 6. Use Cases

### 6.1 Use Case Diagram
Include a UML use case diagram for your project. There are many drawing tools that
you can use, such as http://draw.io and https://creately.com/
Grading: 4 points – Follow correctly the UML specification. The actors should be coherent
with what was listed in sections 1 and 2. The use case diagram should be coherent with
the list of requirements (section 3). The level of granularity of each use case should be
adequate. The use cases should be adequately named.

![alt text](https://i.gyazo.com/f55430948a538a8a26308628b73a7a32.png)

### 6.2 Use Case Descriptions and interface sketch
Present one complete use case description for each member of the group. Therefore, if
the group has 4 members, 4 use case descriptions are necessary. As the grading will not be
individual, the group is responsible for keeping the quality and consistency for the whole
document – avoid just splitting the work. Choose the most important use cases to
describe. Follow the template provided by OpenUP to describe the use cases (see also the
example):
https://people.cs.clemson.edu/~johnmc/courses/Publish/openup/guidances/templates
/resources/uc_specification_tpl.dot
After each use case description, add a sketch of the corresponding user interface. This will
be a good opportunity to start thinking about usability.

**Use Case**: Receive SMS Notification 
**Actor**: SMS User  
**Description**: Once the User has signed up for our services they will receive notification Via email and/or SMS.
**Preconditions**: They have a registered account with our services and have a device that can receive email and SMS.
**Postconditions**: The AlertX User will now receive catered notifications Via SMS, or email, on specified products that recently have come back in stock.
**Main Flow**:
1. Actor logs into the AlertX Website and creates an account.
2. They can now choose to receive SMS or email (or both) notifications.
3. The user will choose certain products to receive notifications on.
4. The user will now receive catered notifications on the specified products.
**Alternative Flow**:
1. The user must allow their device to recieve the specified type of notification.

Grading: 4 points – Follow the template to describe the use cases. Present an interface
sketch for each use case. Describe the use case as a dialog between the user and the
system. Do not use UI language in the description of the use case.

## 7. User Stories
Write two user stories for each member of the group. They can be related to the same
features described in the use cases or to different ones. Adopt the following format: "As a
<ROLE>, I want <SOMETHING> so that <GOAL>."
Establish a priority level for each user story and estimate how many hours each one will
demand using the planning poker approach.

Grading: 6 points – Use the provided format. The user stories should be in an adequate
level of granularity (not too broad nor too specific). Provide the priority and estimation
for each user story.

## 8. Issue Tracker
The user stories should be registered as cards in a public board at Trello.com or another
issue tracker. Include here the link for your issue tracker and a screenshot of what you
did. From now on, we expect that you use an issue tracker to manage the project tasks.

Link To Trello: https://trello.com/b/Y4P9ZZVL/alertx

Grading: 4 points – Provide the URL and screenshot of the issue tracker. The user stories
should be registered there.
