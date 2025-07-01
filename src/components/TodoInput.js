function TodoInput({ container, addTodo }) {
  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" placeholder="할 일을 입력하세요." />
    <button>추가</button>
  `;
  container.appendChild(form);

  const input = form.querySelector('input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    if (value.trim() === '') return;

    addTodo(value);
    input.value = '';
  });
}
export default TodoInput;
