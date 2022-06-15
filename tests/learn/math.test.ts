import { absolute, PI } from '../../src/learn/math'

test('imports pi', () => {
    expect(PI).toBe(3.14)
})

test('absolute', () => {
    expect(absolute(-5)).toBe(5)
})
