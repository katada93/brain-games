import engine from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = (start, step, progressionLength, hidden) => {
  const result = [];
  for (let i = start; result.length < progressionLength; i += step) {
    result.push(i);
  }
  result[hidden] = '..';
  return result.join(' ');
};

const progressionLength = 10;

const makeGame = () => {
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(2, 10);
  const hiddenValue = getRandomNumber(1, progressionLength - 2);
  const question = getProgression(start, step, progressionLength, hiddenValue);
  const answer = (start + step * hiddenValue).toString();
  return [question, answer];
};

export default () => engine(makeGame, gameRule);
