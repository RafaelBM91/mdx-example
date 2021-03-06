module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "no-extra-semi": "error",
        "semi-spacing": "error",
        "typescript/no-unused-vars": "warn",
        "no-unused-vars": "off",
        "no-empty-pattern": "off"
    },
    "settings": {
        "react": {
          "pragma": "React",
          "version": "detect"
        }
    }
};
