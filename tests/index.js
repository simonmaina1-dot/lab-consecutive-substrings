const readline = require('readline');

/**
 * consecutiveSubstrings - Generates all consecutive substrings of a given string
 * @param {string} str - Input string
 * @returns {string[]} - Array of consecutive substrings
 */
function consecutiveSubstrings(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

// Setup readline interface for interactive input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for input
rl.question('Enter a string to generate consecutive substrings: ', (input) => {
  const substrings = consecutiveSubstrings(input);
  
  if (substrings.length === 0) {
    console.log('No substrings generated (empty input).');
  } else {
    console.log(`Consecutive substrings of "${input}":`);
    console.log(substrings);
  }

  rl.close();
});
