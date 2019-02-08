import React, { Component } from "react";

import { Text, List } from "native-base";
import OrderItem from "./OrderItem";
class OrderList extends Component {
  render() {
    const orders = this.props.order;
    console.log("ORDER", orders);
    let OrderList;
    if (orders) {
      OrderList = orders.map(order => <OrderItem order={order} />);
    }

    console.log("ORDERLIST: ", OrderList);
    return <List>{OrderList}</List>;
  }
}

export default OrderList;
