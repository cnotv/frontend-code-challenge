# frontend-interview-test

> An interview test for Front-End Development job candidates

![Screen](https://raw.githubusercontent.com/mcmakler/frontend-code-challenge/master/assets/fe_test_example_screen.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## Picked tools

### Preprocessor: SCSS
- Clean styles
- Highly mantainibility and scalability
- Easy to track and update using variables, [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) are still not full supported
- Possibility to split style in components (in this case using BEM methodology)

### Framework: Vue.js
- Customizable and safe 1 minute production ready Webpack setup
- Highly mantainibility and scalability
- Provides HTML template (JS literals are used for plugins or extensions, not main project)
- Possibility to define styles within components
- Unit tests integration
- Linters
- State management pattern + library with [Vuex](https://vuex.vuejs.org/en/intro.html)
- Dev tools to inspect components and states