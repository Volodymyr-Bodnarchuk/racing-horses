const getRandomColor = (min = 0, max = 256) => {
  const colors = [
    Math.floor(Math.random() * (max - min) + min),
    Math.floor(Math.random() * (max - min) + min),
    Math.floor(Math.random() * (max - min) + min),
  ];
  return colors;
};
export { getRandomColor };
