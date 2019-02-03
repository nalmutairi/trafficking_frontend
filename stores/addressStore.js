import { decorate, observable, action, computed } from "mobx";
import axios from "axios";

// //authStore
import authStore from "../stores/authStore";

const instance = axios.create({
  baseURL: "http://104.248.38.127/"
});

class AddressStore {
  constructor() {
    this.address = null;
  }

  createAddress(userInput) {
    instance
      .post("/address/create/", userInput)
      .then(res => res.data)
      .then(() => alert("address created"))
      .catch(err => console.error(err));
  }
}
decorate(AddressStore, {
  address: observable
});
export default new AddressStore();
