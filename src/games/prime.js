import { getRandomNumber, engine } from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) {
    return null;
  }
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const makeGame = () => {
  const number = getRandomNumber(2, 50);
  const question = `Question: ${number}`;
  const answer = isPrime(number);
  return [question, answer];
};

export default () => engine(makeGame, gameRule);
