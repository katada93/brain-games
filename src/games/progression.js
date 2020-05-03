import readlineSync from 'readline-sync';
import getRandomNumber from '../index.js';

const makeProgression = (begin, step) => {
  const result = [];
  for (let i = begin; result.length < 10; i += step) {
    result.push(i);
  }
  result[step] = '..';
  return result;
};

const brainProg = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i <= 3) {
    const count = getRandomNumber(2, 5);
    const start = getRandomNumber(1, 30);
    const getMissing = () => makeProgression(start, count)[count - 1] + count;
    console.log(`Question: ${makeProgression(start, count).join(' ')}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer !== getMissing()) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${getMissing()}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (userAnswer === getMissing()) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulatsions, ${name}!`);
        return;
      }
    }
  }
};

export default brainProg;
