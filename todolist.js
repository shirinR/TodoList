var todoList = {
  todos: [],

  displayTodo: function() {
    if (this.todos.length === 0) {
      console.log('This TodosList is Empty');
    } else {
      console.log('My Todos >>> ');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodo();
  },
  changeTodo: function(index, todoText) {
    this.todos[index].todoText = todoText;
    this.displayTodo();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodo();
  },
  toggoleCompleted: function(position) {
    var todo = todoList.todos[position];
    todo.completed = !(todo.completed);
    this.displayTodo();
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

    this.displayTodo();
  }
};

var handler ={
  displayTodosButton: function() {
    todoList.displayTodo();
  },
  addTodosButton: function(){
    var userInput = document.getElementById('userInput');
    todoList.addTodo(userInput.value);
    userInput.value ="";
  },
  changeTodosButton: function(){
    var indexInput = document.getElementById('indexInput');
    var todoTextInput = document.getElementById('todoTextInput');
    todoList.changeTodo(indexInput.valueAsNumber, todoTextInput.value);
    indexInput.value = "";
    todoTextInput.value="";
  },
  deleteTodosButton:function(){
    var deletePostionInput = document.getElementById('deletePostionInput');
    todoList.deleteTodo(deletePostionInput.valueAsNumber);
    deletePostionInput.value ="";
  },
  toggoleCompletedButton: function(){
    var toggleCompleteInput = document.getElementById('toggleCompleteInput');
    todoList.toggoleCompleted(toggleCompleteInput.valueAsNumber);
    toggleCompleteInput.value ="";
  },
  toggleAllButton: function() {
    todoList.toggoleAll();
  }
};


var view ={
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for(var i=0; i< todoList.todos.length; i++){
      var todosLi = document.createElement('li');

      var todosTextWithCompletion = '';
      var todo = todoList.todos[i];
      if(todo.completed === true){
        todosLi.textContent ='(x) '+ todoList.todos[i].todoText;
      } else {
        todosLi.textContent ='( ) '+ todoList.todos[i].todoText;
      }

      todosUl.appendChild(todosLi);
    }
  }
};
