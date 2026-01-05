/**
 * consecutiveSubstrings.js
 * 
 * PROBLEM:
 * Generate all consecutive substrings from a given string. A consecutive substring
 * is a portion of the string where characters appear in their original order
 * without skipping any characters.
 * 
 * SCALABLE ELEMENT:
 * The length of the input string (n). As n increases, the number of substrings
 * grows quadratically (n(n+1)/2 total substrings).
 * 
 * ALGORITHM CHOICE:
 * Nested Loop Approach - We treat the string like an array and iterate through
 * all possible starting and ending positions to extract consecutive substrings.
 * 
 * WHY THIS APPROACH:
 * 1. Simple and intuitive - directly models the problem requirements
 * 2. Guaranteed to find all consecutive substrings
 * 3. Maintains the correct order of appearance
 * 4. Each substring is generated exactly once
 * 
 * @param {string} str - The input string to process
 * @returns {string[]} - Array of all consecutive substrings in order of appearance
 * 
 * TIME COMPLEXITY: O(n²) where n is the string length
 * - Outer loop: n iterations
 * - Inner loop: up to n iterations for each outer loop iteration
 * - Total operations: n(n+1)/2 = O(n²)
 * 
 * SPACE COMPLEXITY: O(n²) for storing all substrings
 * - Result array contains n(n+1)/2 substrings
 * - Each substring requires O(k) space where k is substring length
 * - Total space is proportional to the sum of all substring lengths
 */
function consecutiveSubstrings(str) {
  // Initialize result array to store all consecutive substrings
  const result = [];
  
  // Handle empty string edge case - return empty array immediately
  // This ensures we don't enter the loops unnecessarily
  if (str.length === 0) {
    return result;
  }
  
  // OUTER LOOP: Select starting index (i)
  // This determines where each substring begins
  // Runs n times where n is the string length
  for (let i = 0; i < str.length; i++) {
    
    // INNER LOOP: Select ending index (j)
    // This extends the substring from starting index i
    // j starts at i+1 (minimum 1 character substring) 
    // j goes up to str.length (inclusive) to include full substring
    // For each starting position i, inner loop runs (n-i) times
    for (let j = i + 1; j <= str.length; j++) {
      
      // Extract consecutive substring using slice
      // slice(i, j) returns characters from index i (inclusive) to j (exclusive)
      // This automatically handles consecutive character requirement
      // since we're always taking adjacent characters
      result.push(str.slice(i, j));
      
    }
  }
  
  // Return all consecutive substrings in order of appearance
  // Order is preserved because:
  // 1. Outer loop processes starting indices in increasing order
  // 2. Inner loop processes ending indices in increasing order
  return result;
}

// Export the function for use in tests and other modules
module.exports = consecutiveSubstrings;

