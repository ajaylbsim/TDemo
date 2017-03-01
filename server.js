
var express  = require('express');
    var app      = express();                               // create our app w/ express
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4



    	global.__appBaseDir = __dirname;
    	global.__app = app;
    app.use(express.static(__dirname + '/static'));                 // set the static files location /public/img will be /img for users
 /*   app.use(morgan('dev')); */                                        // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

    require("./config/URLMapping");
    app.listen(3001);

    console.log("App listening on port 3001");
