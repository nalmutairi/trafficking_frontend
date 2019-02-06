import { decorate, observable } from "mobx";
import axios from "axios";

// authStore
// import authStore from "../stores/authStore";

const instance = axios.create({
  baseURL: "http://104.248.38.127/"
});

class AddressStore {
  constructor() {
    this.addresses = null;
    this.loading = true;
  }

  fetchAddresses() {
    instance
      .get("/address/list/")
      .then(res => res.data)
      .then(addresses => (this.addresses = addresses))
      .then(() => (this.loading = false))
      // .then(() => console.log("TESTING ADDRESS: ", this.addresses))
      .catch(err => console.log(err));
  }

  createAddress(userInput, navigation) {
    instance
      .post("/address/create/", userInput)
      .then(res => res.data)
      .then(() => alert("address created"))
      .then(() => {
        navigation.replace("CategoryList");
      })
      .catch(err => console.error(err));
  }

  updateAddress(userInput, addressID, navigation) {
    instance
      .put(`address/${addressID}/update/`, userInput)
      .then(res => res.data)
      .then(() => alert("UPDATED"))
      .then(() => {
        navigation.replace("CategoryList");
      })
      .catch(err => console.error(err));
  }
}
decorate(AddressStore, {
  addresses: observable,
  loading: observable
});
export default new AddressStore();
