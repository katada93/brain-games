import readlineSync from 'readline-sync';
import getRandomNumber from '../index.js';

const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i <= 3) {
    const number = getRandomNumber(20);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== isEven(number)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isEven(number)}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (userAnswer === isEven(number)) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulatsions, ${name}!`);
        return;
      }
    }
  }
};

export default brainEven;
