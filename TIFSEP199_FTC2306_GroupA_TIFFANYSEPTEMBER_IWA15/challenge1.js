const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

const { lists: [[, first]] = [] } = data || {}; // Get the second value of the first list
const { lists: [, [, second]] = [] } = data || {}; // and the second list
const { lists: [, , [, third]] = [] } = data || {}; // Get the third value of the third list

const result = [];

const extractBiggest = () => {
  if (first[first.length - 1] > second[second.length - 1]) {
    // Compare last elements of arrays
    return first.pop(); // Remove and return last element from first array
  }

  if (third[third.length - 1] < second[second.length - 1]) {
    // Compare last elements of arrays
    return second.pop(); // Remove and return last element from second array
  }

  return third.pop(); // Remove and return last element from third array
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
