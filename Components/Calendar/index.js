import React, { Component } from "react";
import { observer } from "mobx";

import { Content, List } from "native-base";

import DayTime from "./Daytime";

import appointmentStore from "../../stores/appointmentStore";

class Calendar extends Component {
  render() {
    const days = appointmentStore.days;
    let dayList;

    if (days) {
      dayList = days.map(day => {
        <DayItem day={day} key={day.id} />;
      });
    }

    return;
    <Content>
      <List>{dayList}</List>
    </Content>;
  }
}

export default observer(Calendar);
