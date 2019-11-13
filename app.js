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
        this.controller = new ApiController(this.express, urlencodedParser, Todos, new ApiService(Todos));
    }

    /**
     * @description Main method for the todo api. Main method is reponsible for 
     *              initilaizing all libraries and services required for the service.
     */
    main() {

        mongoose.connect(TodoProprties.getDbConnection(), { useNewUrlParser: true });

        this.controller.run();

        this.express.use( (req, res, next) => {
            res.redirect('/todo');
        });

        this.express.listen(process.env.port || 3000);
    }
}

let appMain = new App();
appMain.main();
