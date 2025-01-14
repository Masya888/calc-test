import calculator from '../src/calculator';
describe('Calculator 100% coverage', () => {
  test('it loads without error', () => {
    expect(calculator).toBeDefined();
    expect(typeof calculator).toBe('function');
  });
  test ('2 + 2 = 4', () => {
    expect(calculator(2, '+', 2)).toBe(4)
  });
  test ('2 - 2 = 0', () => {
    expect(calculator(2, '-', 2)).toBe(0)
  });
  test ('2 * 2 = 4', () => {
    expect(calculator(2, '*', 2)).toBe(4)
  });
  test ('2 / 2 = 1', () => {
    expect(calculator(2, '/', 2)).toBe(1)
  });
  test('throw error if operand A is not a number', () => {
    expect(() => calculator('?', '*', 2)).toThrow();
  });
  test('throw error if operand B is not a number', () => {
    expect(() => calculator(2, '*', '?')).toThrow();
  });
  test('throw error if operator is not valid', () => {
    expect(() => calculator(2, '?', 2)).toThrow();
  });
  test.each`
    a      | op     | b      | expected
    ${2}   | ${'+'} | ${2}   | ${4}
    ${2}   | ${'-'} | ${2}   | ${0}
    ${2}   | ${'*'} | ${2}   | ${4}
    ${2}   | ${'/'} | ${2}   | ${1}
    ${'?'}   | ${'+'} | ${2}   | ${'error'}
    ${2}   | ${'+'} | ${'?'}   | ${'error'}
    ${2}   | ${'?'} | ${2}   | ${'error'}
  `('$a $op $b = $expected', ({ a, op, b, expected }) => {
    if (expected === 'error') {
      expect(() => calculator(a, op, b)).toThrow();
    } else {
      expect(calculator(a, op, b)).toBe(expected);
    }
  });
});
