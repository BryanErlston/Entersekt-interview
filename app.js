const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const ApiController = require('./controllers/apiController');
const ApiService = require('./services/ApiService');
const mongoose = require('mongoose');
const TodoProprties = require('./config/properties');
const Todos = require('./models/Todos');

class App {

    constructor() {
        this.express = express();
        this.controller = new ApiController(this.express, urlencodedParser, Todos, new ApiService([]));
    }

    /**
     * @description Main method for the todo api. Main method is reponsible for 
     *              initilaizing all libraries and services required for the service.
     */
    main() {

        mongoose.connect(TodoProprties.getDbConnection(), { useNewUrlParser: true });

        this.controller.run();

        this.express.use(function (req, res, next) {
            res.redirect('/todo');
        });

        this.express.listen(8080);
    }
}

let appMain = new App();
appMain.main();
