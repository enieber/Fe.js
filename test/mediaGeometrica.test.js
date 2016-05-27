'use strict';

const expect = require('chai').expect;

Math.__proto__.fe = require('../modules/fe');

const arr = [2,3];
const _expect = 2.449489742783178
// console.log('Math.fe.mediaG(arr)', Math.fe.mediaG(arr))
describe('Testando somatorio', () => {
  it('Média geométrica deve ser igual a '+_expect+' para [2,3]', () => {
    expect(Math.fe.mediaG(arr)).to.be.equal(2.449489742783178);
  });
  it('Média geométrica não deve ser igual a 3 para [2,3]', () => {
    expect(Math.fe.mediaG(arr)).to.not.equal(3);
  });
});