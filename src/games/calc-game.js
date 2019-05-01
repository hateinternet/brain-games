import {
  getRandomNumber,
  getRandomSign,
  makeGame,
} from '..';

export default () => {
  const gameRules = 'What is the result of the expression?';
  const gameMechanics = () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const sign = getRandomSign();
    const currentTask = `${num1} ${sign} ${num2}`;
    let correctAnswer;
    switch (sign) {
      case '+':
        correctAnswer = String(num1 + num2);
        break;
      case '-':
        correctAnswer = String(num1 - num2);
        break;
      case '*':
        correctAnswer = String(num1 * num2);
        break;
      // no default
    }
    return { currentTask, correctAnswer };
  };

  makeGame(gameRules, gameMechanics);
};
