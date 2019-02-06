import React, { Component } from "react";

import { Text } from "native-base";

class Profile extends Component {
  render() {
    const orders = this.props.orders;
    let OrderList;
    if (orders) {
      OrderList = orders.map(order => <OrderItem orders={orders} />);
    }
    return <Text>Hello</Text>;
  }
}
