'use strict';

const expect = require('chai').expect;

Math.__proto__.fe = require('../modules/fe');

const arr = [1,2,3];

describe('Testando produto', () => {
  it('Produto deve ser igual a 6', () => {
    expect(Math.fe.produto(arr)).to.be.equal(6);
  });
});