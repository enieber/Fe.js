'use strict';

const expect = require('chai').expect;

Math.__proto__.fe = require('../modules/fe');

const arr = [1,2,3,4];

describe('Testando somatorio', () => {
  it('Somatório deve ser igual a 10', () => {
    expect(Math.fe.soma(arr)).to.be.equal(10);
  });
});