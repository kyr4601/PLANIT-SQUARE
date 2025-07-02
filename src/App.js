import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import TodoSummary from './components/TodoSummary.js';
import TodoManage from './components/TodoManage.js';
import loadStorage from './utils/loadStorage.js';
import saveStorage from './utils/saveStorage.js';

function App() {
  const $todoList = document.querySelector('#todo-list');

  this.state = {
    todos: [],
    editingId: null,
  };

  //초기화
  this.init = () => {
    this.state.todos = loadStorage();
    this.render();
  };

  //상태 변경
  this.setState = (nextState) => {
    this.state = nextState;
    saveStorage(this.state.todos);
    this.render();
  };

  //렌더링
  this.render = () => {
    $todoList.innerHTML = '';

    TodoInput({
      container: $todoList,
      state: this.state,
      addTodo: (todo) => {
        const newTodos = [
          ...this.state.todos,
          { id: Date.now() + Math.random(), name: todo, isCompleted: false },
        ];
        this.setState({ ...this.state, todos: newTodos, editingId: null });
      },
      editTodo: (todo) => {
        const todos = [...this.state.todos];
        const editingTodo = todos.find((t) => t.id === this.state.editingId);
        if (editingTodo) {
          editingTodo.name = todo;
        }
        this.setState({ ...this.state, todos, editingId: null });
      },
    });

    TodoSummary({
      container: $todoList,
      todos: this.state.todos,
    });

    TodoManage({
      container: $todoList,
      completeAll: () => {
        this.setState({
          ...this.state,
          todos: this.state.todos.map((todo) => ({
            ...todo,
            isCompleted: true,
          })),
        });
      },
      deleteAll: () => {
        this.setState({
          ...this.state,
          todos: [],
        });
      },
    });

    TodoList({
      container: $todoList,
      state: this.state,
      toggleTodo: (id) => {
        this.setState({
          ...this.state,
          todos: this.state.todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          ),
        });
      },
      removeTodo: (id) => {
        this.setState({
          ...this.state,
          todos: this.state.todos.filter((todo) => todo.id !== id),
          editingId: null,
        });
      },
      selectTodo: (id) => {
        this.setState({ ...this.state, editingId: id });
      },
    });
  };

  this.init();
}
export default App;
