'use strict';

// Load modules

const Code = require('code');
const Lab = require('lab');
const Server = require('../../server');

// Test shortcuts

const { describe, it } = exports.lab = Lab.script();
const { expect } = Code;

describe('Hello Route', () => {

    it('says hello', async () => {

        const server = await Server.deployment();
        const response = await server.inject('/hello');

        expect(response.statusCode).to.equal(200);
        expect(response.result).to.exist().and.to.be.an.object();
        expect(response.result.message).to.be.equal('Hello World!');
    });
});
