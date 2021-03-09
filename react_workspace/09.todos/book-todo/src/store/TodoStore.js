import { makeObservable, action, observable } from "mobx";

class TodoStore {
  @observable todos = [];
  @observable todo = { id: "", title: "" };

  constructor() {
    makeObservable(this);
  }

  @action
  setTodoProp(name, value) {
    this.todo = {
      ...this.todo, // 원래 데이터는 그대로 있고
      [name]: value, // name의 값만 value로 바뀐다.
    };
  }

  @action
  addTodo() {
    this.todos = this.todos.concat(this.todo);
  }

  @action
  removeTodo() {
    this.todos = this.todos.filter(element => element.id !== this.todo.id);
    this.todo = {};
  }

  @action
  modifyTodo() {
    this.todos = this.todos.map(element =>
      element.id === this.todo.id ? this.todo : element
    );
    this.todo = {};
  }

  @action
  selectTodo(id) {
    this.todo = this.todos.find(element => element.id === id);
  }

  // @computed
  // get getTodo(){
  //     return this.todo ? this.todo : {};
  // }

  // @computed
  // get getTodos(){
  //     return this.todos ? this.todos.slice() : []; //slice() 원래의 배열을 copy하여 리턴함. (원래는 일부인데 () 비워주면 전체를 복사함.)
  // }
}

export default new TodoStore(); // 싱글턴
