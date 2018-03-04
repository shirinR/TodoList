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
    //  this.todos[index] = value;
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
        // console.log("completedTodos *** ", completedTodos);
      }
    }

    // Case 1: if everything is true, make those false
    if (completedTodos === totalTodos) {
      for (var j = 0; j < totalTodos; j++) {
        this.todos[j].completed = false;
        //   console.log("completedTodos false //// ", this.todos[j].completed);
      }
      // Case 2: otherwise, make everything true
    } else {
      for (var s = 0; s < totalTodos; s++) {
        // console.log("completedTodos before true //// ", this.todos[s].completed);
        this.todos[s].completed = true;
        //   console.log("completedTodos true //// ", this.todos[s].completed);
      }
    }

    this.displayTodo();
  }
};

var handler ={
  displayTodosButton: function() {
    todoList.displayTodo();
  //  console.log('displayButton');
  },
  addTodosButton: function(){
    var userInput = document.getElementById('userInput');
    todoList.addTodo(userInput.value);
  //  console.log("addTodoButton");
    userInput.value ="";
  },
  changeTodosButton: function(){
    var indexInput = document.getElementById('indexInput');
    var todoTextInput = document.getElementById('todoTextInput');
    todoList.changeTodo(indexInput.valueAsNumber, todoTextInput.value);
    // console.log("changeTodosButton");
    indexInput.value = "";
    todoTextInput.value="";
  },
  deleteTodosButton:function(){
    var deletePostionInput = document.getElementById('deletePostionInput');
    todoList.deleteTodo(deletePostionInput.valueAsNumber);
    // console.log("Delete Todos");
    deletePostionInput.value ="";
  },
  toggoleCompletedButton: function(){
    var toggleCompleteInput = document.getElementById('toggleCompleteInput');
    todoList.toggoleCompleted(toggleCompleteInput.valueAsNumber);
    toggleCompleteInput.value ="";
  },
  toggleAllButton: function() {
    todoList.toggoleAll();
   // console.log('toggleAllButton');
  }
};
