module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": ["plugin:react/recommended", "plugin:storybook/recommended"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": ["react", "@typescript-eslint"],
    "rules": {
      "eol-last": ["error", "always"],
      "quotes": ["error", "single"],
      "no-multiple-empty-lines": ["error", {
        "max": 1,
        "maxEOF": 1,
        "maxBOF": 0
      }],
      "react/display-name": 0,
      "react/prop-types": 0,
      "semi": ["error", "never"]
    }
}