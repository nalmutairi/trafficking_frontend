import React, { Component } from "react";

// NativeBase Components
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base";
import authStore from "../../stores/authStore";
import addressStore from "../../stores/addressStore";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      area: "",
      block: "",
      street: "",
      house: "",
      jaada: "",
      user: authStore.user
    };
  }
  render() {
    console.log(authStore.user);
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="area"
                autoCapitalize="none"
                onChangeText={area => this.setState({ area })}
              />
            </Item>
            <Item>
              <Input
                placeholder="block"
                autoCapitalize="none"
                onChangeText={block => this.setState({ block })}
              />
            </Item>
            <Item>
              <Input
                placeholder="street"
                autoCapitalize="none"
                onChangeText={street => this.setState({ street })}
              />
            </Item>
            <Item>
              <Input
                placeholder="jaada"
                autoCapitalize="none"
                onChangeText={jaada => this.setState({ jaada })}
              />
            </Item>
            <Item>
              <Input
                placeholder="house"
                autoCapitalize="none"
                onChangeText={house => this.setState({ house })}
              />
            </Item>
            <Item last>
              <Input
                placeholder="phone"
                autoCapitalize="none"
                onChangeText={phone => this.setState({ phone })}
              />
            </Item>
            <Button
              full
              onPress={
                // () => console.log(this.state)
                () => addressStore.createAddress(this.state)
                // authStore.loginUser(this.state, this.props.navigation)
              }
            >
              <Text>Create Address</Text>
            </Button>
          </Form>
        </Content>
      </Container>

      // <Card>
      //   <CardItem>
      //     <Button
      //       danger
      //       onPress={() => authStore.logoutUser(this.props.navigation)}
      //     >
      //       <Text>Logout</Text>
      //     </Button>
      //   </CardItem>
      // </Card>
    );
  }
}
export default Profile;
