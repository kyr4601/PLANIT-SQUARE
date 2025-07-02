function TodoInput({ container, addTodo, editTodo, state }) {
  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" placeholder="할 일을 입력하세요." />
    <button class="add-button">추가</button>
  `;
  container.appendChild(form);

  const input = form.querySelector('input');
  const button = form.querySelector('button');

  if (state.editingId !== null) {
    const selected = state.todos.find((todo) => todo.id === state.editingId);
    // 선택된 할 일이 있을 때
    if (selected) {
      input.value = selected.name;
      input.readOnly = selected.isCompleted;
      button.textContent = '수정';

      // 완료 상태인 경우 수정 불가능 처리
      if (selected.isCompleted) {
        button.disabled = true;
        button.style.backgroundColor = 'gray';
        input.tabIndex = -1;
        input.style.pointerEvents = 'none';
      } else {
        // 완료 상태가 아닌 경우 포커스 처리
        input.focus();
      }
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
