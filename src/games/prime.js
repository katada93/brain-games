import readlineSync from 'readline-sync';
import getRandomNumber from '../index.js';

const isPrime = (n) => {
  if (n <= 1) {
    return null;
  }
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i <= 3) {
    const number = getRandomNumber(2, 50);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== isPrime(number)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isPrime(number)}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (userAnswer === isPrime(number)) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulatsions, ${name}!`);
        return;
      }
    }
  }
};

export default brainPrime;
