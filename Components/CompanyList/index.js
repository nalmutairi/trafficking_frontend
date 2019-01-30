
import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Button, Text, Icon, Container } from "native-base";

// My Slave Stores
import CompanyStore from "../../stores/companyStore";

// My Slave Components
import CompanyItem from "../CompanyList/CompanyItem";

class CompanyList extends Component {
  render() {
    const companies = CompanyStore.companies;
    let ListCompany;
    if (companies) {
      ListCompany = companies.map(company => (
        <CompanyItem company={company} key={company.name} />
      ));
    }
    return (
      <Content>
        <Container>
          <List>{ListCompany}</List>
        </Container>
      </Content>
    );

  }
}

export default observer(CompanyList);
