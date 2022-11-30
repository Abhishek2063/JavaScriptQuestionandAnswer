/**
 * Write a JavaScript program to get the current date.
 * Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */

const date = new Date()
const day = date.getDay()
const month = date.getMonth() + 1
const year = date.getFullYear()
const dateformatone = day + "-" + month + "-" + year
const dateformattwo = day + "/" + month + "/" + year
const dateformatthree = month + "-" + day + "-" + year
const dateformatfour = month + "/" + day + "/" + year
const dateformatfive = year + "/" + month + "/" + day
console.log(date,"date");
console.log(dateformatone,"dateformatone");
console.log(dateformattwo,"dateformattwo");
console.log(dateformatthree,"dateformatthree");
console.log(dateformatfour,"dateformatfour");
console.log(dateformatfive,"dateformatfive");

