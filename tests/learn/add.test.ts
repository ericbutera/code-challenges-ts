// https://www.typescriptlang.org/docs/handbook/2/modules.html
import sum from '../../src/learn/sum'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})
