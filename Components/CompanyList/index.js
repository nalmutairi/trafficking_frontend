import React, { Component } from "React";

import { observer } from "mobx-react";
import { List, Text } from "native-base";

import CompanyItem from "./CompanyItem";

import CompanyStore from "../../stores/companyStore";

class CompanyList extends Component {
  render() {
    console.log(CompanyStore.companies);
    const companies = CompanyStore.companies;
    let CompanyList;

    if (companies) {
      CompanyList = companies.map(company => (
        <CompanyItem company={company} key={company.name} />
      ));
    }

    return <List>{CompanyList}</List>;
  }
}

export default observer(CompanyList);
