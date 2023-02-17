export enum Greeting {
  name = 'John',
  age = 23,
}

export default function greet(name: Greeting.name, age: Greeting.age) {
  return `Hello, ${name}! You are ${age}.`;
}
