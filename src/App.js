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
    editingId: null, // 수정 중인 할 일의 id
  };

  /* 초기화 */
  this.init = () => {
    this.state.todos = loadStorage();
    this.render();
  };

  /* 상태 변경 */
  this.setState = (nextState) => {
    this.state = nextState;
    saveStorage(this.state.todos);
    this.render();
  };

  /* 함수 */

  //할 일 추가 함수
  this.addTodo = (todo) => {
    const newTodos = [
      ...this.state.todos,
      { id: Date.now() + Math.random(), name: todo, isCompleted: false },
    ];
    this.setState({ ...this.state, todos: newTodos, editingId: null });
  };

  //할 일 수정 함수
  this.editTodo = (todo) => {
    const todos = [...this.state.todos];
    const editingTodo = todos.find((t) => t.id === this.state.editingId);
    if (editingTodo) {
      editingTodo.name = todo;
    }
    this.setState({ ...this.state, todos, editingId: null });
  };

  //전체 완료 함수
  this.completeAll = () => {
    const newTodos = this.state.todos.map((todo) => ({
      ...todo,
      isCompleted: true,
    }));
    this.setState({ ...this.state, todos: newTodos });
  };

  //전체 삭제 함수
  this.deleteAll = () => {
    this.setState({ ...this.state, todos: [] });
  };

  //할 일 완료 함수
  this.toggleTodo = (id) => {
    const newTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    this.setState({ ...this.state, todos: newTodos });
  };

  //할 일 삭제 함수
  this.removeTodo = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => todo.id !== id),
      editingId: null,
    });
  };

  //할 일 선택 함수
  this.selectTodo = (id) => {
    this.setState({ ...this.state, editingId: id });
  };

  /* 렌더링 */
  this.render = () => {
    $todoList.innerHTML = '';

    TodoInput({
      container: $todoList,
      state: this.state,
      addTodo: this.addTodo,
      editTodo: this.editTodo,
    });

    TodoSummary({
      container: $todoList,
      todos: this.state.todos,
    });

    TodoManage({
      container: $todoList,
      completeAll: this.completeAll,
      deleteAll: this.deleteAll,
    });

    TodoList({
      container: $todoList,
      state: this.state,
      toggleTodo: this.toggleTodo,
      removeTodo: this.removeTodo,
      selectTodo: this.selectTodo,
    });
  };

  this.init();
}
export default App;
