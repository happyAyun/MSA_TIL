import axios from "axios";

class TodoApi {
  URL = "/api/todos/"; // http://IP:8000/api/todos/""

  todoCreate(title) {
    return axios
      .post(this.URL + "create/", { title: `${title}` })
      .then(response => response.data); // resolve
    // .create(()=>{}) // 예외발생 reject
    // .finally(()=>{}); // resolve, reject 모든 경우
  }

  //@param : id=0, title=""
  //@return : todo (todo={id:0,title:""})
  todoUpdate(id, title) {
    return axios
      .put(this.URL + `update/${id}/`, { title: `${title}` })
      .then(response => response.data);
  }

  //@param : id=0
  //@return : "Delete!!"
  todoDelete(id) {
    return axios
      .delete(this.URL + `delete/${id}/`)
      .then(response => response.data);
  }

  todoDetail(id) {
    return axios
      .get(this.URL + `detail/${id}/`)
      .then(response => response.data);
  }

  //@return : todos (todos = [{id:0,title:""}, ....])
  todoList() {
    return axios.get(this.URL).then(response => response.data);
  }
}

export default TodoApi;
