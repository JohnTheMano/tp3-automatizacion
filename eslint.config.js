const js = require("@eslint/js");

module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            globals: {
                require: "readonly",
                module: "readonly",
                test: "readonly",
                expect: "readonly",
                describe: "readonly"
            }
        }
    },
    js.configs.recommended
];
