import engine from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = (begin, step) => {
  const result = [];
  const progressionLength = 10;
  for (let i = begin; result.length < progressionLength; i += step) {
    result.push(i);
  }
  result[step] = '..';
  return result.join(' ');
};

const makeGame = () => {
  const count = getRandomNumber(2, 5);
  const start = getRandomNumber(1, 30);
  const question = `${getProgression(start, count)}`;
  const missingValue = start + count * count;
  const answer = String(missingValue);
  return [question, answer];
};

export default () => engine(makeGame, gameRule);
