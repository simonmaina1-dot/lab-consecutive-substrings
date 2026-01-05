const readline = require('readline');
const consecutiveSubstrings = require('./consecutive_substrings.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
