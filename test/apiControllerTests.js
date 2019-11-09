const expect = require('chai').expect;
const ApiController = require('../contraollers/apiController');
const sinon = require('sinon');
const app = require('express');

let sut;

describe('api controller tests', function () {
    before(function () {
        
    });
    it('expects true to equal true', function () {
        // Given
        let mockedApp = sinon.mock(app);
        
        // When
        sut(mockedApp);

        // Then

    });
})