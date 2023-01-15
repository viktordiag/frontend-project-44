#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!`);
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
for (let i = 1; i <= 3; i += 1) {
let randomNumber = _.random(1,100);
let correctAnswer = (randomNumber % 2) === 0 ? 'yes' : 'no';
console.log(`Question: ${randomNumber}`);
let userAnswer = readlineSync.question('Your answer:');
if (correctAnswer !== userAnswer){
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again ${name}!`);
  break;
 };
console.log('Correct!');
if (i === 3) console.log(`Congratulations, ${name}!`); 
};

