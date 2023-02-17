import greet, { Greeting } from '../src/index.js';

const message = await greet(Greeting.name, Greeting.age);

console.log(message);
