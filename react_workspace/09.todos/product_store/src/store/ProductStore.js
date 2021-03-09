import PRODUCTS from "../Product";
import { action, makeObservable, observable } from "mobx";
class ProductStore {
  @observable products = PRODUCTS;
  @observable filterText = "";
  @observable inStockOnly = false;

  constructor() {
    makeObservable(this);
  }

  @action
  changeText = newText => {
    this.filterText = newText;
  };

  @action
  changeCheck = newCheck => {
    this.inStockOnly = newCheck;
  };
}

export default new ProductStore();
