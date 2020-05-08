import { getRandomNumber, engine } from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const makeGame = () => {
  const number1 = getRandomNumber(0, 20);
  const number2 = getRandomNumber(0, 20);
  const question = `Question: ${number1} ${number2}`;
  const answer = String(getGcd(number1, number2));
  return [question, answer];
};

export default () => engine(makeGame, gameRule);
