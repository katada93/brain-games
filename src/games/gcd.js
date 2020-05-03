import readlineSync from 'readline-sync';
import getRandomNumber from '../index.js';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const brainGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i <= 3) {
    const number1 = getRandomNumber(0, 20);
    const number2 = getRandomNumber(0, 20);
    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer !== getGcd(number1, number2)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${getGcd(number1, number2)}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (userAnswer === getGcd(number1, number2)) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulatsions, ${name}!`);
        return;
      }
    }
  }
};

export default brainGcd;
