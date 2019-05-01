
import {
  getRandomNumber,
  makeGame,
} from '..';

const isEven = num => num % 2 === 0;

export default () => {
  const gameRules = 'Answer "yes" if number even otherwise answer "no".';
  const gameMechanics = () => {
    const currentTask = getRandomNumber(0, 100);
    const correctAnswer = isEven(currentTask) ? 'yes' : 'no';
    return { currentTask, correctAnswer };
  };

  makeGame(gameRules, gameMechanics);
};
