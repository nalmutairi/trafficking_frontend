import React, { Component } from "react";
import { List, Text } from "native-base";
import SlotItem from "./SlotItem";

class SlotList extends Component {
  render() {
    let company = this.props.company;
    let slots = this.props.day[0];
    if (slots) {
      slots = this.props.day[0].slots;
      console.log("SLOOOO", slots);
    }
    let SlotList;
    if (slots) {
      SlotList = slots.map(slot => (
        <SlotItem slot={slot} company={company} key={slot.id} />
      ));
    }
    if (SlotList) {
      return <List>{SlotList}</List>;
    } else {
      return <Text>No slots available at this time</Text>;
    }
  }
}

export default SlotList;
