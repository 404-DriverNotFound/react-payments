const strSplice = (
  oldStr: string,
  newStr: string,
  start: number,
  end: number,
) => oldStr.slice(start, end) + newStr + oldStr.slice(end);
const isDigit = (value: number) => !isNaN(value);

const getRandomNumbers = (len: number) => {
  const array = [...Array(len)].map((v, i) => i + 1);

  const shuffle = (array: number[]) => {
    let currentIndex = array.length;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };
  return shuffle(array);
};

export { strSplice, isDigit, getRandomNumbers };
