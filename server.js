
var express  = require('express');
    var app      = express();   
    var jwt = require('jsonwebtoken');                            // create our app w/ express
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4
        var bcrypt=require('bcrypt-nodejs');

        var AppBase = require('./custom_modules/AppBase');


        global.__defineGetter__("bcrypt", function () {
            return bcrypt;
        });
        global.__jwt = jwt;
        global.__appBaseDir = __dirname;
        global.__app = app;
        global.__appEnv = process.env.NODE_ENV || "development";
    app.use(express.static(__dirname + '/static'));                 // set the static files location /public/img will be /img for users
 /*   app.use(morgan('dev')); */                                        // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

//Initialize the config. Now the configurations will be available in _config global getter.
AppBase.initConfig({
    postProcess: function (config) {
        //Check if port is defined in environment then set that one.
        config.port = process.env.PORT || config.port;
        //More overrides
        return config;
    }});
var logOnStdOut = _config.logger.stdout.enabled;
AppBase.initLogger(function (message, level) {
    if (logOnStdOut) {
        //Print on console the fully formatted message
        console.log(message.fullyFormattedMessage, level);
    }
});




AppBase.initDomains(function () {

    require("./config/Bootstrap").init();
    AppBase.initServices();
})


require("./config/URLMapping");
app.listen(3001);


console.log("App listening on port 3001");
