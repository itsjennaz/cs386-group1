# D.3 Analysis

#Team Project – D.3 Analysis

Grading: 30 points
In this deliverable, report the results of the software analysis for your project. Use the following
sections to structure your deliverable. See the “Team Project Instructions” for details about
formatting. 


## 1. System Description
  The problem of waiting for products that are frequently out of stock affects customers; the impact of which is struggling to purchase desired products. For customers who continuously check for items out of stock, AlertX is an inventory alert system that notifies a shopper as soon as their desired product comes back into stock; unlike the product’s website, our product offers a customizable notification system to ensure you know exactly when you can purchase an item. Recently, a lot of markets have been dried up and left many consumers struggling to purchase their desired products. AlertX is an inventory tracker that allows shoppers go avoid the wait, track it once and get a personal notification when that item is back in store. 


  **Consumers** often have the problem of waiting for **products** that are frequently out of stock. For those consumers who check for items that are frequently out of stock, AlertX is an alert system that <u>notifies a shopper as soon as their desired product comes back into stock</u>. Unlike the product's **website**, our products offers a _customizable notifcation system_ to ensure you know exactly when an item is back in store or online. Track it once and get a personal **notification** when that item is back in stock. Although our software will offer similar features as our competitors, we probably offer more varieties of API. We will have a functioning, clean **interface** that successfully gathers _information about product stocks_ and _deliver the information to the user_.

  One of the key requirements in our <u>system is being able to have quick restock notifications</u> so that once the <u>consumer gets a restock notification via email or text</u>, they won't need to worry about that certain item being sold out again, without them knowing. Along with this, we need to have a _text message notification option_. Another requirement is to be <u>accurate with what is in stock online and in store once something is restocked</u> because stores are inconsistent with inventory. Also, we need to make sure we <u>block out any bots from buying all of the popular restocked items</u>.

  Our software offers a fighting chance to any and all shoppers. We have a functioning, clean interface that successfully gathers information about product stocks that deliver the correct information to the user. Once the user is signed up in the system, they are able to customize what products they want to recieve notifcations for. This is a free and easy way that connects accurate information to what is in stock online and in store. After the user selects the desired products, they can personalize their notifications. With two options, they can select whether they would prefer SMS notifications, email notifications, or both. People of all professions can use this app, it is important our user is able to choose how they recieve alerts so that they do not miss it within everyday life. Whether they enter an email or a phone number, they will recieve an alert made for them.

  The main key requirement in our system is being able to have quick restock notifications that are also accurate with current markets. On top of this, foreign market tracking is included and gives the user an added bonus; not only will they choose from multiple stores but also mutiple markets in countries. Being able to choose items from multiple markets sets us apart from similar competators and gives the user an extra opportunity. 


## 2. Model
Provide the conceptual model of your system as a UML class diagram. Represent proper
cardinalities (multiplicities) for all associations. Also include the association names. 

Some points to consider:
* Use UML adequately. Do not use graphical elements that are not part of the
language. Represent compositions and aggregations when relevant. 

* This model is not an ER diagram (entity-relationship model), which is focused on
relational databased systems. However, both diagrams have similarities. 

* Do not overcomplicate how you represent the elements of your model (e.g., using
inheritance or an association when they are not necessary). Pay attention to
simplicity, maintainability, unnecessary repetition, cohesion, and coupling.

* Do not represent actions that don’t need to be registered in the system.

* Do not represent technical elements, such as user interface or programming
language libraries in the model. At this point, we are modeling the business
logic/domain of your system. During the design phase, the model will be refined
to include technology-specific elements and decisions. 

* Do not represent System as a class in your model. Everything that you are
modeling is part of the system.

* If you feel the need to justify your decisions, you can write your rationale in this
section or as UML comments in the diagram.

The model must have at least 10 classes. You can add requirements in the system
description if you need more classes. 

Grading: 25 points. You should correctly use the UML specification. Your model should
have the minimum number of classes. Your domain should be adequately modeled. The
model should avoid unnecessary complexity, repetition, lack of cohesion, and coupling.
The classes should be in an adequate abstraction level.


## Class ideas

**Class / Attributes / Methods**

Product / stock status, merchant(s) at which tracked, associated emails, associated phone #s / sendInStockNotification(), trackWithEmail(), trackWithSMS()

Merchant / website url, method of access (api or scrape), number of tracked products / addTrackableProduct(), removeTrackableProduct()

Email / value, verified (boolean) / sendConfirmationEmail(), sendStockNotification()

Phone number / value / sendStockNotification()

