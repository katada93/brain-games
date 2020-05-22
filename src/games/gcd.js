import engine from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const makeGame = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2).toString();
  return [question, answer];
};

export default () => engine(makeGame, gameRule);
