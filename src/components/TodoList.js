function TodoList({ container, state, toggleTodo, removeTodo }) {
  const ul = document.createElement('ul');
  container.appendChild(ul);

  if (state.todos.length > 0) {
    state.todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" />
        <span>${todo.name}</span>
        <button class="complete-btn" style="background:${
          todo.isCompleted ? 'green' : 'gray'
        };color:white;">완료</button>
        <button class="delete-btn">삭제</button>
      `;
      // 할 일 완료 처리
      li.querySelector('span').addEventListener('click', () => {
        toggleTodo(index);
      });
      // 할 일 삭제 처리
      li.querySelector('.delete-btn').addEventListener('click', () => {
        removeTodo(index);
      });
      ul.appendChild(li);
    });
  }
}
export default TodoList;
