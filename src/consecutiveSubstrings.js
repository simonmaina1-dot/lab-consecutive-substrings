/**
 * Generates all consecutive substrings of a given string.
 * 
 * @param {string} str - The input string
 * @returns {string[]} - Array of all consecutive substrings in order of appearance
 * 
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 */
function consecutiveSubstrings(str) {
  const result = [];
  
  // Handle empty string
  if (str.length === 0) {
    return result;
  }
  
  // Outer loop: starting index
  for (let i = 0; i < str.length; i++) {
    // Inner loop: ending index (inclusive)
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  
  return result;
}

module.exports = consecutiveSubstrings;

