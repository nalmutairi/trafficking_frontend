import axios from "axios";
import { decorate, observable } from "mobx";

class CompanyStore {
  constructor() {
    this.companylist = [];
    this.fetchAllCompanyList();
  }

  fetchAllCompanyList() {
    axios
      .get("http://104.248.38.127/companylist/")
      .then(res => res.data)
      .then(companylist => {
        this.companylist = companylist;
        console.log(this.companylist);
      })
      .catch(err => console.error(err));
  }
}

decorate(CompanyStore, {
  companylist: observable
});

export default new CompanyStore();
