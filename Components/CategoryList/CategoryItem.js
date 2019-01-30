import React, { Component } from "react";

// Navigation
import { withNavigation } from "react-navigation";

import { Col, Row, Grid } from "react-native-easy-grid";
// Native Base Components
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button
} from "native-base";

// Store
import CategoryStore from "../../stores/categoryStore";
class CategoryItem extends Component {
  render() {
    const category = this.props.category;
    // the above line is equivalent to const category = this.props.category

    return (
      <Container>
        <Grid>
          <Col
            style={{
              backgroundColor: "#635DB7",
              height: 100,
              padding: 10,
              margin: 30
            }}
          >
            <Text>{category.name}</Text>
          </Col>
          <Col
            style={{
              backgroundColor: "#00CE9F",
              height: 100,
              padding: 10,
              margin: 30
            }}
          >
            <Text>{category.name}</Text>
          </Col>
        </Grid>
      </Container>
    );
  }
}

export default withNavigation(CategoryItem);
