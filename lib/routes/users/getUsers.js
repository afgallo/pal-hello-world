'use strict';

module.exports = {
    method: 'GET',
    path: '/users',
    options: {
        handler: () => {

            return [
                { id: 1, username: 'John Smith' },
                { id: 2, username: 'Maria Hansen' }
            ];
        }
    }
};
