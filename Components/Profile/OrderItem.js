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
        <CardItem header button>
          <Text>{order.date}</Text>
        </CardItem>
        <CardItem button>
          <Body>
            <Text>
              {order.start_time} - {order.end_time}
            </Text>
          </Body>
        </CardItem>
        <CardItem footer button>
          <Text>GeekyAnts</Text>
        </CardItem>
      </Card>
    );
  }
}
export default OrderItem;
