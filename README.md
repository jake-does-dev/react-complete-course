# Setup

## Create Vite + React project 
```
yarn create vite
yarn
```

## Install ESLint (syntax + problem finding only)
```
yarn add -D eslint
eslint --init
```
Take the following decisions in the options dialogue that then comes up:
```
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
... plugins info ...
✔ Would you like to install them now? · No
```
Then, run
```
yarn add -D eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
yarn add -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript
```

## Install Prettier (code style)
```
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks
touch .prettierrc.json
```

## Populate .eslintrc.json
```
{
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-vars": "error",
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "^_",
        "argsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_"
      }
    ],
    "camelcase": "error",
    "spaced-comment": "error",
    "no-duplicate-imports": "error"
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
```

## Populate .prettierrc.yml
```
semi: false
tabWidth: 2
printWidth: 160
singleQuote: true
jsxSingleQuote: true
trailingComma: all
bracketSpacing: true
```

## Automatically use ESLint in WebStorm
See the [WebStorm ESLint Configuration page](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_eslint_activate) from JetBrains.

## Auto-apply Prettier on save in WebStorm
See the [WebStorm Prettier Configuration page](https://www.jetbrains.com/help/webstorm/prettier.html) from JetBrains.

