# Data Structures and Algorithms with JavaScript

## Big O Notation

![Big O notation graph](/assets/bigo-graph.png)
Source: [Big O Cheat Sheet](https://www.bigocheatsheet.com/)

To get a good grasp on Big O notation checkout this
[Web Dev Simplified video on Big O notation](https://youtu.be/itn09C2ZB9Y?si=KtfxAVqNPNTPutWw)

#### Big O for Object
```js
const person = {
    firstName: "Mehedi",
    age: 24
}

// If we insert, remove or access a property the time complexity is constant O(1)

// example
person.lastName = "Hasan" // Insert - constant O(1)
delete person.age // Remove - constant O(1)
console.log(person.firstName) // Access - constant O(1)

// And object methods like keys, values, entries are linear O(n)
Object.keys(person) // linear O(n)
Object.values(person) // linear O(n)
Object.entries(person) // linear O(n)
```
