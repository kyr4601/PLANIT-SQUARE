function TodoList({ container, state, toggleTodo, removeTodo, selectTodo }) {
  const ul = document.createElement('ul');
  container.appendChild(ul);

  if (state.todos.length === 0) return;

  state.todos.forEach((todo) => {
    const li = document.createElement('li');

    const checked = todo.id === state.editingId ? 'checked' : '';
    const completed = todo.isCompleted ? 'class="completed"' : '';
    const completedIcon = todo.isCompleted
      ? `<img src="src/images/check.svg" alt="check" />`
      : '';

    li.innerHTML = `
        <input type="checkbox" ${checked}/>
        <span ${completed}>${todo.name}</span>
        <div class="icons">
          <div>${completedIcon}</div>
          <div class="delete-btn">
            <img src="src/images/delete.svg" alt="delete" />
          </div>
        </div>
      `;
    // 할 일 완료 처리
    li.querySelector('span').addEventListener('click', () => {
      toggleTodo(todo.id);
    });
    // 할 일 삭제 처리
    li.querySelector('.delete-btn').addEventListener('click', () => {
      removeTodo(todo.id);
    });
    // 할 일 수정을 위한 개별 선택 처리
    li.querySelector('input').addEventListener('change', () => {
      if (state.editingId === todo.id) {
        selectTodo(null);
      } else {
        selectTodo(todo.id);
      }
    });
    ul.appendChild(li);
  });
}

export default TodoList;
