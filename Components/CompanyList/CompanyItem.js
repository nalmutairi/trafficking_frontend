import React, { Component } from "react";

import { FluidNavigator, Transition } from "react-navigation-fluid-transitions";

import { Image, ImageBackground, TouchableOpacity, View } from "react-native";

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

import styles from "./styles";

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
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          this.handlePress(company);
        }}
      >
        <Transition shared={company.id}>
          <ImageBackground
            source={{
              uri: company.logo
            }}
            imageStyle={{ borderRadius: 20 }}
            style={{ width: "100%", height: "100%" }}
          >
            <View style={styles.textAlignment}>
              <Text style={styles.itemTitle}>{company.name}</Text>
              <Text style={styles.itemSlogan}>{company.slogan}</Text>
            </View>
          </ImageBackground>
        </Transition>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(CompanyItem);
//

// return (
//   <ListItem
//     onPress={() => {
//       this.handlePress(company);
//     }}
//   >
//     <Left>
//       {/* <Transition shared={company.id}> */}
//       <Image
//         source={{
//           uri:
//             company.logo ||
//             "http://www.resetyourbody.com/wp-content/uploads/COMPANY_LOGO/123Chrysanthemum.jpg"
//         }}
//         style={{ width: 100, height: 100 }}
//       />
//       {/* </Transition> */}

//       <Body>
//         <Text>{company.name}</Text>
//         <Text />
//         <Text note numberOfLines={1}>
//           {company.slogan}
//         </Text>
//       </Body>
//     </Left>
//     <Right>
//       <Button
//         transparent
//         onPress={() => {
//           this.handlePress(company);
//         }}
//       >
//         <Text>View</Text>
//       </Button>
//     </Right>
//   </ListItem>
// );
