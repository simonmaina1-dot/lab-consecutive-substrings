# Consecutive Substrings

## Learning Goals

- Practice algorithmic problem solving

## Instructions

Given a string, return all consecutive substrings within that string consisting
of at least one character. Substrings should be returned in the order in which
they appear.

Note than in the string `'abc'`, `'ac'` is not a consecutive substring.

The input string will have a length of 0 or more.

```txt
Input: 'abc'
Output: ['a', 'ab', 'abc', 'b', 'bc', 'c']

Input: 'a'
Output: ['a']
```

## Before you start coding

### 1. Rewrite the problem in your own words

The problem asks us to take any string and extract all possible substrings that appear consecutively within it. A consecutive substring means we take characters that are next to each other without skipping any characters. For example, in "abc", "ab" and "bc" are consecutive substrings, but "ac" is not because it skips "b".

We need to return these substrings in the order they appear in the original string, starting with single characters, then building up to longer substrings, moving from left to right.

### 2. Validate that you understand the problem

Let's verify with examples:
- Input: 'abc'
  - Starting at index 0: 'a', 'ab', 'abc'
  - Starting at index 1: 'b', 'bc'
  - Starting at index 2: 'c'
  - Combined: ['a', 'ab', 'abc', 'b', 'bc', 'c'] ✓

- Input: 'a'
  - Starting at index 0: 'a'
  - Combined: ['a'] ✓

- Input: ''
  - No characters, so no substrings
  - Combined: [] ✓

### 3. Write your own test cases

```javascript
// Test 1: Empty string
consecutiveSubstrings('') // Expected: []

// Test 2: Single character
consecutiveSubstrings('a') // Expected: ['a']

// Test 3: Two characters
consecutiveSubstrings('ab') // Expected: ['a', 'ab', 'b']

// Test 4: Three characters
consecutiveSubstrings('abc') // Expected: ['a', 'ab', 'abc', 'b', 'bc', 'c']

// Test 5: Repeated characters
consecutiveSubstrings('aaa') // Expected: ['a', 'aa', 'aaa', 'a', 'aa', 'a']
```

### 4. Pseudocode

```
FUNCTION consecutiveSubstrings(str)
  result = EMPTY ARRAY
  
  IF str.length EQUALS 0
    RETURN result
  
  FOR i FROM 0 TO str.length - 1
    FOR j FROM i + 1 TO str.length
      substring = str.slice(i, j)
      APPEND substring TO result
    END FOR
  END FOR
  
  RETURN result
END FUNCTION
```

### 5. Code!

See `src/consecutiveSubstrings.js` for the implementation.

### 6. Determine Big(O)

**Time Complexity: O(n²)**

- Outer loop runs n times (where n is string length)
- Inner loop runs up to n times for each outer iteration
- Total iterations: n(n+1)/2 = O(n²)

**Space Complexity: O(n²)**

- We store n(n+1)/2 substrings in the result array
- Each substring requires O(k) space where k is the substring length
- Total space is proportional to the sum of all substring lengths

## How to run your own tests

### JavaScript

1. `cd` into the javascript folder
2. `node <filename>.js`

### Example:
```bash
cd /home/sanchez/module_2/lab-consecutive-substrings
node consecutive_substrings.js
```

## How to run our tests

### JavaScript

1. `cd` into the javascript folder
2. `npm i`
3. `npm test`

### Example:
```bash
cd /home/sanchez/module_2/lab-consecutive-substrings
npm i
npm test
```

