import React, { Component } from "react";

// import { FluidNavigator, Transition } from "react-navigation-fluid-transitions";

import { Image } from "react-native";

import { withNavigation } from "react-navigation";
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

import CompanyStore from "../../stores/companyStore";
class CompanyItem extends Component {
  handlePress() {
    this.props.navigation.navigate("CompanyDetail", {
      company: this.props.company
    });
  }
  render() {
    const { company } = this.props;
    // the above line is equivalent to const company = this.props.company

    let logo = company.logo;

    return (
      <ListItem
        onPress={() => {
          this.handlePress(company);
        }}
      >
        <Left>
          {/* <Transition shared={company.id}> */}
          <Image
            source={{
              uri:
                company.logo ||
                "http://www.resetyourbody.com/wp-content/uploads/COMPANY_LOGO/123Chrysanthemum.jpg"
            }}
            style={{ width: 100, height: 100 }}
          />
          {/* </Transition> */}

          <Body>
            <Text>{company.name}</Text>
            <Text />
            <Text note numberOfLines={1}>
              {company.slogan}
            </Text>
          </Body>
        </Left>
        <Right>
          <Button
            transparent
            onPress={() => {
              this.handlePress(company);
            }}
          >
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default withNavigation(CompanyItem);
//
// import React, { Component } from "react";
//
// import {
//   Content,
//   Text,
//   List,
//   ListItem,
//   Thumbnail,
//   Left,
//   Right,
//   Button,
//   Body
// } from "native-base";
// import { withNavigation } from "react-navigation";
//
// class CompanyItem extends Component {
//   handlePress() {
//     this.props.navigation.navigate("CompanyDetail", {
//       company: this.props.company
//     });
//   }
//
//   render() {
//     return (
//       <Content>
//         <List>
//           <ListItem
//             thumbnail
//             onPress={() => this.handlePress(this.props.company)}
//           >
//             <Left>
//               <Thumbnail square source={{ uri: "Image URL" }} />
//             </Left>
//             <Body>
//               <Text>{this.props.company.name}</Text>
//               <Text note numberOfLines={1}>
//                 Its time to build a difference
//               </Text>
//             </Body>
//             <Right>
//               <Button transparent>
//                 <Text>View</Text>
//               </Button>
//             </Right>
//           </ListItem>
//         </List>
//       </Content>
//     );
//   }
// }
//
// export default withNavigation(CompanyItem);
