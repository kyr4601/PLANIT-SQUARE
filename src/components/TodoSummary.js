function TodoSummary({ container, todos }) {
  const div = document.createElement('div');

  div.className = 'summary';

  div.innerHTML = `
    <span>${todos.length}개 중 ${
    todos.filter((todo) => todo.isCompleted).length
  }개의 할 일을 완료했어요</span>
  `;
  container.appendChild(div);
}
export default TodoSummary;
