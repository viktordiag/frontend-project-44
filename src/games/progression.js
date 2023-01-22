import _ from 'lodash';
import { greeting, mainLogic } from '../index.js';

const arithProgression = () => {
  const numberOne = _.random(1, 10);
  const numberTwo = _.random(1, 10);
  const progressArr = [];
  let nextValue = numberOne;
  for (let i = 1; i <= 10; i += 1) {
    nextValue += numberTwo;
    progressArr.push(nextValue);
  }
  return progressArr;
};

const gameProgression = () => {
  const theTask = 'What number is missing in the progression?';
  greeting(theTask);

  for (let i = 1; i <= 3; i += 1) {
    const numberOfElem = _.random(0, 9);
    const arithArr = arithProgression();
    const correctAnswer = String(arithArr[numberOfElem]);
    arithArr[numberOfElem] = '..';
    const question = `${arithArr.join(' ')}`;
    const uncorrect = mainLogic(question, correctAnswer, i);
    if (uncorrect === 1) {
      break;
    }
  }
};

export default gameProgression;
