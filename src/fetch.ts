import fetch from 'node-fetch';

export default async function hello() {
    const response = await fetch("https://example.com/")
    return await response.text();
}
