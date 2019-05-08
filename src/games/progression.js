import makeGame from '..';
import getRandomNumber from '../utils';

const numberOfSteps = 10;
const maxPossibleIndex = numberOfSteps - 1;

const generateProgression = (firstElement, step, numberSteps) => {
  const makeProgression = (element, progression) => {
    const newProgression = progression.concat(element);
    if (newProgression.length === numberSteps) {
      return newProgression;
    }
    return makeProgression(element + step, newProgression);
  };
  return makeProgression(firstElement, []);
};

const generateQuestion = (hideElementIndex, arr) => arr.map((el, index) => (index === hideElementIndex ? '..' : el)).join(' ');

const gameDescription = 'What number is missing in the progression?';
const gameData = () => {
  const firstElement = getRandomNumber(-100, 100);
  const step = getRandomNumber(-5, 5);
  const progression = generateProgression(firstElement, step, numberOfSteps);
  const hideElementIndex = getRandomNumber(0, maxPossibleIndex);

  const question = generateQuestion(hideElementIndex, progression);
  const correctAnswer = String(progression[hideElementIndex]);

  return { question, correctAnswer };
};

export default () => {
  makeGame(gameDescription, gameData);
};
