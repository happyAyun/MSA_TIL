import { makeObservable, action, observable, runInAction } from "mobx";
import TodoApi from "../api/TodoApi";

class TodoStore {
  @observable todos = [];
  @observable todo = { id: "", title: "" };
  @observable Message = "";

  todoApi = new TodoApi();

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
  async addTodo() {
    const result = await this.todoApi.todoCreate(this.todo.title);
    if (result == null) {
      this.message = `${this.todo.title} 일정이 추가되지 않았습니다.`;
    }
    this.todos = this.todos.concat(this.todo); // 어느 순간 데이터가 일치하지 않을 가능성이 있음. (은행 기관에서는 중요)
    // this.todos = this.todoApi.todoList(); // concat 대신에
  }

  @action
  async removeTodo() {
    await this.todoApi.todoDelete(this.todo.id);
    // this.todos = this.todos.filter(element => element.id !== this.todo.id);
    const result = await this.todoApi.todoList();
    runInAction(() => {
      this.todos = result;
    });
    runInAction(() => {
      this.todo = {};
    });
  }

  @action
  async modifyTodo() {
    await this.todoApi.todoUpdate(this.todo.id, this.todo.title);
    // this.todos = this.todos.map(element =>
    //   element.id === this.todo.id ? this.todo : element
    // );
    const result = await this.todoApi.todoList();
    runInAction(() => {
      this.todos = result;
    });
    runInAction(() => {
      this.todo = {};
    });
  }

  @action
  async selectTodo(id) {
    const result = await this.todoApi.todoDetail(id);
    runInAction(() => {
      this.todo = result;
    });
    // this.todo = this.todos.find(element => element.id === id);
  }

  @action
  async selectAll() {
    const result = await this.todoApi.todoList();
    runInAction(() => {
      this.todos = result;
    });
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
