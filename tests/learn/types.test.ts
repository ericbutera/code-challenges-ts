describe('numbery things', () => {
    it('have bigint', () => {
        const h = 100n
        expect(h).toBe(100n)
        expect(typeof h).toBe('bigint')
        expect(BigInt(100)).toEqual(h)
    })

    it('allows underscores', () => {
        expect(1_000).toBe(1000)
    })
})

describe('symbol', () => {
    it('is a type', () => {
        const s = Symbol('foo')
        expect(typeof s).toBe('symbol')
    })

    it('is not equal to string', () => {
        const s = Symbol('foo')
        expect(s).not.toBe('foo')
    })
})

describe('objects', () => {
    it('has literals', () => {
        const a = {
            b: 'c',
        }
        expect(a.b).toBe('c')
    })

    it('has type inference', () => {
        const c: {
            firstName: string
            lastName: string
        } = {
            firstName: 'Eric',
            lastName: 'Butera',
        }
        expect(c.firstName).toBe('Eric')
        expect(typeof c.lastName).toBe('string')
    })

    it('has optional properties', () => {
        let a: {
            b: number
            c?: string
            [key: number]: boolean
        }
        a = { b: 1 }
        a = { b: 1, c: undefined }
        a = { b: 1, 10: true, 20: false }
        // a = { 10: true } // Property b is missing in type
        expect(a.b).toBe(1)
        expect(a[10]).toBe(true)
    })
})

describe('Enums', () => {
    it('has defaults', () => {
        enum Language {
            English,
            Spanish,
        }
        expect(Language.English).toBe(0)
    })

    it('has explicit values', () => {
        enum ExplicitLanguage {
            English = 1,
            Spanish = 2,
        }
        expect(ExplicitLanguage.Spanish).toBe(2)
    })
})
