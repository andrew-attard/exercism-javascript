// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let count = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    count += birdsPerDay[i]
  };
  return count;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  // Where i = the index of the birdsPerDay Array, ie.
  // [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]
  let sum = 0;
  /*
    And the starting index = i (7 days * the selected week #)
    If week 1 is chosen, then the starting increment is index [0]
    While the index is less than the total # of days for the chosen week, then
    increment the index by one & sum the value at each of those indexes
  */
  for (let i = 7 * (week-1); i < 7 * week; i++){
    sum += birdsPerDay[i];
  }
  return sum;
}
/*
  For example, if I chose week 3:
  i = 7 * 2 (start at index 14), increase index by 1 until index 21 is
  reached (7 * week.
*/

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i +=2){
    // Start at the first index, and increment by 2 (every other day)
    // Then increase each value at the given index by 1
    birdsPerDay[i] += 1;
  };
  return birdsPerDay;
}
