# Team Project – D.3 Analysis

Grading: 30 points
In this deliverable, report the results of the software analysis for your project. Use the following
sections to structure your deliverable. See the “Team Project Instructions” for details about
formatting. 

## 1. System Description
In the initial paragraph, provide a brief textual description of your system. This
description must contain the problem statement, the product position statement, and the
value proposition of your system (refined versions of what you presented in D.2). 

The following paragraphs should describe the key requirements of the system. This
description should be consistent with D.2 stakeholders, requirements, use cases, and user
stories – however, refinements are welcome. 

Use **Bold** every time that you use a noun that is a class in your model. Use *Italic* every
time that you use a noun that is an attribute in your model. Use <u>Underline</u> every time
that you use a noun or verb that is an association in your model. 

Grading: 5 points. The description should be clear, concise, and well-written, free of typos
and grammar problems. The use of bold, italic, and underline should be coherent with
the model presented in Section 2---all classes, attributes, and associations from the model
should appear in the text and their role in the system, as described in the text, should be
consistent with the model. 

  Consumers often have the problem of waiting for products that are frequently out of stock. For those consumers who check for items that are frequently out of stock, AlertX is an alert system that notifies a shopper as soon as their desired product comes back into stuck. Unlike the product's website, our products offers a customizable notifcation system to ensure you know exactly when an item is back in store or online. Track it once and get a personal notification when that item is back in stock. Although our software will offer similar features as our competitors, we probably offer more varieties of API. We will have a functioning, clean interface that successfully gathers information about product stocks and deliver the information to the user.

  One of the key requirements in our system is being able to have quick restock notifications so that once the consumer gets a restock notification via email or text, they won't need to worry about that certain item being sold out again, without them knowing. Along with this, we need to have a text message notification option. Another requirement is to be accurate with what is in stock online and in store once something is restocked because stores are inconsistent with inventory. Also, we need to make sure we block out any bots from buying all of the popular restocked items.

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
