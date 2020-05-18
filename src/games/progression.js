import engine from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = (start, step) => {
  const result = [];
  const progressionLength = 10;
  const index = getRandomNumber(2, 7);
  for (let i = start; result.length < progressionLength; i += step) {
    result.push(i);
  }
  result[index] = '..';
  const missingValue = start + step * index;
  return [result.join(' '), missingValue];
};

const makeGame = () => {
  const start = getRandomNumber(1, 30);
  const step = getRandomNumber(2, 5);
  const [question, answer] = getProgression(start, step);
  return [question, answer.toString()];
};

export default () => engine(makeGame, gameRule);
