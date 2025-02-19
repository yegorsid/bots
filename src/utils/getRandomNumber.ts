export const getRandomNumber = () => {
  const min = 0.005;
  const max = 99.995;
  const random = Math.random() * (max - min) + min;
  return Math.round(random * 100) / 100;
}