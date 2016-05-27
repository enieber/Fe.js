'use strict';

const expect = require('chai').expect;

Math.__proto__.fe = require('../modules/fe');


describe('Testando somatorio', () => {
  it('Média deve ser igual a 4 para [4,4,4,4]', () => {
    const arr = [4,4,4,4];
    expect(Math.fe.mediaA(arr)).to.be.equal(4);
  });
  it('Média não deve ser igual a 4 para [3,4,4,4]', () => {
    const arr = [3,4,4,4];
    expect(Math.fe.mediaA(arr)).to.not.equal(4);
  });
});