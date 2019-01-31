import React, { Component } from "react";

import { Text, Content, Button } from "native-base";

class SlotItem extends Component {
  render() {
    const { slot } = this.props;

    return (
      <Content>
        <Button>
          <Text>
            {slot.start_time} {slot.end_time}
          </Text>
        </Button>
      </Content>
    );
  }
}

export default SlotItem;
