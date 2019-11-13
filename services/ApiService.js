/**
 * @class
 */
class ApiService {

    /**
     * @description 
     * @param {Object} Todos 
     */
    constructor(Todos) {
        this.Todos = Todos;
     }

    /**
     * 
     * @param {Function} callback 
     */
    getTodos(callback) {
        this.Todos.find({}, (err, todoListEntity) => {
            if (err) throw err;

            callback(mapEntityToList(todoListEntity));
        });
    }

    /**
     * @description This method will add the requested todo to the list of Todos.
     * 
     * @memberOf {ApiService}
     * 
     * @param {Object} request 
     */
    addTodo(request, successCallback) {
        if (request.body.newtodo != '') {
            let newTodo = this.Todos({
                name: request.body.newtodo
            });
    
            newTodo.save(err => {
                if(err) throw err; 
                successCallback();
            });
        }
    }

    /**
     * @description This method will delete or 'remove' the todo from your list of Todos.
     * 
     * @memberOf {ApiService}
     * 
     * @param {Object} request 
     */
    deleteTodo(request, successCallback) {
        if (request.params.id != '') {
            this.Todos.findByIdAndRemove(request.params.id, err => {
                if(err) throw err;
                successCallback();
            });
        }
    }

    /**
     * 
     * @param {Object} request 
     * @param {Function} successCallback 
     */
    updateTodo(request, successCallback) {
        if (request.params.id != '') {
            this.Todos.findByIdAndUpdate(request.params.id, {
                name: request.body.updatedTodo
            }, (err) => {
                if(err) throw err;
                successCallback();
            });
        }
    }
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

        newTodo.id = todo._id;
        newTodo.name = todo.name;

        list.push(newTodo);
    });

    return list;
}

module.exports = ApiService;