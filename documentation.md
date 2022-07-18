# The Model K development environment
## Principles of the language model used
* Semantic atomicity
* Specificity of terms
* Inheritance
* Lenguaje Creator: This allows to create knowledge description language modules and add them progressively to the KDL superset.

### Glossary of terms
| Term | Description |
|------|-------------|
|KDL|(Knowledge Description Languaje) is a language superset that integrates all the different language modules|
|Notion| It´s a semantic aspect that is shared by several concenpts. For instance, the notion of time is shared by the concepts of date, event or cicle|

## Scope of Versions
### Version 1
####Brief description of what's new in version 1
It allows to describe things based on 3 mutually exclusive concepts, these are object, property and system.
A term cannot be property and object at the same time, or object and system at the same time.
#### Operations and algorithms
#### Atomic concepts and reserved words
| Atomic Concepts  | Description | Reserved word |
| ----------|:---------------------------------------:|---------------------------------------|
| object    | A object is formed of other objects     | object |
| property  | A property is something like a color    | property|
| system    | A system have inputs and outputs        | system |
#### Engine verbs / Assignment operators
| Verb  | Description | Syntax | Example |
| ----------|:-----------------------------------:|-------------|----|
| is   | assignment operator based on the verb to be     | term is [object,property,system]| car is object |

### Version 2
####Brief description of what's new in version 2
Adds the class concept, which is only applicable to objects. Inheritance mechanisms will be implemented in future versions.
#### Operations and algorithms
#### Atomic concepts and reserved words
| Atomic Concepts  | Description | Reserved word |
| ----------|:---------------------------------------:|---------------------------------------|
| class    | An object can belong to a class     | class|

#### Engine verbs / Assignment operators
In this version 2 no engine verb is introduced
### Version 3
####Brief description of what's new in version 3
Adds the category concept, which is only applicable to properties. Category is similar to Class, but just as class was applicable only to objects, category is only applicable to properties.

### Version 4
####Brief description of what's new in version 4
In version 4 of model K, the engine verb of "has" is introduced to model object composition relationships between objects.
This verb has a new operator associated with it called "how many" that allows you to make queries that trigger an object calculation algorithm.

### Version 5
####Brief description of what's new in version 5
In version 5 of the K model, the verb "place in" is introduced together with the concept of "place". As the ideal is to also present an associated query operator and its algorithm, this version also presents the "Where" query operator that triggers an algorithm that finds relationships between places. For example, where is Móstoles? Mostoles is in the Community of Madrid, which in turn is in Spain. An important novelty that is presented in this version is the multi-concept verb and it is that "place in" is a multi-concept verb because it allows you to work with the concept of place and object. With the where operator we can ask where an object is situated.

### Version 6
####Brief description of what's new in version 6
In version 6 the "How far" query operator is introduced. Its syntax is as follows "How far <[object,place]> from <place>". It allows calculating distances between places and between objects that have previously been located in a place, and between places and objects.

### Version 7
####Brief description of what's new in version 7
One of the most important features is introduced in this version, the expression parser, MKparser. This allows you to customize the Model K language. This allows you to create syntactic sugar so that each person can develop their own code expressions, in addition to making text mining possible.
The concept of "expression" is also introduced, which has an associated verb called "equivalentTo". In this version you can create "parsing functions" to do text mining or customize the model K language. You can also use the "in-label-language" operator that allows groups of expressions to be grouped as if they were languages. "label-language" is used together with "equivalentTo". Example of expression: "Estoy bien" equivalentTo "I´m fine" in English label language.

### Version 8
####Brief description of what's new in version 8
In this version 8, the notion of time is introduced throught several concepts:
* event
* date
* cycle
* secuence
* duration
The events have a beginning and an end, as a beginning they can have an event or a date and as an end they can have another event and/or another date. Optionally, the verb "place in" can be used to place events in a place. The concept of **temporary knowledge** is also introduced, in this way an expression can be valid at an instant, or begin to be valid from a certain date.
The concept of **eventual knowledge** is also introduced. An expression can be valid from an event that does not have to be located on a specific date. It can be valid before the event, after the event or during the event.

### Version 9
####Brief description of what's new in version 9
In this version the notion of **fuzzy knowledge** is introduced. There is  a certain probability of a sentence, in addition the pseudo operator "not" is introduced. The probability of a sentence can be quantified numerically or expressed in a fuzzy way with the pseudo-perators allways, normally, often, usually and never.

### Version 10
####Brief description of what's new in version 10
In this version, the multiple assignment operator is introduced, which is ",". Usage example:
motorbike, car, plane is object.
This statement is equivalent to three statements:
* motorbike is object
* car is object
* plane is object
This operator has to work with all verbs

https://markdownlivepreview.com/