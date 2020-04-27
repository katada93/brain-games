import readlineSync from 'readline-sync';

const randomNumber = () => (Math.floor(Math.random() * 100));

const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');

const brainEven = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  console.log(i);
  while (i <= 3) {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== isEven(number)) {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (userAnswer === isEven(number)) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulatsions, ${name}!`);
        return;
      }
    }
  }
};

export default brainEven;
