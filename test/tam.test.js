'use strict';

const expect = require('chai').expect;

Math.__proto__.fe = require('../modules/fe');

const arr = [1,2,3,4,5,6,7,8,9];

describe('Testando tam', () => {
  let _returns = [];
  it('Tamanho do array deve ser igual a '+arr.length, () => {
    expect(Math.fe.tam(arr)).to.be.equal(arr.length);
  });
});