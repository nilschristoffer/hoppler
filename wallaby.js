"use strict"

var compilerOptions = require('./tsconfig.json')
compilerOptions.module = 'CommonJs'
compilerOptions.jsx = 'react'

module.exports = function (wallaby) {
    return {
        files: [
            "src/**/*.tsx",
            "src/**/*.ts",
            "!src/**/*test.tsx",
            "!src/**/*test.ts",
            "package.json",
            "config/**/*.js",
            "src/**/*.scss",
            "src/**/*.svg",
            { pattern: 'src/**/*.jpg', load: false },
            { pattern: 'src/**/*.png', load: false },
            { pattern: 'src/**/*.jpeg', load: false },
        ],
        tests: [
            "src/**/*test.tsx",
            "src/**/*test.ts"
        ],
        env: {
            type: "node",
            runner: "node"
        },
        compilers: {
            '**/*.ts?(x)': wallaby.compilers.typeScript(compilerOptions)
        },
        testFramework: "jest",
        debug: true,
        bootstrap: function (wallaby) {
            wallaby.testFramework.configure(require("./package.json").jest);
        }
    };
};
