import React, { Component } from "react";

import { Text, Content } from "native-base";

import SlotList from "../SlotList";
class DayItem extends Component {
  render() {
    const { day } = this.props;

    return (
      <Content>
        <Text>{day.name}</Text>
        <SlotList day={day} key={day.id} />
      </Content>
    );
  }
}

export default DayItem;
