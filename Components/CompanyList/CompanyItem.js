import React, { Component } from "react";

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

class CompanyItem extends Component {
  render() {
    const { company } = this.props;
    // the above line is equivalent to const company = this.props.company
    return (
      <ListItem>
        <Left>
          <Thumbnail square large source={{ uri: company.logo }} />
          <Body>
            <Text>{company.name}</Text>
            <Text />
            <Text note numberOfLines={1}>
              {company.slogan}
            </Text>
          </Body>
        </Left>
        <Right>
          <Button transparent>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default CompanyItem;
