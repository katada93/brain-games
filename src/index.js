import readlineSync from 'readline-sync';

const engine = (getData, rule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  let countOfRound = 0;
  while (countOfRound < 3) {
    const [question, answer] = getData();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (userAnswer === answer) {
      console.log('Correct!');
      countOfRound += 1;
    }
  }
  console.log(`Congratulatsions, ${userName}!`);
};

export default engine;
