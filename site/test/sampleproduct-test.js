const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('../app')

describe('testing the /sample-product route', function() {

    it('should return OK status', function() {
      return request(app)
        .get('/sample-product')
        .then(function(response){
            assert.equal(response.status, 200)
        })
    });

    it('should contain the graphics card product, fetched from database', function() {
      return request(app)
        .get('/sample-product')
        .then(function(response){
            expect(response.text).to.contain('GeForce RTX');
        })
    });

});
