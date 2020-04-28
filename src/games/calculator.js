import readlineSync from 'readline-sync';
import randomNumber from '../index.js';

const getRandomOperator = () => Math.floor(Math.random() * 3);
const operators = ['+', '-', '*'];

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let i = 0;
  while (i <= 3) {
    const number1 = randomNumber();
    const number2 = randomNumber();
    const operator = operators[getRandomOperator()];
    console.log(`Question: ${number1} ${operator} ${number2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer !== calc(number1, number2, operator)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${calc(number1, number2, operator)}`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    if (userAnswer === calc(number1, number2, operator)) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulatsions, ${name}!`);
        return;
      }
    }
  }
};

export default brainCalc;
