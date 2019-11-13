class ApiController {

    /**
     * 
     * @param {Object} app 
     * @param {Object} urlencodedParser 
     * @param {Object} todos 
     * @param {ApiService} service 
     */
    constructor(app, urlencodedParser, todos, service) {
        this.app = app;
        this.urlencodedParser = urlencodedParser;
        this.todos = todos;
        this.service = service;
    }

    /**
     * @description runs and sets up all the endpoints for the api.
     * 
     * @public
     */
    run() {
        /**
        * @description The to do list and the form are displayed
        */
        this.app.get('/todo', (req, res) => {
            this.service.getTodos( todoList => {
                res.render('todo.ejs', { todoList, clickHandler: "func1();" });
            });
        });

        /**
         * @description Adding an item to the to do list
         */
        this.app.post('/todo/add/', this.urlencodedParser, (req, res) => {
            this.service.addTodo(req, () => {
                res.redirect('/todo');
            });
        });

        /**
         * @description Deletes an item from the to do list
         */
        this.app.get('/todo/delete/:id', (req, res) => {
            this.service.deleteTodo(req, () => {
                res.redirect('/todo');
            });
        });

        /**
         * @description Deletes an item from the to do list
         */
        this.app.post('/todo/update/:id', this.urlencodedParser, (req, res) => {
            this.service.updateTodo(req, () => {
                res.redirect('/todo');
            });
        });
    };
}

module.exports = ApiController;