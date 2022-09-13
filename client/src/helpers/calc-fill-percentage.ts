const calcFillPercentage = (currentProgress: number, totalProgress: number) => {
  if (currentProgress > totalProgress) return 100;
  const fillValue = (currentProgress * 100) / totalProgress;

  return fillValue;
};
export { calcFillPercentage };
