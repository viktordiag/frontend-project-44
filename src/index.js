import readlineSync from 'readline-sync';

let name = '';
const uncorrect = 1;

export const greeting = (theTask) => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(theTask);
  return name;
};

export const mainLogic = (question, correctAnswer, i) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    return uncorrect;
  }
  console.log('Correct!');
  if (i === 3) console.log(`Congratulations, ${name}!`);
  return undefined;
};
