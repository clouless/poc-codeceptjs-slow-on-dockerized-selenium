exports.config = {
    tests: '*.test.js',
    timeout: 40000,
    output: './test-results/',
    helpers: {
        WebDriverIO: {
            url: 'https://local.codeclou.io:4443',
            browser: 'chrome',
            restart: true,
            windowSize: 'maximize',
            timeouts: {
                script: 50000,
                'page load': 50000,
                implicit: 50000,
            },
        },
    },
    bootstrap: false,
    mocha: { },
    name: 'tests',
};
