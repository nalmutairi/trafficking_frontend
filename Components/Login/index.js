import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";
// import { red } from "ansi-colors";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button
          full
          onPress={() => authStore.loginUser(this.state, this.props.navigation)}
        >
          <Text>Login</Text>
        </Button>
        <Button
          full
          danger
          onPress={() =>
            authStore.registerUser(this.state, this.props.navigation)
          }
        >
          <Text>SignUp</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Login);
