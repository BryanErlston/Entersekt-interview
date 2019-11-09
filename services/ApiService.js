class ApiService {

    constructor(todolist) {
        this.todolist = todolist;
     }

    /**
     * @description This method will add the requested todo to the list of todos.
     * 
     * @memberOf {ApiService}
     * 
     * @param {Object} request 
     */
    addTodo(request) {
        if (request.body.newtodo != '') {
            this.todolist.push(request.body.newtodo);
        }
    }

    /**
     * @description This method will delete or 'remove' the todo from your list of todos.
     * 
     * @memberOf {ApiService}
     * 
     * @param {Object} request 
     */
    deleteTodo(request) {
        if (request.params.id != '') {
            this.todolist.splice(request.params.id, 1);
        }
    }
}

module.exports = ApiService;