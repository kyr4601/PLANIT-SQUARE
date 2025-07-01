import TodoList from './components/TodoList.js';
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
    app.innerHTML = 'TodoList';
    TodoList();
  };

  this.init();
}
export default App;
