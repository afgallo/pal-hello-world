'use strict';

// Load modules

const Code = require('code');
const Lab = require('lab');
const Server = require('../../../server');

// Test shortcuts

const { describe, it } = exports.lab = Lab.script();
const { expect } = Code;

describe('Users Route', () => {

    it('responds with array of users', async () => {

        const server = await Server.deployment();
        const response = await server.inject('/users');

        expect(response.statusCode).to.equal(200);
        expect(response.result).to.exist().and.to.be.an.array();
        expect(response.result).to.be.equal([
            { id: 1, username: 'John Smith' },
            { id: 2, username: 'Maria Hansen' }
        ]);
    });
});
