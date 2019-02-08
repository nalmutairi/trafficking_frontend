import React, { Component } from "React";

import { observer } from "mobx-react";
import { List, Text } from "native-base";

import { ScrollView, View } from "react-native";

import CompanyItem from "./CompanyItem";

import CompanyStore from "../../stores/companyStore";

class CompanyList extends Component {
  render() {
    const companies = CompanyStore.companies;
    let filtered = this.props.navigation.getParam("category");
    let CompanyList;
    if (companies) {
      //-------------- filtered items from category list ----------------------
      if (filtered) {
        CompaniesFiltered = companies.filter(company => {
          return company.category === filtered;
        });
        CompanyList = CompaniesFiltered.map(company => (
          <CompanyItem company={company} key={company.name} />
        ));
      }
      // -------------- end of filtered items from category list ---------------
      else {
        CompanyList = companies.map(company => (
          <CompanyItem company={company} key={company.name} />
        ));
      }
    }

    return (
      <ScrollView>
        <List>{CompanyList}</List>
      </ScrollView>
    );
  }
}

export default observer(CompanyList);
