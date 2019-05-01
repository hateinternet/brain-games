import {
  getRandomNumber,
  makeGame,
} from '..';

const getProgression = (firstElement, step) => {
  const numberOfSteps = 10;
  const makeProgression = (element, progression) => {
    const newProgression = progression.concat(element);
    if (newProgression.length === numberOfSteps) {
      return newProgression;
    }
    return makeProgression(element + step, newProgression);
  };
  return makeProgression(firstElement, []);
};

const getTask = (removedElementIndex, arr) => {
  const newArr = arr.slice();
  newArr[removedElementIndex] = '..';
  const task = newArr.join(' ');
  return task;
};

export default () => {
  const gameRules = 'What number is missing in the progression?';
  const gameMechanics = () => {
    const firstElement = getRandomNumber(-100, 100);
    const step = getRandomNumber(-5, 5);
    const progression = getProgression(firstElement, step);
    const removedElementIndex = getRandomNumber(0, 9);

    const currentTask = getTask(removedElementIndex, progression);
    const correctAnswer = String(progression[removedElementIndex]);

    return { currentTask, correctAnswer };
  };

  makeGame(gameRules, gameMechanics);
};
