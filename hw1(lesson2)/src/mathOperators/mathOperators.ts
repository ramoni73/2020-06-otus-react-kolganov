export type ScalarOperationType = (first: number, second?: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second?: number
): number => {
  if (second !== undefined) {
    return first * second;
  }
  return 0;
}

export const div: ScalarOperationType = (
  first: number,
  second?: number
): number => {
  if (second !== undefined) {
    return first / second;
  }
  return 0;
}

export const add: ScalarOperationType = (
  first: number,
  second?: number
): number => {
  if (second !== undefined) {
    return first + second;
  }
  return first;
}

export const minus: ScalarOperationType = (
  first: number,
  second?: number
): number => {
  if (second !== undefined) {
    return first - second;
  }
  return first;
}

export const sqrt: ScalarOperationType = (
    first: number
): number => first ** 2

export const raise: ScalarOperationType = (
    first: number,
    second?: number
): number => {
  if (second !== undefined) {
    return first ** second;
  }
  return 1;
}

export const factorial: ScalarOperationType = (
    first: number
): number => (first != 1) ? first * factorial(first - 1) : 1;

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "**": sqrt,
  "^": raise,
  "!": factorial
};

export const mathPriorities: { [key: string]: number } = {
  FIRST: 1,
  SECOND: 2,
};

const { FIRST, SECOND } = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "**": FIRST,
  "^": FIRST,
  "!": FIRST,
  "+": SECOND,
  "-": SECOND,
};
