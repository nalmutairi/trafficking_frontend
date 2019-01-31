import React, { Component } from "React";

import { observer } from "mobx-react";
import { List, Text } from "native-base";

import CompanyItem from "./CompanyItem";

import CompanyStore from "../../stores/companyStore";

class CompanyList extends Component {
  render() {
    const companies = CompanyStore.companies;
    let filtered = this.props.navigation.getParam("category");
    let CompanyList;
    if (companies) {
      if (filtered) {
        CompaniesFiltered = companies.filter(company => {
          return company.category === filtered;
        });
        CompanyList = CompaniesFiltered.map(company => (
          <CompanyItem company={company} key={company.name} />
        ));
      } else {
        CompanyList = companies.map(company => (
          <CompanyItem company={company} key={company.name} />
        ));
      }
    }

    return <List>{CompanyList}</List>;
  }
}

export default observer(CompanyList);
