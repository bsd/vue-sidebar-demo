Vue Sidebar
===========

Learning how to use Vue, one sidebar at a time

Installation
-------------

1. Clone the repository, and `cd` into it
1. `npm install`

Running
-------

1. Follow the install instructions
1. `npm run dev` to start a hot-reloading webserver
1. visit `http://localhost:3000`



Details
-------

This demo uses a few technologies neatly thrown together.

**[Nuxt](https://nuxtjs.org/)** is used as the site generator and webserver. We're not using many nuxt-specific things here, it's mostly used for a nicely bundled **[Webpack](https://webpack.js.org/)** configuration. Webpack is compiling the Vue **[Single File Components](https://vuejs.org/v2/guide/single-file-components.html)** (the `.vue` files) automatically, using [vue-loader](https://github.com/vuejs/vue-loader). The javascript is written using **[ES6 syntax](https://devhints.io/es6)** and transformed into "conventional" javascript with [babel-loader](https://github.com/babel/babel-loader). Some [postcss](http://postcss.org/) is automatically included (e.g. **[postcss-cssnext](http://cssnext.io/)**).

The hamburger animation is from [Jonathan Suh](https://jonsuh.com/hamburgers/)