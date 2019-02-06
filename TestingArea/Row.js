import React, { Component } from "react";

import { observer } from "mobx-react";
import { List, Text } from "native-base";

import CompanyItem from "../Components/CompanyList/CompanyItem";

import CompanyStore from "../stores/companyStore";

import { LayoutAnimation, UIManager, View, ScrollView } from "react-native";

import FoldView from "react-native-foldview";

import InfoCard from "./Components/InfoCard";
import PhotoCard from "./Components/PhotoCard";
import ProfileCard from "./Components/ProfileCard";

// Enable LayoutAnimation on Android
if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ROW_HEIGHT = 180;

const Spacer = ({ height }) => (
  <View
    pointerEvents="none"
    style={{
      height
    }}
  />
);

export default class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      height: ROW_HEIGHT
    };
  }

  componentWillMount() {
    this.flip = this.flip.bind(this);
    this.handleAnimationStart = this.handleAnimationStart.bind(this);
    this.renderFrontface = this.renderFrontface.bind(this);
    this.renderBackface = this.renderBackface.bind(this);
  }

  flip() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  handleAnimationStart(duration, height) {
    const isExpanding = this.state.expanded;

    const animationConfig = {
      duration,
      update: {
        type: isExpanding
          ? LayoutAnimation.Types.easeOut
          : LayoutAnimation.Types.easeIn,
        property: LayoutAnimation.Properties.height
      }
    };

    LayoutAnimation.configureNext(animationConfig);

    this.setState({
      height
    });
  }

  renderFrontface() {
    return <InfoCard onPress={this.flip} />;
  }

  renderBackface() {
    return <ProfileCard onPress={this.flip} />;
  }

  render() {
    const { height } = this.state;
    const { zIndex } = this.props;

    const spacerHeight = height - ROW_HEIGHT;

    return (
      <View
        style={{
          flex: 1,
          zIndex
        }}
      >
        <View
          style={{
            height: ROW_HEIGHT,
            margin: 10
          }}
        >
          <FoldView
            expanded={this.state.expanded}
            onAnimationStart={this.handleAnimationStart}
            perspective={1000}
            renderBackface={this.renderBackface}
            renderFrontface={this.renderFrontface}
          >
            <PhotoCard onPress={this.flip} />
          </FoldView>
        </View>

        <Spacer height={spacerHeight} />
      </View>
    );
  }
}

// import React, { Component } from "React";

// import { observer } from "mobx-react";
// import { List, Text } from "native-base";

// import { ScrollView, View } from "react-native";

// import CompanyItem from "./CompanyItem";

// import CompanyStore from "../../stores/companyStore";

// class CompanyList extends Component {
//   render() {
//     const companies = CompanyStore.companies;
//     let filtered = this.props.navigation.getParam("category");
//     let CompanyList;
//     if (companies) {
//       //-------------- filtered items from category list ----------------------
//       if (filtered) {
//         CompaniesFiltered = companies.filter(company => {
//           return company.category === filtered;
//         });
//         CompanyList = CompaniesFiltered.map(company => (
//           <CompanyItem company={company} key={company.name} />
//         ));
//       }
//       // -------------- end of filtered items from category list ---------------
//       else {
//         CompanyList = companies.map(company => (
//           <CompanyItem company={company} key={company.name} />
//         ));
//       }
//     }

//     return (
//       <ScrollView>
//         <List>{CompanyList}</List>
//       </ScrollView>
//     );
//   }
// }

// export default observer(CompanyList);
