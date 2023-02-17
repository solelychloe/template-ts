// eslint-disable-next-line import/no-useless-path-segments
import greet, { Greeting } from '../src/index.js';

const message = greet(Greeting.name, Greeting.age);

console.log(message);
