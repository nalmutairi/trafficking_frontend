import axios from "axios";
import { decorate, observable } from "mobx";

class CompanyStore {
  constructor() {
    this.companies = [];
    this.company = null;
    this.loading = true;
    this.slot = null;
    this.fetchAllCompanies();
  }

  fetchAllCompanies() {
    axios
      .get("http://104.248.38.127/company/list/")
      .then(res => res.data)
      .then(companies => {
        this.companies = companies;
        // console.log(this.companies);
      })
      .catch(err => console.error(err));
  }
}

decorate(CompanyStore, {
  companies: observable,
  company: observable,
  loading: observable,
  slot: observable
});

export default new CompanyStore();
