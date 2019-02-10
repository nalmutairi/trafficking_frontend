import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Button, Text } from "native-base";
import AppointmentStore from "../../stores/appointmentStore";
import AddressStore from "../../stores/addressStore";

class Checkout extends Component {
  addressSelected() {
    if (AddressStore.select) {
      AppointmentStore.checkout(this.props.navigation, 1);
    } else {
      Toast.show({
        text: "Appointment has been added to cart",
        buttonText: "Okay"
      });
    }
  }

  render() {
    return (
      <Button
        block
        info
        onPress={() => {
          AppointmentStore.fetchUserAppointments();
          this.addressSelected();
        }}
      >
        <Text>Checkout</Text>
      </Button>
    );
  }
}

export default withNavigation(observer(Checkout));
