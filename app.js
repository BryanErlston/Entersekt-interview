const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const ApiController = require('./controllers/apiController');
const ApiService = require('./services/ApiService');

class App {

    constructor() {
        this.express = express();
        this.controller = new ApiController(this.express, urlencodedParser, [], new ApiService([]));
    }

    main() {
        this.controller.run();

        this.express.use(function (req, res, next) {
            res.redirect('/todo');
        });

        this.express.listen(8080);
    }
}

let appMain = new App();
appMain.main();
