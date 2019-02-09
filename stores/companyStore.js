import axios from "axios";
import { decorate, observable } from "mobx";

const instance = axios.create({
  baseURL: "http://104.248.38.127/"
  // baseURL: "http:127.0.0.1:8000/"
});
class CompanyStore {
  constructor() {
    this.companies = [];
    this.company = null;
    this.loading = true;
    this.slot = null;
    this.fetchAllCompanies();
  }

  fetchAllCompanies() {
    const today = new Date();
    instance
      .get("company/list/")
      .then(res => res.data)
      .then(companies => {
        this.companies = companies;
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
