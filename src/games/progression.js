import makeGame from '..';
import getRandomNumber from '../utils';

const numberOfSteps = 10;
const maxPossibleIndex = numberOfSteps - 1;

const getProgression = (firstElement, step) => {
  const makeProgression = (element, progression) => {
    const newProgression = progression.concat(element);
    if (newProgression.length === numberOfSteps) {
      return newProgression;
    }
    return makeProgression(element + step, newProgression);
  };
  return makeProgression(firstElement, []);
};

const generateQuestion = (removedIndex, arr) => arr.map((el, index) => (index === removedIndex ? '..' : el)).join(' ');

const gameDescription = 'What number is missing in the progression?';
const gameData = () => {
  const firstElement = getRandomNumber(-100, 100);
  const step = getRandomNumber(-5, 5);
  const progression = getProgression(firstElement, step);
  const removedIndex = getRandomNumber(0, maxPossibleIndex);

  const question = generateQuestion(removedIndex, progression);
  const correctAnswer = String(progression[removedIndex]);

  return { question, correctAnswer };
};

export default () => {
  makeGame(gameDescription, gameData);
};
