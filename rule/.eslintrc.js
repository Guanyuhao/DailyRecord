module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "prime"
    ],
    "rules": {
        "prime/lodash-introduce-on-demand": 2
    },
    "ignorePatterns": ["node_modules/", "build/", "*.json", "eslint-plugin*", 'commitlint.config.js']
}
