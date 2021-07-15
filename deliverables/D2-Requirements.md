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

(Added by colin, feel free to change): AlertX is a inventory tracker that gives you the opportunity to finally obtain that one item that's always out of stock!

Consumer segment: Shoppers who frequently check for an out-of-stock item.

## 2. Stakeholders

Users: Potential users shop online often and seek a solution to avoiding leaving stores without their desired products due to being out of stock.

Clients: Individuals and companies that must be alerted as to when supplies and products sell out rapidly.

Competitors: Software which offer similar features and possibly offer more varieties of API.

Detractors: The expectation is that the website has a clean, easy-to-understand interface that accurately fetches product stocks in the API.

Developers: A functioning, clean interface that successfully gathers information about product stocks and deliver the information to the user.

## 3. Functional Requirements (features)

  1. Restock notifications must be fast enough before being sold out again, without person knowing.
  2. Alerts/subcription restock emails should be simple and customer should not get spammed with them.
  3. Make sure the software does not cost the customer anything.
  4. Software could automatically bring user to checkout page on a certain out of stock item that the customer wants.
  5. Track products in foreign markets(i.e. Japanese, Chinese, German, etc.)
  6. Make our software more unique as many other companies have a similar site.
  7. Have a text message alert notification option.
  8. Be accurate with what is in stock online and in store.
  9. Avoid bots or scalpers from buying all of the popular restocked items.

## 4. Non-functional requirements

**1. Accuracy.** Items should only be reported in stock if they truly are in stock, and no item that is being tracked should come into stock without the proper notification. In the former case, a user's time would be wasted looking for an item they were led to believe was in stock but is not actually so. In the latter case, a user would miss the oportunity to get an in-stock item, having relied on our product. 5 out of 5 newly tracked products that are not in stock *should not* give an in-stock notification. 5 out of 5 tracked products that are initially out of stock but later come into stock *should* give an in-stock notification.

**2. Reliability.** Being able to connect to the website and/or recieve text messages are vitally important to the function of the product. 10 out of 10 arbitrarily timed requests to the web server should be successfully served. 5 out 5 example text message automations should be delivered successfully. 

**3. Usability.** Being able to intuitively interact with the webpage is important, otherwise first-time users will be frustrated and stop using the product. At least 4 out of 5 test users should agree with the following statement after having used the website for a short but reasonable amount of time: "The website layout was intuitive to me; I was able to understand and perform the basic actions necessary to create an account, track a product, and enter my contact information."

**4. Security & Trustability** Tentative users are unlikely to become full users if they do not feel like they can trust our product with their personal information. At least 4 out of 5 test users should agree with the following statement after having used the website for a short but reasonable amount of time: "I readily understood that the only personal information required for functionality is an email address or a phone number. I also understood that the site does not require or even accept payment information nor any other sensitive information. I would generally trust that my email and/or phone number would be secure should I provide the site with either."


## 5. MVP
Our MVP is going to give our clients access to a limited selection of "popular" items that
are typically out of stock. Customers will then be notified via their preferred delivery method (email or SMS) when
their selected item(s) come back into stock. Many interviewees claimed that a "pretty" and easy to use interface was essential; The website will be user friendly and simple to navigate to ensure a pleasent and productive experience for our clients. Since we are already going to be sending customers emails/SMS, we can directly monitor and validate our MVP by analyzing links that are clicked within; Customers will also have the opportunity to send feedback via our dedicated customer feedback email.

## 6. Use Cases

### 6.1 Use Case Diagram
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

### Use Case 1: Browse Items

**Actor**: User

**Description**: The user browses items in the website

**Pre-conditions**: The user navigates to the website

**Post-Conditions**: User can select items they would like to receive stock notifications for

**Basic Flow**:
1. Use case begins when the user enters the site

**Alternative Flow**:
1. User can search for a specific item

### Use Case 2: Select Items

**Actor**: User

**Description**: User selects an item that they wish receive notifications for

**Pre-Conditions** : User browses items

**Post-Conditions**: User chooses method of delivery (SMS or email)

**Basic Flow**:
1. Use case begins when the user browses items and selects a specific item
2. When the item is selected, the user will be prompted for their notification preference

**Alternative Flow**:
1. The user continues to browse

### Use Case 3: Receive SMS Notification 

**Actor**: SMS Receiver 

**Description**: The User will use our services to receive a notification Via SMS.

**Preconditions**: They have a registered account with our services and have a device that can receive SMS.

**Postconditions**: The AlertX User will now receive catered notifications Via SMS on specified products that recently have come back in stock.

**Basic Flow**:

1. User will browse and select which items to be notified about.
2. The user can than select their notification preference.
3. To be notified Via SMS the user will enter their phone number.
4. The user will now receive catered notifications on the specified products.

**Alternative Flow**:
1. If in step 3 of the basic flow an invalid phone number is entered:
	* The user will be promped to enter a valid phone number.
	* The use case resumes at basic flow step 4.

### Use Case 4: Select an item for tracking

**Actor**: General user  

**Description**: A user finds an item they wish to track, and adds it to their set of tracked items.

**Preconditions**: They have created an account an provided a means of notification. Also, the item to be tracked is not already in stock at the time of tracking.

**Postconditions**: The user will recieve a notification when the tracked item comes back into stock.

**Main Flow**:

1. The user logs into their account.
2. The user chooses an item to track.
3. The site verifies that the item is out of stock and that the user has a registered email or phone number.
4. The user will recieve the proper notification(s) when the item comes back into stock.

**Alternative Flow**:

1. The item is already in stock.
	* The site will explain this to the user, and not track the product.

### Use Case 5: Receive Email Notification

**Actor**: Email Receiver 

**Description**: The User will use our services to receive a notification Via email.

**Preconditions**: They have a registered account with our services and have a device that can receive emails.

**Postconditions**: The AlertX User will now receive catered notifications Via email on specified products that recently have come back in stock.

**Basic Flow**:

1. User will browse and select which items to be notified about.
2. The user can than select their notification preference.
3. To be notified Via email the user will enter their email address.
4. The user will now receive catered notifications on the specified products.

**Alternative Flow**:
1. If in step 3 of the basic flow an invalid email address is entered:
	* The user will be promped to enter a valid email address.
	* The use case resumes at basic flow step 4.

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

1. As a user, I want to be able to browse items so that I can choose which trackable item best suits my needs. (Priority #?, approximately ? hours)
2. As a user, I want to be able to choose between recieving notifications via email, text message, or both, so that the notification(s) will be as convienient as possible. (Priority #?, approximately ? hours)
3. As a user, I want to ensure that the restock notifications are accurate and fast so that I don't miss out on popular sold out items. (Priority #?, approximately ? hours)
4. As a user, I want a software that automatically brings me to the checkout page on a certain out of stock item that I want so that the experience is easier and stress free. (Priority #?, approximately ? hours)
5. As a user, I want a software that updates its data regarding products quickly so that I get notified as soon as possible. (Priority #?, approximately ? hours)
6. As a user, I want an interface that is easy to navigate and understand so that I can find what I need quickly. (Priority #?, approximately ? hours)

## 8. Issue Tracker
The user stories should be registered as cards in a public board at Trello.com or another
issue tracker. Include here the link for your issue tracker and a screenshot of what you
did. From now on, we expect that you use an issue tracker to manage the project tasks.

Link To Trello: https://trello.com/b/Y4P9ZZVL/alertx

Grading: 4 points – Provide the URL and screenshot of the issue tracker. The user stories
should be registered there.
