import React, { Component } from "react";

import { Content, Text, List, Button, Thumbnail } from "native-base";
import { observer } from "mobx-react";
import axios from "axios";

import { Image, Dimensions } from "react-native";

// import { FluidNavigator, Transition } from "react-navigation-fluid-transitions";

import { Calendar, CalendarList } from "react-native-calendars";
import DayList from "../DayList";
import SlotList from "../SlotList";
import CompanyStore from "../../stores/companyStore";

const instance = axios.create({
  baseURL: "http://104.248.38.127/"
  // baseURL: "http:127.0.0.1:8000/"
});

class CompanyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: null,
      loading: true,
      companyid: this.props.navigation.getParam("company", {}).id,
      day: null
    };
    this.fetchACompany();
  }

  fetchACompany() {
    instance
      .get("company/detail/" + this.state.companyid)
      .then(res => res.data)
      .then(company => this.setState({ company: company, loading: false }))
      .catch(err => console.error(err));
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("company", {}).name,
    headerRight: (
      <Button onPress={() => navigation.navigate("AppointmentList")}>
        <Text>CART</Text>
      </Button>
    )
  });

  render() {
    let slotList;
    if (this.state.day) {
      slotList = <SlotList day={this.state.day} key={this.state.day.id} />;
      console.log("hello", slotList);
    }
    console.log(this.state.company);
    if (this.state.loading) {
      return <Content />;
    } else {
      const company = this.state.company;
      // console.log("COOOOOOO");
      // console.log(company);
      //console.log("erwe " + CompanyStore.day.name);

      return (
        <Content>
          {/* <Transition shared={this.state.company.id} appear="scale"> */}
          <Image
            source={{ uri: this.state.company.logo }}
            style={{ width: Dimensions.get("window").width, height: 400 }}
          />
          {/* </Transition> */}
          <Text>{this.state.company.desc}</Text>

          <DayList company={company} />
          <List>{slotList}</List>
        </Content>
      );
    }
  }
}

export default observer(CompanyDetail);
