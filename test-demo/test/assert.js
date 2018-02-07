const assert = require('assert');

const { add, mul } = require('../src/math');

// console.log(add(2, 3));

// if (add(2, 3) === 5) {
//     console.log('add(2,3)===5,OK');
// } else {
//     console.log('add(2,3)!==5,error');
// }


assert.equal(add(2,3),5);
