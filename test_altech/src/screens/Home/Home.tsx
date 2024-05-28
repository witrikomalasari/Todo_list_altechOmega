import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import Beranda from '@screens/Beranda/Beranda';
import Completed from '@screens/Completed/Completed';
import {AltechColors} from '@theme/colorsAltech';
import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const Tab = createBottomTabNavigator();

interface IHomeProps {}

// const DummyPage = () => {
//   return (
//     <KeyboardAvoid>
//       <HeaderApp HeaderName="HeaderAPP" />
//     </KeyboardAvoid>
//   );
// };

interface TabBarIconProps {
  focused: boolean;
  color?: string;
  size?: number;
}

interface Route {
  name: string;
}

const Home: FC<IHomeProps> = () => {
  const tabBarIconBottomTab = ({focused}: TabBarIconProps, route: Route) => {
    let iconName!: any;
    let iconType: string = 'feather' || 'material';
    let iconSize: number = 0;
    let iconColor: string = focused ? AltechColors.primary : AltechColors.gray;

    switch (route.name) {
      case 'All List':
        iconName = 'list';
        iconSize = 20;
        break;
      case 'Completed':
        iconName = 'check-square';
        iconSize = 20;
        break;
    }

    return (
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 5,
          // flexGrow: 1,
        }}>
        <Icon
          type={iconType}
          name={iconName}
          color={iconColor}
          size={iconSize}
        />
      </View>
    );
  };

  const tabBarButtonFab = (props: BottomTabBarButtonProps) => (
    <TouchableOpacity {...props} style={styles.floatingButton}>
      <Icon name="add" type="material" color="white" size={30} />
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        lazy: true,
        headerShown: false,
        tabBarIcon: (props: TabBarIconProps) =>
          tabBarIconBottomTab(props, route),
        tabBarStyle: {
          backgroundColor: AltechColors.secondary,
          height: 55,
          borderTopWidth: 0,
          // borderTopLeftRadius: 20,
          elevation: 10,
          shadowColor: AltechColors.shadow,
          shadowOpacity: 0.6,
          shadowOffset: {width: 0, height: 5},
          shadowRadius: 15,
          paddingBottom: 5,
        },
        tabBarShowLabel: true,
        tabBarActiveTintColor: AltechColors.primary,
        tabBarInactiveTintColor: AltechColors.gray,
      })}>
      <Tab.Screen name="All List" component={Beranda} />
      <Tab.Screen
        name="Add"
        component={Beranda} // Replace with the screen for your floating button action
        options={{
          tabBarButton: (props: BottomTabBarButtonProps) =>
            tabBarButtonFab(props),
        }}
      />
      <Tab.Screen name="Completed" component={Completed} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: AltechColors.primary,
    shadowColor: AltechColors.shadow, //'#6200ee',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    elevation: 10,
  },
});

export default Home;
