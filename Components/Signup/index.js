import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Item, Input, Button, Text, Container, Icon } from "native-base";
import { Card, Image } from "react-native-elements";

// Store
import authStore from "../../stores/authStore";

//style
import styles from "./styles";

class Login extends Component {
  static navigationOptions = {
    title: "Login"
  };
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: ""
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <Card>
          <Item>
            <Icon active type="Entypo" name="user" />
            <Input
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={username => this.setState({ username })}
            />
          </Item>
          <Item>
            <Icon active type="Entypo" name="key" />
            <Input
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Item>
            <Icon active type="Entypo" name="edit" />
            <Input
              placeholder="First Name"
              autoCapitalize="none"
              onChangeText={first_name => this.setState({ first_name })}
            />
          </Item>
          <Item>
            <Icon active type="Entypo" name="edit" />
            <Input
              placeholder="Last Name"
              autoCapitalize="none"
              onChangeText={last_name => this.setState({ last_name })}
            />
          </Item>
          <Item>
            <Icon active type="Entypo" name="email" />
            <Input
              placeholder="Email Adress"
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Button
            full
            danger
            onPress={() =>
              authStore.registerUser(this.state, this.props.navigation)
            }
          >
            <Text>SignUp</Text>
          </Button>
        </Card>
      </Container>
    );
  }
}
export default withNavigation(observer(Login));
