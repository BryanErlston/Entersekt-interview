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
            this.todos.find({}, (err, todoListEntity) => {
                if (err) throw err;

                let todoList = mapEntityToList(todoListEntity);

                res.render('todo.ejs', { todoList, clickHandler: "func1();" });
            });
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

/**
 * @description
 * 
 * @private
 * 
 * @param {Array} todoList 
 */
let mapEntityToList = (todoList) => {
    let list = [];

    todoList.forEach(todo => {
        let newTodo = {};

        newTodo.index = todo._id;
        newTodo.todo = todo.name;

        list.push(newTodo);
    });

    return list;
}

module.exports = ApiController;