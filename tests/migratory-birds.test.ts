import migratoryBirds from '../src/migratory-birds'

test('example', () => {
    const res = migratoryBirds([1, 1, 2, 2, 3])
    expect(res).toBe(1)
})

test('example', () => {
    const res = migratoryBirds([1, 1, 2, 2, 3, 3])
    expect(res).toBe(1)
})

test('example', () => {
    const res = migratoryBirds([1, 1, 2, 2, 3, 3, 3])
    expect(res).toBe(3)
})

test('sample', () => {
    const res = migratoryBirds([1, 4, 4, 4, 5, 3])
    expect(res).toBe(4)
})

test('sample 2', () => {
    const res = migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])
    expect(res).toBe(3)
})
