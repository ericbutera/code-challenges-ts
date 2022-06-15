import fetch from 'node-fetch';
const {Response} = jest.requireActual('node-fetch');
import { mocked } from 'jest-mock'
import hello from '../src/fetch'

jest.mock('node-fetch');

test('fetch test', async () => {
    const mockedFetch = mocked(fetch, true)
    mockedFetch.mockReturnValue(Promise.resolve(new Response('hai')));

    let greeting = await hello();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(greeting).toBe("hai");
})

