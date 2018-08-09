module.exports = {
    coverage: true,
    threshold: 100,
    reporter: ['console', 'html', 'lcov', 'json'],
    output: [
        'stdout',
        'test/coverage/ccoverage.html',
        'test/coverage/clcov.info',
        'test/coverage/cdata.json'
    ],
    'coverage-exclude': ['server'],
    lint: true
};
