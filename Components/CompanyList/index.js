import React, { Component } from "React";

import { observer } from "mobx-react";
import {
  List,
  Text,
  Button,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Body,
  Right
} from "native-base";

import { ScrollView, View } from "react-native";

import CompanyItem from "./CompanyItem";

import CompanyStore from "../../stores/companyStore";

class CompanyList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("company", {}).name,
    headerLeft: (
      <Button onPress={() => navigation.goBack()}>
        <Text>CART</Text>
      </Button>
    )
  });

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
      <Content>
        <Header>
          <Left>
            <Button transparent />
          </Left>
          <Body>
            <Title>List</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView style={{ backgroundColor: "rgba(7, 183, 10, 0.03)" }}>
          <List>{CompanyList}</List>
        </ScrollView>
      </Content>
    );
  }
}

export default observer(CompanyList);
