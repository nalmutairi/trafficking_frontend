import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Button, Text, Icon } from "native-base";

// Store
import CompanyStore from "../../stores/companyStore";

class CompanyList extends Component {
  render() {
    const companies = CompanyStore.companies;
    let ListCompany;
    if (companies) {
      ListCompany = companies.map(company => company.name);
    }
    return (
      <Content>
        <List>{ListCompany}</List>
      </Content>
    );
  }
}

export default CompanyList;
