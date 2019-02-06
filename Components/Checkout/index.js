import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Button, Text } from "native-base";
import AppointmentStore from "../../stores/appointmentStore";

class Checkout extends Component {
  render() {
    return (
      <Button
        block
        info
        onPress={() => {
          AppointmentStore.fetchUserAppointments();
          AppointmentStore.checkout(this.props.navigation);
        }}
      >
        <Text>Checkout</Text>
      </Button>
    );
  }
}

export default withNavigation(observer(Checkout));
