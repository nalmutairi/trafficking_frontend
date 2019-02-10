import { decorate, observable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://104.248.38.127/"
  // baseURL: "http://127.0.0.1:8000/"
});

class AddressStore {
  constructor() {
    this.addresses = null;
    this.loading = true;
  }

  fetchAddresses() {
    instance
      .get("address/list/")
      .then(res => res.data)
      .then(addresses => (this.addresses = addresses))
      .then(() => (this.loading = false))
      .catch(err => console.log(err));
  }

  createAddress(userInput, navigation) {
    instance
      .post("address/create/", userInput)
      .then(res => res.data)
      .then(() => alert("address created"))
      .then(navigation.navigate("Category"))
      .catch(err => console.error(err));
  }

  updateAddress(userInput, addressID, navigation) {
    console.log(userInput);
    instance
      .put(`address/${addressID}/update/`, userInput)
      .then(res => res.data)
      .then(() => alert("UPDATED"))
      .then(navigation.replace("Category"))
      .catch(err => console.error(err));
  }
}
decorate(AddressStore, {
  addresses: observable,
  loading: observable
});
export default new AddressStore();
