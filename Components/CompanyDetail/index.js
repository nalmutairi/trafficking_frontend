import React, { Component } from "react";

import { Content, Text, List } from "native-base";
import { observer } from "mobx-react";
import axios from "axios";

import DayList from "../DayList";
import CompanyStore from "../../stores/companyStore";

class CompanyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: null,
      loading: true,
      companyid: this.props.navigation.getParam("company", {}).id,
      day: []
    };
    this.fetchACompany();
  }

  fetchACompany() {
    axios
      .get("http://104.248.38.127/company/detail/" + this.state.companyid)
      .then(res => res.data)
      .then(company => this.setState({ company: company, loading: false }))
      .catch(err => console.error(err));
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("company", {}).name
  });

  render() {
    console.log(this.state.company);
    if (this.state.loading) {
      return <Content />;
    } else {
      const company = this.state.company;
      console.log("COOOOOOO");
      console.log(company);
      //console.log("erwe " + CompanyStore.day.name);

      return (
        <Content>
          <Text>helef</Text>
          <DayList company={company} />
        </Content>
      );
    }
  }
}

export default observer(CompanyDetail);
