import _ from 'lodash';
import { greeting, mainLogic } from '../index.js';

const gameCalc = () => {
  const theTask = 'What is the result of the expression?';
  greeting(theTask);

  const calculat = (num1, num2, operat) => {
    let result = 0;
    if (operat === '-') {
      result = (num1 - num2);
    }
    if (operat === '+') {
      result = (num1 + num2);
    }
    if (operat === '*') {
      result = (num1 * num2);
    }
    return result;
  };

  for (let i = 1; i <= 3; i += 1) {
    const numberOne = _.random(1, 20);
    const numberTwo = _.random(1, 20);
    const operating = _.sample(['+', '-', '*']);
    const question = `${numberOne} ${operating} ${numberTwo}`;
    const correctAnswer = `${calculat(numberOne, numberTwo, operating)}`;
    const uncorrect = mainLogic(question, correctAnswer, i);
    if (uncorrect === 1) {
      break;
    }
  }
};

export default gameCalc;
