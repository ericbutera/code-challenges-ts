import { mocked } from 'jest-mock'
import fetch from 'node-fetch'
import hello from '../../src/learn/fetch'
const { Response } = jest.requireActual('node-fetch')

jest.mock('node-fetch')

test('fetch test', async () => {
    const mockedFetch = mocked(fetch, true)
    mockedFetch.mockReturnValue(Promise.resolve(new Response('hai')))

    const greeting = await hello()

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(greeting).toBe('hai')
})
