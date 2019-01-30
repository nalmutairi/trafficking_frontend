import axios from "axios";
import { decorate, observable } from "mobx";

class CompanyStore {
  constructor() {
    this.companies = [];
    this.company = null;
    this.loading = true;
    this.fetchAllCompanies();
  }

  fetchAllCompanies() {
    axios
      .get("http://127.0.0.1:8000/companylist/")
      .then(res => res.data)
      .then(companies => {
        this.companies = companies;
        // console.log(this.companies);
      })
      .catch(err => console.error(err));
  }

  fetchACompany(companyid) {
    axios
      .get("http://127.0.0.1:8000/companydetail/" + companyid + "?format=json")
      .then(res => res.data)
      .then(company => {
        this.company = company;
        this.loading = false;
      })
      // .then(day => {
      //   const company = this.state.company;
      //   let DayList;
      //
      //   company.days.map(day => {
      //     console.log(day);
      //     this.setState({ day: day });
      //   });
      // })

      .catch(err => console.error(err));
  }
}

decorate(CompanyStore, {
  companies: observable,
  company: observable,
  loading: observable
});

export default new CompanyStore();
