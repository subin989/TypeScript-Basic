class Person {
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    public getFullName(): string {
      return this.name;
    }
  
    public getAge(): number {
      return this.age;
    }
  
    public sayHello(): void {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person('John Doe', 30);
  person1.sayHello(); // Output: "Hello, my name is John Doe and I am 30 years old."
  console.log(person1.getFullName()); // Output: "John Doe"
  console.log(person1.getAge()); // Output: 30
  