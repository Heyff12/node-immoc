const { num1, num2 } = require('../src/fn');
// const s1 = Date.now();
// for (let i = 0; i < 10000; i++) {
//     num1('123456');
// }
// const e1 = Date.now();
// console.log(e1 - s1);

// const s2 = Date.now();
// for (let i = 0; i < 10000; i++) {
//     num2('123456');
// }
// const e2 = Date.now();
// console.log(e2 - s2);

const Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

suite.add('parseInt', () => {
        num1('123456');
    }).add('Number', () => {
        num2('123456');
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
// parseInt x 39,369,428 ops/sec ±12.68% (69 runs sampled)
// Number x 499,586,965 ops/sec ±0.62% (87 runs sampled)
// Fastest is Number



// // add tests
// suite.add('RegExp#test', function() {
//         /o/.test('Hello World!');
//     })
//     .add('String#indexOf', function() {
//         'Hello World!'.indexOf('o') > -1;
//     })
//     .add('String#match', function() {
//         !!'Hello World!'.match(/o/);
//     })
//     // add listeners
//     .on('cycle', function(event) {
//         console.log(String(event.target));
//     })
//     .on('complete', function() {
//         console.log('Fastest is ' + this.filter('fastest').map('name'));
//     })
//     // run async
//     .run({ 'async': true });

// RegExp#test x 17,333,383 ops/sec ±0.69% (84 runs sampled)
// String#indexOf x 502,702,184 ops/sec ±0.31% (87 runs sampled)
// String#match x 11,354,861 ops/sec ±0.85% (84 runs sampled)
// Fastest is String#indexOf