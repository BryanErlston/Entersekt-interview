class ApiController {

    constructor(app, urlencodedParser, todolist, service) {
        this.app = app;
        this.urlencodedParser = urlencodedParser;
        this.todolist = todolist;
        this.service = service;
    }

    run() {

        

        /**
        * @description The to do list and the form are displayed
        */
        this.app.get('/todo', (req, res) => {
            let todolist = this.todolist;

            res.render('todo.ejs', { todolist, clickHandler: "func1();" });
        });

        /**
         * @description Adding an item to the to do list
         */
        this.app.post('/todo/add/', this.urlencodedParser, (req, res) => {
            this.service.addTodo(req);

            res.redirect('/todo');
        });

        /**
         * @description Deletes an item from the to do list
         */
        this.app.get('/todo/delete/:id', (req) => {
            this.service.deleteTodo(req, res);

            res.redirect('/todo');
        });
    };
}

module.exports = ApiController;