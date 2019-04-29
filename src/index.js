import readlineSync from 'readline-sync';

const greet = () => console.log('Welcome to the Brain Games!');

const getNameSayHi = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export { greet, getNameSayHi };
