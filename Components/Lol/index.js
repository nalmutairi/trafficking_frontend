// import React, { Component } from "react";
// import { Icon, Content } from "native-base";
// import { withNavigation } from "react-navigation";
// import { observer } from "mobx-react";
// import authStore from "../../stores/authStore";

// class Lol extends Component {
//   static navigationOptions = {
//     title: "yes"
//   };

//   render() {
//     if (!authStore.user) {
//       console.log("not logged in");
//       return <Content />;
//     } else {
//       console.log(authStore.user.username);
//       return (
//         <Icon
//           type="Octicons"
//           name="smiley"
//           style={{
//             fontSize: 300,
//             alignSelf: "center",
//             paddingTop: "50%",
//             color: "red"
//           }}
//         />
//       );
//     }
//   }
// }

// export default observer(Lol);
