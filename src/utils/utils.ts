export const strSplice = (oldStr: string, newStr: string, start: number, end: number) =>
  oldStr.slice(start, end) + newStr + oldStr.slice(end);
export const isDigit = (value: number) => !isNaN(value);