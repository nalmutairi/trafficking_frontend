import React, { Component } from "react";

import { observer } from "mobx-react";

import { Text, List } from "native-base";

import AppointmentStore from "../../stores/appointmentStore";

import AppointmentItem from "./AppointmentItem";

class AppointmentList extends Component {
  render() {
    const list = AppointmentStore.appointments;
    let content;
    if (list) {
      content = list.map((item, index) => (
        <AppointmentItem appointment={item} key={index} />
      ));
    }
    return <List>{content}</List>;
  }
}

export default observer(AppointmentList);
