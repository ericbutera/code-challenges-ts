describe('functions', () => {
    it('have params', () => {
        const add = (a: number, b: number): number => a + b
        expect(add(1, 2)).toBe(3)
    })

    it('have optional params', () => {
        const add = (a: number, b?: number): number => a + (b || 0)
        expect(add(1)).toBe(1)
    })

    it('have default params', () => {
        const add = (a: number, b = 1): number => a + b
        expect(add(1)).toBe(2)
    })

    it('support variadic parameters', () => {
        const add = (...numbers: number[]): number =>
            numbers.reduce((a, b) => a + b, 0)
        expect(add(1, 2, 3)).toBe(6)
    })

    it('can generate', () => {
        /**
         * note the * indicating this is a `generator`
         */
        function* numberGenerator(): IterableIterator<number> {
            let i = 0
            while (1) {
                yield i++
            }
        }
        const numbers = numberGenerator()
        expect(numbers.next().value).toBe(0)
        expect(numbers.next().value).toBe(1)
        expect(numbers.next()).toMatchObject({ value: 2, done: false })
    })

    it('can iterate', () => {
        const numberIterator = {
            *[Symbol.iterator]() {
                for (let i = 0; i < 3; i++) {
                    yield i
                }
            },
        }

        for (const a of numberIterator) {
            expect(a).toBe(0)
            break
        }

        const spreadIterator = [...numberIterator]
        expect(spreadIterator).toEqual([0, 1, 2])

        const [destructuredOne, ...destructuredOthers] = numberIterator
        expect(destructuredOne).toBe(0)
        expect(destructuredOthers).toEqual([1, 2])
    })
})
