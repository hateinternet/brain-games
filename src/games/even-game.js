
import {
  getRandomNumber,
  isEven,
  makeGame,
} from '..';

export default () => {
  const gameRules = 'Answer "yes" if number even otherwise answer "no".';
  const gameMechanics = () => {
    const currentTask = getRandomNumber();
    const correctAnswer = isEven(currentTask) ? 'yes' : 'no';
    return { currentTask, correctAnswer };
  };

  makeGame(gameRules, gameMechanics);
};
