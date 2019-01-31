import React, { Component } from "react";
import { List } from "native-base";
import SlotItem from "./SlotItem";

class SlotList extends Component {
  render() {
    const slots = this.props.day.slots;
    let SlotList;
    if (slots) {
      SlotList = slots.map(slot => <SlotItem slot={slot} key={slot.id} />);
    }

    return <List>{SlotList}</List>;
  }
}

export default SlotList;
