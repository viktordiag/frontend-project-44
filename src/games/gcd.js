 import _ from 'lodash';
 import {greeting} from '../index.js';
 import {mainLogic} from '../index.js';
 //import {gcd} from 'mathjs';
 export const gameGcd = () => {
   const theTask = 'Find the greatest common divisor of given numbers.';
   greeting(theTask);

   const gcd = (numberOne, numberTwo) => {
     if(numberOne === numberTwo) {
       return numberOne;
       }
     while(numberOne != numberTwo) {
       if(numberOne < numberTwo) {
	 numberTwo -= numberOne;
       } else {
	       numberOne -= numberTwo
         }
     }
       return numberOne;
   };
       

   for (let i = 1; i <= 3; i += 1) {
     let numberOne = _.random(1,20);
     let numberTwo = _.random(1,20);
     let question  = `${numberOne} ${numberTwo}`;
     let correctAnswer = gcd(numberOne, numberTwo);
     let uncorrect =  mainLogic(question, correctAnswer, i);
     if (uncorrect === 1) {
       break;
     };
   };
};
