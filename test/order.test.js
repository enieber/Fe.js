'use strict';

const expect = require('chai').expect;

Math.__proto__.fe = require('../modules/fe');

describe('Testando order', () => {
  let _returns = [];
  it('Array deve ser ordenado do menor para o maior', () => {
    const _in = [9,8,7,3];
    const _base = [9,8,7,3];
    const _return = Math.fe.order(_in);
    const _expect = [3,7,8,9];
    _base.forEach( (el, i) => {
      expect(_return[i]).to.be.equal(_expect[i]);
    })
  });
});