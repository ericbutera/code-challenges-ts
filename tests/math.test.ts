import { PI, absolute } from '../src/math'

test('imports pi', () => {
    expect(PI).toBe(3.14)
})

test('absolute', () => {
    expect(absolute(-5)).toBe(5)
})
