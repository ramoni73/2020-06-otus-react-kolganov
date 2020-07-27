import {mul, div, add, minus, sqrt, raise, factorial} from "./mathOperators";

test("mul 1 * 2 to equal 2", () => {
  expect(mul(1, 2)).toBe(2);
});

test("mul 2 * 2 to equal 4", () => {
  expect(mul(2, 2)).toBe(4);
});

test("mul 1 * undefined to equal 0", () => {
  expect(mul(1)).toBe(0);
});

test("div 2 / 2 to equal 1", () => {
  expect(div(2, 2)).toBe(1);
});

test("div 4 / 2 to equal 2", () => {
  expect(div(4, 2)).toBe(2);
});

test("div 4 / undefined to equal 0", () => {
  expect(div(4)).toBe(0);
});

test("add 4 + 2 to equal 6", () => {
  expect(add(4, 2)).toBe(6);
});

test("add 4 + undefined to equal 4", () => {
  expect(add(4)).toBe(4);
});

test("minus 4 - 2 to equal 2", () => {
  expect(minus(4, 2)).toBe(2);
});

test("minus 4 - undefined to equal 4", () => {
  expect(minus(4)).toBe(4);
});

test("sqrt 7 equal 49", () => {
  expect(sqrt(7)).toBe(49)
});

test("rise 1 to 3 equal 1", () => {
  expect(raise(1, 3)).toBe(1)
});

test("rise 2 to 3 equal 8", () => {
  expect(raise(2, 3)).toBe(8)
});

test("rise 7 to 0 equal 1", () => {
  expect(raise(7, 0)).toBe(1)
});

test("rise 2 to undefined equal 1", () => {
  expect(raise(2)).toBe(1)
});

test("factorial 1 equal 1", () => {
  expect(factorial(1)).toBe(1)
});

test("factorial 5 equal 120", () => {
  expect(factorial(5)).toBe(120)
});
