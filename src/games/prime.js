import _ from 'lodash';
 import {greeting} from '../index.js';
 import {mainLogic} from '../index.js';
 const primeArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];
 export const gamePrime = () => {
 const theTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
 greeting(theTask);

 for (let i = 1; i <= 3; i += 1) {
   let numberOne = _.random(0,50);
   let question  = `${numberOne}`;
   let answer = (primeArr.includes(numberOne) === true ) ?  'yes' : 'no';
   let correctAnswer = answer;
   let uncorrect =  mainLogic(question, correctAnswer, i);
     if (uncorrect === 1) {
       break;
     };
   };		
 };

