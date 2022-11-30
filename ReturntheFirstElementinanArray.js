/**
 * Return the First Element in an Array
Create a function that takes an array containing only numbers and return the first element.

Examples
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500
Notes
The first element in an array always has an index of 0.
 */

/**
 * test cases
 * Test.assertEquals(getFirstValue([1, 2, 3]), 1)
Test.assertEquals(getFirstValue([80, 5, 100]), 80)
Test.assertEquals(getFirstValue([-500, 0, 50]), -500)
Test.assertEquals(getFirstValue([5, 2, 3]), 5)
Test.assertEquals(getFirstValue([75675, 5, 100]), 75675)
Test.assertEquals(getFirstValue([-52320, 0, 50]), -52320)
 */


function getFirstValue(arr) {
	let firstElementOfArray = arr[0]
	return firstElementOfArray;
}

function getFirstValue(arr) {
	return arr.shift();
}

var getFirstValue = arr => Array.isArray(arr) ? arr[0] : "error";
