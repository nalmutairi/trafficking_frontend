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
            source={{
              uri: "http://127.0.0.1:8000/media/iCleanU.jpg"
            }}
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
        </Card>
      </Container>
    );
  }
}
export default withNavigation(observer(Login));
