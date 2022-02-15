import { pi, absolute } from "../src/math";

test('imports pi', () => {
  expect(pi).toBe(3.14);
})

test('absolute', () => {
  expect(absolute(-5)).toBe(5);
})