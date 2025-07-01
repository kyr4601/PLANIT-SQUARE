const loadStorage = () => {
  try {
    const savedList = localStorage.getItem('todos');
    return savedList ? JSON.parse(savedList) : [];
  } catch {
    return [];
  }
};

export default loadStorage;
