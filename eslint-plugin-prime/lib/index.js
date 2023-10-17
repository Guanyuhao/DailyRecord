/**
 * @fileoverview prime eslint
 * @author eslint-plugin-prime
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const rules = requireIndex(__dirname + "/rules");

// import all rules in lib/rules
module.exports = {
    rules,
    configs: {
        // extends: ['plugin:prime/recommended']
        recommended: {
            plugins: ['prime'],
            rules: {
                'eslint/eslint-lodash-introduce-on-demand': ['error'],
            }
        }
    }
}



