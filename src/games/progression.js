import { getRandomNumber, engine } from '../index.js';

const gameRule = 'What number is missing in the progression?';

const makeProgression = (begin, step) => {
  const result = [];
  for (let i = begin; result.length < 10; i += step) {
    result.push(i);
  }
  result[step] = '..';
  return result;
};

const makeGame = () => {
  const count = getRandomNumber(2, 5);
  const start = getRandomNumber(1, 30);
  const question = `Question: ${makeProgression(start, count).join(' ')}`;
  const getMissing = () => makeProgression(start, count)[count - 1] + count;
  const answer = String(getMissing());
  return [question, answer];
};

export default () => engine(makeGame, gameRule);
