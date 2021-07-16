# Team Project – D.3 Analysis

Grading: 30 points
In this deliverable, report the results of the software analysis for your project. Use the following
sections to structure your deliverable. See the “Team Project Instructions” for details about
formatting. 

## 1. System Description
Waiting for products that are frequently out of stock is a hassle for customers, the impact of which is struggling or being unable to purchase a desired product. For customers who continuously check for such items, AlertX is an inventory alert system that notifies a shopper as soon as their desired product comes back into stock. Unlike the most products' websites, our solution offers a customizable notification system to ensure you know exactly when you can purchase an item. Especially recently, many items have been in high demand and limited supply. AlertX is an inventory tracker that will allow shoppers to take advantage of limited opportunities, track something once and get a personal notification when that item is back in stock. 

Consumers often have the problem of waiting for **products** that are frequently out of stock. For those consumers who check for items that are frequently out of stock, AlertX is a notification system that <ins>notifies a shopper as soon as their desired product comes back in stock</ins>. Unlike the product's website, our products offers a _customizable notifcation system_ to ensure you know exactly when an item is back in store or online. Track it once and get a personal **notification** when that item is back in stock. We will have a functioning, clean **interface** that successfully gathers information about *product stock status* and *delivers the information to the user*.

One of the key requirements in our system is <ins>being able to have quick restock notifications</ins> so that once the <ins>consumer gets a restock notification via email or text</ins>, they won't need to worry about that certain item being sold out again, without them knowing. Along with this, we need to have a _text message notification option_. Another requirement is to be <ins>accurate with what is in stock online and in store once something is restocked</ins> because stores are inconsistent with inventory.


Our software offers a fighting chance to all shoppers. We have an intuitive, clean interface that presents information about products and their stock status to users. Using the system, users are able to customize for which products they want to recieve notifcations. This is a free and easy way to stay in the know about what is in stock online. They are able to use the **search** to <ins>find any product</ins> they are looking for. Once they have found the right one, they <ins>can add it</ins> to their **selection**. After the user selects a desired product, they can personalize their notifications. They can select whether they would prefer SMS notifications, email notifications, or both. Those who value the speed and convienence of a text message have the option, while those who do not want to be bothered on their cell phone can choose email.

The central requirement of our system is is that restock notifications are accurate and up to date with the current market. Users have acces to their own **search history** where they can <ins>view everything they track</ins>. To this end, some form of automation must be performed regularly to update that statuses of all tracked products.



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

