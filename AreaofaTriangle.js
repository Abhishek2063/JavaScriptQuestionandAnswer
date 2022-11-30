/**
 * Area of a Triangle
Write a function that takes the base and height of a triangle and return its area.

Examples
triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50
Notes
The area of a triangle is: (base * height) / 2
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
 */

/**
 * Test.assertEquals(triArea(3, 2), 3)
Test.assertEquals(triArea(5, 4), 10)
Test.assertEquals(triArea(10, 10), 50)
Test.assertEquals(triArea(0, 60), 0)
Test.assertEquals(triArea(12, 11), 66)
 */

function triArea(base, height) {
	return (base * height) / 2;
}

