import engine from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const makeGame = () => {
  const number = getRandomNumber(0, 20);
  const question = number.toString();
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => engine(makeGame, gameRule);
