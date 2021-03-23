import Books from "../Books";
import { action, observable, makeObservable } from "mobx";

class BookStore {
  // observer 컴포넌트에서 observerable 데이터 변경시 re-render state 데이터 선언 (수정될 관리 데이터 observable)
  @observable books = Books; // books 목록 초기화
  @observable book = Books[0]; // book 초기화

  constructor() {
    makeObservable(this); // 생성자
  }

  @action // observer 하고 있는 컴포넌트의 event를 통해 호출 - observable 데이터 상태값 변경.
  bookSelect = book => {
    // bind하지 않고 arrow function으로
    this.book = book;
  };
  // @ computed - state 값을 계산해서 리턴
  // @ ...
}

export default new BookStore(); // 싱글턴 object
