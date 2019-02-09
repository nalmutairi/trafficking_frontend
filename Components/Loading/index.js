// merge me
import React, { Component } from "react";
import { Container, Header, Content, Spinner } from "native-base";
class Loading extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Spinner color="blue" />
        </Content>
      </Container>
    );
  }
}

export default Loading;
