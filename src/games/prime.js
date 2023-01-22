import _ from 'lodash';
import { greeting, mainLogic } from '../index.js';

const primeArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61];
const gamePrime = () => {
  const theTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  greeting(theTask);

  for (let i = 1; i <= 3; i += 1) {
    const numberOne = _.random(0, 50);
    const question = `${numberOne}`;
    const answer = (primeArr.includes(numberOne) === true) ? 'yes' : 'no';
    const correctAnswer = answer;
    const uncorrect = mainLogic(question, correctAnswer, i);
    if (uncorrect === 1) {
      break;
    }
  }
};

export default gamePrime;
