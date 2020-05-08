import { getRandomNumber, engine } from '../index.js';

const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeGame = () => {
  const number = getRandomNumber(0, 20);
  const question = `Question: ${number}`;
  const answer = isEven(number);
  return [question, answer];
};

export default () => engine(makeGame, gameRule);
