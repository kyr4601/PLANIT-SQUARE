const saveStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export default saveStorage;
