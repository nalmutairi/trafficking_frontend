import React from "react";
import { Font, AppLoading } from "expo";

import { Root } from "native-base";
// Component
import HomePage from "./Components/HomePage";

import Nav from "./Navigation";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsAreLoaded: true
    };
  }

  componentDidMount() {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    }).then(() => this.setState({ fontsAreLoaded: true }));
  }

  render() {

    if (!this.state.fontsAreLoaded) {
      return <AppLoading />;
    }
<<<<<<< HEAD
    return (
      <Root>
        <HomePage />
      </Root>
    );
=======
    return <HomePage />;

>>>>>>> master
  }
}

export default App;
