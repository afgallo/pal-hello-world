'use strict';

module.exports = {
    method: 'GET',
    path: '/hello',
    options: {
        handler: () => {

            return { message: 'Hello World!' };
        }
    }
};
