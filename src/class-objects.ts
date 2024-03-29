/*  

What is a class?
Class is a blueprint of the object
A class can include the following:
- Properties or variables
- Methods
- Constructor 

What is a object?
An object is an instance of a class

What is a method?
When you create a function within the class it is know as method 

What is a function?
When a create a function without a class, it is know as function

What is constructor?
Contructor may or may not take argument
Whenever we create the object of the class, the contructor will be invoke automatically. 
We do not need to call the constructor explicitly.

For example 'Student':
Student is a class
Student's Name, age, color is it's properties
Student's behavior Eating, Drinking, Running are it's function
Now we can have multiple objects of the Student class

*/

// Task: Create a new and object

// Task1: Initialize variables using object variable
// Task2: Initialize variables using methods
// Task 3: Intialize variables using constructor

class Employee {
  eId: number;
  eName: string;
  deptName: string;

  // Task 3:
  // Contructor does not return any value
  constructor(id: number, name: string, dName: string) {
    this.eId = id;
    this.eName = name;
    this.deptName = dName;
  }

  // Task 2:
  // Void because it does not return any value
  setData(id: number, name: string, dName: string): void {
    this.eId = id;
    this.eName = name;
    this.deptName = dName;
  }

  setData2(id: number, name: string, dName: string): string {
    return `This is id: ${id}`;
  }

  // Task 1:
  display(): void {
    console.log(this.eId);
    console.log(this.eName);
    console.log(this.deptName);
  }
}

// Task 1 - This is the object
// let emp1 = new Employee();
// emp1.eId = 1; // These are the properties or variables define at globally in class
// emp1.eName = "Emp1";
// emp1.deptName = "computer science";
// emp1.display();

// Task 2
// let emp2 = new Employee();
// emp2.setData(2, "Emp2", "computer engineering");

// Task 3
// Now, this object now expects arguments, because of the contructor
let emp3 = new Employee(3, "Emp3", "CS");
emp3.display();

// In typescript
// Introduce readonly property to Id, so no one can modify it later on
let employee: {
  readonly id: number;
  name: string;
} = { id: 1, name: "" };

employee.name = "Moiz";

// Type alias in TS
// And we can use it at multiple places now
type employee1 = {
  readonly id: number;
  name: string;
};

let employee2: employee1 = {
  id: 1,
  name: "Moiz",
};
