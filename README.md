# webpack-css-module-boilerplate
Boilerplate project to compile CSS Modules using Webpack.


## Usage
- Clone or download a copy of the repo
- `npm install` dependencies
- `npm run dev` for local development, open browser to `localhost:8080`
- `npm run build` for bundle and css creation, placed in to `/dist`


## What's not included
What is or how to use [Webpack](https://webpack.github.io/docs/) or [PostCSS](http://postcss.org/). If you're a read the manual type of person take some time to follow the links and get famaliar with the tools. If you're a jump in and start doing things person follow the usage instructions above, checkout the plugins below and start doing things.

## What is included
There are some sample files in the `/src` directory to get you started building your application. The examples are not using any particular flavor of JavaScript framework for the module creation leaving you to decide what you want to use. 

###PostCSS
The following starter pack of plugins are added that closely mimic features of SASS and beyond with examples of how to use the features.

- [`postcss-import`](https://github.com/postcss/postcss-import) and [`postcss-url`](https://github.com/postcss/postcss-url) they work together to enable `@import` statements and allow them to look inside node modules for main css files
- [`postcss-assets`](https://github.com/assetsjs/postcss-assets) asset manager for relative urls
- [`precss`](https://github.com/jonathantneal/precss) lets you write SASS like variables, mixins, extends, property lookup, conditionals and loops 
- [`postcss-calc`](https://github.com/postcss/postcss-calc) does what you'd expect, 
- [`postcss-functions`](https://github.com/andyjansson/postcss-functions) for exposing JavaScript functions to generate CSS (my personal favorite)
- [`postcss-utilities`](https://github.com/ismamz/postcss-utilities) a utility library of common mixins
- [`postcss-hexrgba`](https://github.com/seaneking/postcss-hexrgba) allows hex to be passed into rgba() 
- [`postcss-cssnext`](https://github.com/MoOx/postcss-cssnext) autoprefixer, custom media queries, color functions, pseudo selectors and more CSS3 features that aren't supported by browsers, it is what babel is for es6 allowing you to write the latest syntax now
- [`postcss-sorting`](https://github.com/hudochenkov/postcss-sorting) sort your rules with specified order
- [`postcss-browser-reporter`](https://github.com/postcss/postcss-browser-reporter) to output errors to browser
