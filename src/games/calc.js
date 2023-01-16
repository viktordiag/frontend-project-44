import _ from 'lodash';
import {greeting} from '../index.js';
import {mainLogic} from '../index.js';
export const gameCalc = () => {
const theTask = 'What is the result of the expression?';
greeting(theTask);

for (let i = 1; i <= 3; i += 1) {
  let numberOne = _.random(1,20);
  let numberTwo = _.random(1,20);
  let operating = _.sample(['+', '-', '*']);
  let question  = `${numberOne} ${operating} ${numberTwo}`;
  let correctAnswer = eval(question);
  let uncorrect =  mainLogic(question, correctAnswer, i);  
  if (uncorrect === 1) {
    break;
  };
};
};

