import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const makeGame = (gameDescription, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);

  const runGameRound = (roundCounter) => {
    if (roundCounter === numberOfRounds) {
      console.log(`Congratulations, ${username}!`);
      return;
    }

    const { question, correctAnswer } = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }

    console.log('Correct!');
    runGameRound(roundCounter + 1);
  };

  runGameRound(0);
};

export default makeGame;
