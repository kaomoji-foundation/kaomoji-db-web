/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    "root": true,
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript/recommended"
    ],
    "rules": {
        "indent":["error",4],
        "max-len": ["error",{"code": 100}],
        "no-shadow": ["error",{"hoist": "never"}],
        "camelcase": "off",
        "no-undef": 0
    },
    "env": {
        "vue/setup-compiler-macros": true
    }
}
