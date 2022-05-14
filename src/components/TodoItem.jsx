class TodoItem {
  static lastId = 0;

  constructor(text) {
    this.id = TodoItem.lastId++;
    this.text = text;
    this.done = false;
  }
}

export default TodoItem;
