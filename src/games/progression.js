import _ from 'lodash';
import {greeting} from '../index.js';
import {mainLogic} from '../index.js';
const arithProgression = () => {
  let numberOne = _.random(1,10);
  let numberTwo = _.random(1,10);
  const progressArr = [];
  let nextValue = numberOne;
  for (let i = 1; i <= 10; i++) {
    nextValue += numberTwo;
    progressArr.push(nextValue);
  };
  return progressArr;
  };
	  
export const gameProgression = () => {
  const theTask = 'What number is missing in the progression?';
  greeting(theTask);
  

    for (let i = 1; i <= 3; i += 1) {
    let numberOfElem = _.random(0,9);
    let arithArr = arithProgression();
    let correctAnswer = arithArr[numberOfElem];
    arithArr[numberOfElem] = '..';
    let question  = `${arithArr.join(' ')}`;
    let uncorrect =  mainLogic(question, correctAnswer, i);
     if (uncorrect === 1) {
     break;
    };
  };	
};

