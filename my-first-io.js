// console.log(process.argv)
const fs = require('fs');

const test_string = fs.readFileSync(process.argv[2]).toString();
const array_substring = test_string.split('\n')
console.log(array_substring.length-1)
