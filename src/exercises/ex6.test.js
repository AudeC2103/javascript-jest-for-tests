// test 6
// test 6
const { findMax, removeDuplicates, containsValue, sortArray } = require('./ex6');

describe('Ex6 Functions', () => {
  describe('findMax', () => {
    test('should return the maximum value in an array of numbers', () => {
      expect(findMax([1, 2, 3, 4, 5])).toBe(5);
      expect(findMax([-10, -5, 0, 5, 10])).toBe(10);
      expect(findMax([100, 50, 200, 150])).toBe(200);
    });

    test('should return undefined for an empty array or non-array input', () => {
      expect(findMax([])).toBeUndefined();
      expect(findMax('not an array')).toBeUndefined();
      expect(findMax(null)).toBeUndefined();
    });
  });

  describe('removeDuplicates', () => {
    test('should remove duplicate values from an array', () => {
      expect(removeDuplicates([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
      expect(removeDuplicates(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
    });

    test('should return undefined for non-array input', () => {
      expect(removeDuplicates('not an array')).toBeUndefined();
      expect(removeDuplicates(null)).toBeUndefined();
    });
  });

  describe('containsValue', () => {
    test('should return true if the array contains the specified value', () => {
      expect(containsValue([1, 2, 3], 2)).toBe(true);
      expect(containsValue(['a', 'b', 'c'], 'b')).toBe(true);
    });

    test('should return false if the array does not contain the specified value', () => {
      expect(containsValue([1, 2, 3], 4)).toBe(false);
      expect(containsValue(['a', 'b', 'c'], 'd')).toBe(false);
    });

    test('should return undefined for non-array input', () => {
      expect(containsValue('not an array', 2)).toBeUndefined();
      expect(containsValue(null, 2)).toBeUndefined();
    });
  });

  describe('sortArray', () => {
    test('should sort an array of numbers in ascending order', () => {
      expect(sortArray([5, 3, 8, 1, 2])).toEqual([1, 2, 3, 5, 8]);
      expect(sortArray([-2, -5, 0, 5, 2])).toEqual([-5, -2, 0, 2, 5]);
    });

    test('should return undefined for non-array input', () => {
      expect(sortArray('not an array')).toBeUndefined();
      expect(sortArray(null)).toBeUndefined();
    });
  });
});
