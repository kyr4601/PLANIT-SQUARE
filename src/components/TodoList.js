function TodoList({ container, state }) {
  const ul = document.createElement('ul');
  container.appendChild(ul);

  if (state.todos.length > 0) {
    state.todos.forEach((todo, _) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" ${todo.isCompleted ? 'checked' : ''} />
        <span>${todo.name}</span>
        <button>삭제</button>
      `;
      ul.appendChild(li);
    });
  }
}
export default TodoList;
