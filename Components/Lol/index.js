import React, { Component } from "react";
import { Icon, Content } from "native-base";
import { withNavigation } from "react-navigation";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

class Lol extends Component {
  static navigationOptions = ({ navigation }) => {
    console.log(navigation.getParam("newTitle"));
    return {
      title: navigation.getParam("newTitle")
    };
  };

  componentDidUpdate(prevProps) {
    if (authStore.user) {
      {
        this.props.navigation.setParams({ newTitle: authStore.user.username });
      }
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ newTitle: "user's name" });
  }

  render() {
    if (!authStore.user) {
      console.log("not logged in");
      return <Content />;
    } else {
      console.log(authStore.user.username);
      return (
        <Icon
          type="Octicons"
          name="smiley"
          style={{
            fontSize: 300,
            alignSelf: "center",
            paddingTop: "50%",
            color: "red"
          }}
        />
      );
    }
  }
}

export default observer(Lol);
