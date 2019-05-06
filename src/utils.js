const getRandomNumber = (min = 0, max = 10) => Math.round(min + Math.random() * (max - min));

export default getRandomNumber;
