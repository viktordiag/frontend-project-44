import _ from 'lodash';
import { greeting, mainLogic } from '../index.js';

const gcd = (numberOne, numberTwo) => {
  let number1 = numberOne;
  let number2 = numberTwo;
  if (number1 === number2) {
    return number1;
  }
  while (number1 !== number2) {
    if (number1 < number2) {
      number2 -= number1;
    } else {
      number1 -= number2;
    }
  }
  return number1;
};

export const gameGcd = () => {
  const theTask = 'Find the greatest common divisor of given numbers.';
  greeting(theTask);

  for (let i = 1; i <= 3; i += 1) {
    const numberOne = _.random(1, 20);
    const numberTwo = _.random(1, 20);
    const question = `${numberOne} ${numberTwo}`;
    const correctAnswer = String(gcd(numberOne, numberTwo));
    const uncorrect = mainLogic(question, correctAnswer, i);
    if (uncorrect === 1) {
      break;
    }
  }
};

export default gameGcd;
