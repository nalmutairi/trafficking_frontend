import React, { Component } from "react";

import { Content, Text } from "native-base";
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
  }

  // componentDidMount() {
  //   this.fetchACompany();
  // }
  //
  // componentDidUpdate() {
  //   this.findDays();
  // }
  // fetchACompany() {
  //   axios
  //     .get(
  //       "http://127.0.0.1:8000/companydetail/" +
  //         this.state.companyid +
  //         "?format=json"
  //     )
  //     .then(res => res.data)
  //     .then(company => this.setState({ company: company, loading: false }))
  //     .then(day => {
  //       const company = this.state.company;
  //       let DayList;
  //
  //       company.days.map(day => {
  //         console.log(day);
  //         this.setState({ day: day });
  //       });
  //     })
  //
  //     .catch(err => console.error(err));
  // }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("company", {}).name
  });

  render() {
    if (CompanyStore.loading) {
      return <Content />;
    } else {
      //const company = this.state.company;
      // console.log(company);
      //console.log("erwe " + CompanyStore.day.name);
      return <Text>{CompanyStore.name}</Text>;
    }
  }
}

export default observer(CompanyDetail);
