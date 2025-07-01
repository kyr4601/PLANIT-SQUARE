function TodoInput({ container, addTodo, editTodo, state }) {
  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" placeholder="할 일을 입력하세요." />
    <button>추가</button>
  `;
  container.appendChild(form);

  const input = form.querySelector('input');
  const button = form.querySelector('button');

  if (state.editingId !== null) {
    const selected = state.todos.find((todo) => todo.id === state.editingId);
    if (selected) {
      input.value = selected.name;
      input.readOnly = selected.isCompleted;
      button.textContent = '수정';
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    if (value.trim() === '') return;

    if (state.editingId !== null) {
      editTodo(value);
    } else {
      addTodo(value);
    }

    input.value = '';
  });
}
export default TodoInput;
