function TodoManage({ container, completeAll, deleteAll }) {
  const div = document.createElement('div');

  div.className = 'manage-btns';

  div.innerHTML = `
    <button class="all-complete-btn">전체 완료</button>
    <button class="all-delete-btn">전체 삭제</button>
  `;

  div.querySelector('.all-complete-btn').addEventListener('click', () => {
    completeAll();
  });

  div.querySelector('.all-delete-btn').addEventListener('click', () => {
    deleteAll();
  });

  container.appendChild(div);
}
export default TodoManage;
