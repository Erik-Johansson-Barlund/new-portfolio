module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "browser": true,
                "es6": true,
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
    "parser": "@typescript-eslint/parser",
    root: true,
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "tsconfigRootDir": __dirname,
        "project": "./tsconfig.json"
    },
    "settings": {
        "react": {
            "version": "18.2.2"
        }
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        'react/jsx-indent': [
            'warn',
            2,
            {
              checkAttributes: true,
              indentLogicalExpressions: true,
            },
          ],
    }
}
