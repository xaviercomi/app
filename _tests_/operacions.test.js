
const sum = require('/operacions.test.js/sum');
const rest = require('../rest');
const mult = require('../mult');
const div = require('../div');

testSum('sumar a + b igual c', () => {
    expect(sum(1,2)).toBe(3);
});

testRest('restar a - b igual c', () => {
    expect(rest(2-1)).toBE(1);
});

testMult('multiplicar a * b igual c', () => {
    expect(mult(2*1)).toBE(2);
});

testDiv('restar a - b igual c', () => {
    expect(div(2-1)).toBE(1);
});