import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import loadStorage from './utils/loadStorage.js';
import saveStorage from './utils/saveStorage.js';

function App() {
  const app = document.querySelector('#app');

  this.state = {
    todos: [],
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
    app.innerHTML = '';

    TodoInput({
      container: app,
      addTodo: (todo) => {
        const newTodos = [
          ...this.state.todos,
          { name: todo, isCompleted: false },
        ];
        this.setState({ ...this.state, todos: newTodos });
      },
    });
    TodoList({ container: app, state: this.state });
  };

  this.init();
}
export default App;
