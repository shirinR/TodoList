var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(index, todoText) {
    this.todos[index].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggoleCompleted: function(position) {
    var todo = todoList.todos[position];
    todo.completed = !(todo.completed);
  },
  toggoleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed Todos.
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed) {
        completedTodos++;
      }
    }

    // Case 1: if everything is true, make those false
    if (completedTodos === totalTodos) {
      for (var j = 0; j < totalTodos; j++) {
        this.todos[j].completed = false;
      }
      // Case 2: otherwise, make everything true
    } else {
      for (var s = 0; s < totalTodos; s++) {
        this.todos[s].completed = true;
      }
    }
  }
};

var handler ={
  addTodosButton: function(){
    var userInput = document.getElementById('userInput');
    todoList.addTodo(userInput.value);
    userInput.value ='';
    view.displayTodos();
  },
  changeTodosButton: function(){
    var indexInput = document.getElementById('indexInput');
    var todoTextInput = document.getElementById('todoTextInput');
    todoList.changeTodo(indexInput.valueAsNumber, todoTextInput.value);
    indexInput.value = '';
    todoTextInput.value='';
    view.displayTodos();
  },
  deleteTodosButton:function(){
    var deletePostionInput = document.getElementById('deletePostionInput');
    todoList.deleteTodo(deletePostionInput.valueAsNumber);
    deletePostionInput.value ='';
    view.displayTodos();
  },
  toggoleCompletedButton: function(){
    var toggleCompleteInput = document.getElementById('toggleCompleteInput');
    todoList.toggoleCompleted(toggleCompleteInput.valueAsNumber);
    toggleCompleteInput.value ='';
    view.displayTodos();
  },
  toggleAllButton: function() {
    todoList.toggoleAll();
    view.displayTodos();
  }
};


var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for(var i=0; i< todoList.todos.length; i++){
      var todosLi = document.createElement('li');
      var todosTextWithCompletion = '';
      var todo = todoList.todos[i];

      if(todo.completed === true){
        todosTextWithCompletion = '(x) '+ todoList.todos[i].todoText;
      } else {
        todosTextWithCompletion = '( ) '+ todoList.todos[i].todoText;
      }

      todosLi.textContent = todosTextWithCompletion;
      todosUl.appendChild(todosLi);
    }
  }
};
