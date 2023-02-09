import * as React from 'react';
import { View, useWindowDimensions, SafeAreaView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Color from '../../../values/Color';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: Color.secondary }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: Color.secondary }} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: Color.secondary }} />
);

const FourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: Color.secondary }} />
);

const FifthRoute = () => (
  <View style={{ flex: 1, backgroundColor: Color.secondary }} />
);

const SixthRoute = () => (
  <View style={{ flex: 1, backgroundColor: Color.secondary }} />
);

const SeventhRoute = () => (
  <View style={{ flex: 1, backgroundColor: Color.secondary }} />
);

const EighthRoute = () => (
  <View style={{ flex: 1, backgroundColor: Color.secondary }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
  sixth: SixthRoute,
  seventh: SeventhRoute,
  eighth: EighthRoute

});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Housing' },
    { key: 'second', title: 'Dining' },
    { key: 'third', title: 'Abroad Programs' },
    { key: 'fourth', title: 'Fitness & Rec' },
    { key: 'fifth', title: 'Clubs & Activities' },
    { key: 'sixth', title: 'Special Services' },
    { key: 'seventh', title: 'Academics' },
    { key: 'eighth', title: 'Transporation & Prox' },




  ]);

  return (
      <SafeAreaView style={{flex: 1}}>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={props => <TabBar scrollEnabled={true} {...props} />}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      scrollEnabled={true}
    />
    </SafeAreaView>
  );
}