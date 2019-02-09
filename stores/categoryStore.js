import axios from "axios";
import { decorate, observable } from "mobx";

const instance = axios.create({
  baseURL: "http://104.248.38.127/"
  // baseURL: "http:127.0.0.1:8000/"
});

class CategoryStore {
  constructor() {
    this.categories = [];
    this.category = null;
    this.loading = true;
    this.fetchAllCategories();
  }

  fetchAllCategories() {
    instance
      .get("category/list/")
      .then(res => res.data)
      .then(categories => {
        this.categories = categories;
        // console.log(this.categories);
      })
      .catch(err => console.error(err));
  }
}

decorate(CategoryStore, {
  categories: observable,
  category: observable,
  loading: observable
});

export default new CategoryStore();
