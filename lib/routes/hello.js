'use strict';

module.exports = {
    method: 'GET',
    path: '/hello',
    options: {
        handler: (request, h) => {

            return { message: 'Hello World!' };
        }
    }
};
