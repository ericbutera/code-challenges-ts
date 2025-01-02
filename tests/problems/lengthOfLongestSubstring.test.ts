// pattern: sliding window
// returns the length of the longest substring without repeating characters.
function lengthOfLongestSubstring(s: string): number {
  let left = 0
  let longest = 0
  let exists = new Set<string>()

  for (let right = 0; right < s.length; right++) {
    while (exists.has(s[right])) {
      exists.delete(s[left])
      left++
    }

    let window = right - left + 1
    longest = Math.max(longest, window)
    exists.add(s[right])
  }

  return longest
}

describe('lengthOfLongestSubstring', () => {
  test('example 1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  })

  test('example 2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  })

  test('example 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })

  test('empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0)
  })

  test('single character string', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1)
  })

  test('string with all unique characters', () => {
    expect(lengthOfLongestSubstring('abcdef')).toBe(6)
  })

  test('string with repeating patterns', () => {
    expect(lengthOfLongestSubstring('aabcbde')).toBe(4) // "bcde"
  })
})
