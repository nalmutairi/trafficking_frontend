import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text, Container, Icon } from "native-base";
import { Card, ListItem, Image } from "react-native-elements";

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
      password: ""
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <Card>
          <Image
            style={styles.image}
            source={{ uri: "http://104.248.38.127/media/iCleanU_28SUxkO.jpg" }}
          />
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
          <Button
            full
            onPress={() =>
              authStore.loginUser(this.state, this.props.navigation)
            }
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
        </Card>
      </Container>
    );
  }
}
export default observer(Login);
