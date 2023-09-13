import { sum } from "./sum"

test('5 + 2 equals 7', () => { // using 'it' instead of 'test' works the same way
  expect(sum(5, 2)).toBe(7);
})