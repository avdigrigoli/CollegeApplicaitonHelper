/***
 Use this component inside your React Native Application.
 A scrollable list with different item type
 */
 import React, { Component } from "react";
 import { View, Text, Dimensions, Image, Pressable, SafeAreaView } from "react-native";
 import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import StudentProfileController from "../../../controllers/signup/student/StudentProfileController";
 
 const ViewTypes = {
     FULL: 0,
     HALF_LEFT: 1,
     HALF_RIGHT: 2
 };
 
 let containerCount = 0;
 
 class CellContainer extends React.Component {
     constructor(args) {
         super(args);
         this._containerId = containerCount++;
     }
     render() {
         return <View {...this.props}>{this.props.children}</View>;
     }
 }
 
 /***
  * To test out just copy this component and render in you root component
  */

  var navigationn;

 export default class FavoriteScreen extends React.Component {
     constructor({navigation}) {
         super();

        navigationn = navigation
 
         let { width } = Dimensions.get("window");
 
         //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
         //THIS IS VERY IMPORTANT, FORGET PERFORMANCE IF THIS IS MESSED UP
         let dataProvider = new DataProvider((r1, r2) => {
             return r1 !== r2;
         });
 
         //Create the layout provider
         //First method: Given an index return the type of item e.g ListItemType1, ListItemType2 in case you have variety of items in your list/grid
         //Second: Given a type and object set the exact height and width for that type on given object, if you're using non deterministic rendering provide close estimates
         //If you need data based check you can access your data provider here
         //You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
         //NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file
         this._layoutProvider = new LayoutProvider(
             index => {
                 return ViewTypes.FULL;
                 /*if (index % 3 === 0) {
                     return ViewTypes.FULL;
                 } else if (index % 3 === 1) {
                     return ViewTypes.HALF_LEFT;
                 } else {
                     return ViewTypes.HALF_RIGHT;
                 }*/
             },
             (type, dim) => {
                 switch (type) {
                     case ViewTypes.HALF_LEFT:
                         dim.width = width / 2;
                         dim.height = 160;
                         break;
                     case ViewTypes.HALF_RIGHT:
                         dim.width = width / 2;
                         dim.height = 160;
                         break;
                     case ViewTypes.FULL:
                         dim.width = width;
                         dim.height = 140;
                         break;
                     default:
                         dim.width = 0;
                         dim.height = 0;
                 }
             }
         );
 
         this._rowRenderer = this._rowRenderer.bind(this);
 
         //Since component should always render once data has changed, make data provider part of the state
         this.state = {
             dataProvider: dataProvider.cloneWithRows(StudentProfileController.getInstance().getFavorites())
         };
     }
 
     _generateArray(n) {
         let arr = new Array(n);
         for (let i = 0; i < n; i++) {
             arr[i] = i;
         }
         return arr;
     }
 
     //Given type and data return the view component
     _rowRenderer(type, data) {
         //You can return any view here, CellContainer has no special significance
         switch (type) {
             case ViewTypes.HALF_LEFT:
                 return (
                     <CellContainer style={styles.containerGridLeft}>
                         <Text>Data: {data}</Text>
                     </CellContainer>
                 );
             case ViewTypes.HALF_RIGHT:
                 return (
                     <CellContainer style={styles.containerGridRight}>
                         <Text>Data: {data}</Text>
                     </CellContainer>
                 );
             case ViewTypes.FULL:
                 console.log(data);
                 return (
                     <CellContainer style={styles.container}>
                         <Pressable
                         onPress={() => {
                             navigationn.navigate("CollegeScreen");
                         }}
                         style={{ flex: 1, height: "50%", width: "100%", resizeMode: 'stretch' }}>
                         <Image
                            style={{ flex: 1, height: "50%", width: "100%", resizeMode: 'stretch' }}
                            source={data} />
                          </Pressable>
                     </CellContainer>
                 );
             default:
                 return null;
         }.1
     }
 
     render() {
         return (
         <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
            <RecyclerListView layoutProvider={this._layoutProvider} dataProvider={this.state.dataProvider} rowRenderer={this._rowRenderer} isHorizontal={false}/>         
         </SafeAreaView>
         );   
    }
 }
 const styles = {
     container: {
         justifyContent: "space-around",
         alignItems: "center",
         flex: 1,
         backgroundColor: "#00a1f1"
     },
     containerGridLeft: {
         justifyContent: "space-around",
         alignItems: "center",
         flex: 1,
         backgroundColor: "#ffbb00"
     },
     containerGridRight: {
         justifyContent: "space-around",
         alignItems: "center",
         flex: 1,
         backgroundColor: "#7cbb00"
     }
 };