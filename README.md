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

## Configure ESLint



## Configure Prettier
