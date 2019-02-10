import React, { Component } from "react";
import { observer } from "mobx-react";
import { Text, Content, Button, View, Toast } from "native-base";

import AppointmentStore from "../../stores/appointmentStore";

class SlotItem extends Component {
  handlePress(slot) {
    let address;
    AppointmentStore.addAppointment(slot, this.props.company);
    AppointmentStore.reserveAppointment(slot.id, address);
    console.log("Appointments STORE:   ", AppointmentStore.appointments);
  }

  checkSlot(slot) {
    const exists = AppointmentStore.appointments.find(
      appointment => appointment.id === slot.id
    );
    if (exists) {
      console.log("exists", exists);
      return true;
    } else {
      return false;
    }
  }

  assignedSlot(slot) {
    if (slot.status !== "O" || this.checkSlot(slot)) {
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
          style={{ marginBottom: 10 }}
          block
          info
          disabled={this.assignedSlot(slot)}
          onPress={() => {
            Toast.show({
              text: "Appointment has been added to cart",
              buttonText: "Okay"
            });
            this.handlePress(slot);
          }}
        >
          <Text>
            {slot.start_time.substring(0, 5)} - {slot.end_time.substring(0, 5)}{" "}
          </Text>
        </Button>
      </Content>
    );
  }
}

export default observer(SlotItem);
