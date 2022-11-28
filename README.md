# How this repo is structured

This project aims to work through the Academind course [React - The Complete Guide](https://learning.oreilly.com/videos/react-the/9781801812603/). Any supporting code files are available through the supplementary [course materials repo](https://github.com/academind/react-complete-guide-code).

For each of the major projects in this course:

- it has been refactored to use Vite + TypeScript (instead of npx + JavaScript).
- there is a branch containing the project for this work

For anything that is common, it should be available in the `master` branch.

<hr>

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

## Edit `package.json`

```json
{
  "name": "react-complete-course",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src/**/*.{ts,tsx}",
    "format": "prettier --write 'src/**/*.{ts,tsx,css,md,json}' --config ./.prettierrc.yml"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.24",
    "@types/react-dom": "^18.0.8",
    "@typescript-eslint/eslint-plugin": "^5.44.0",
    "@typescript-eslint/parser": "^5.44.0",
    "@vitejs/plugin-react": "^2.2.0",
    "eslint": "^8.28.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-import-resolver-typescript": "^3.5.2",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.31.11",
    "eslint-plugin-react-hooks": "^4.6.0",
    "prettier": "^2.8.0",
    "typescript": "^4.6.4",
    "vite": "^3.2.3"
  }
}
```

## Populate `.eslintrc.json`

```json
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
  "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-vars": "error",
    "react/jsx-tag-spacing": "error",
    "camelcase": "error",
    "spaced-comment": "error",
    "no-duplicate-imports": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error"
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
}
```

## Populate `.prettierrc.yml`

```yaml
semi: true
tabWidth: 2
printWidth: 80
singleQuote: true
jsxSingleQuote: true
trailingComma: all
bracketSpacing: true
```

## Introduce `src/globals.d.ts`

This is a TypeScript _declaration file_ - it functions similarly to a header file.

We need to use this to help TypeScript understand modules that are not understood by TypeScript.
For example, _.jpg, _.svg, _.png, and _.module.css.

Here is how it looked at time of writing:

```ts
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}

declare module '*.module.css';
```

## Automatically use ESLint in WebStorm

See the [WebStorm ESLint Configuration page](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_eslint_activate) from JetBrains.

## Auto-apply Prettier on save in WebStorm

See the [WebStorm Prettier Configuration page](https://www.jetbrains.com/help/webstorm/prettier.html) from JetBrains.
