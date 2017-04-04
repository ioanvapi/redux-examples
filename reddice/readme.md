

* node.js nu stie ES6 si trebuie instalat babel-cli ptr a rula ES6 cod: 'npm run server'

    "scripts": {
        "server": "babel-node server/index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      },

* ptr a nu mai restarta server express poate fi instalat 'nodemon' care va restarta server la fiecare modificare fisier din directorul server

    "scripts": {
        "server": "nodemon --watch server --exec babel-node -- server/index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      },


* daca vrei sa servesti codul js client de pe un server express trebuie sa configurezi in server un webpack-dev-middleware,
care va intercepta codul js care trebuie sa ajunga in browser si va folosi webpack.config.js ptr a gasi babel loaders
cu care va 'traduce' ES6 in javascript vanila.

    app.use(webpackMiddleware(webpack(webpackConfig)));


* daca vrei hot reloading trebuie sa folosesti webpack-hot-middleware in express server iar pe client, in index.js, trebuie sa pui:

    if (module.hot) {
      module.hot.accept();
    }


