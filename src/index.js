import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const engine = (game, rule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  let round = 0;
  while (round <= 3) {
    const [question, answer] = game();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (userAnswer === answer) {
      console.log('Correct!');
      round += 1;
      if (round === 3) {
        console.log(`Congratulatsions, ${userName}!`);
        return;
      }
    }
  }
};

export { getRandomNumber, engine };
