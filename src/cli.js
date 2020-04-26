import readlineSync from "readline-sync";

export const printName = () => {
  const name = readlineSync.question("Your answer: ");
  console.log(`Hello ${name}`);
};
