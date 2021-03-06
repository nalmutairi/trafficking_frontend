import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from "native-base";
class OrderItem extends Component {
  render() {
    const { order } = this.props;

    return (
      <Card>
        <CardItem header>
          <Text>{order.companyname}</Text>

        </CardItem>
        <CardItem>
          <Body>
            <Text>Date: {order.date}</Text>
            <Text>
              Time: {order.start_time} - {order.end_time}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
export default OrderItem;
