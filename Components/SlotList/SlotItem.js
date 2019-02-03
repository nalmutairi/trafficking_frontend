import React, { Component } from "react";
import { observer } from "mobx-react";
import { Text, Content, Button } from "native-base";

import AppointmentStore from "../../stores/appointmentStore";

class SlotItem extends Component {
  handlePress(slot) {
    AppointmentStore.addAppointment(slot);
    console.log("Appointments STORE:   ", AppointmentStore.appointments);
  }

  assignedSlot(slot) {
    if (slot.user) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { slot } = this.props;

    return (
      <Content>
        <Button
          disabled={this.assignedSlot(slot)}
          onPress={() => this.handlePress(slot)}
        >
          <Text>
            {slot.start_time} {slot.end_time}
          </Text>
        </Button>
      </Content>
    );
  }
}

export default observer(SlotItem);
