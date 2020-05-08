import { getRandomNumber, engine } from '../index.js';

const gameRule = 'What is the result of the expression?';

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

const makeGame = () => {
  const number1 = getRandomNumber(0, 20);
  const number2 = getRandomNumber(0, 20);
  const operator = operators[getRandomNumber(0, 2)];
  const question = `Question: ${number1} ${operator} ${number2}`;
  const answer = String(calc(number1, number2, operator));
  return [question, answer];
};

export default () => engine(makeGame, gameRule);
