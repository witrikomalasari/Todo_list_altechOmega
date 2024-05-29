import {HeaderApp} from '@components/atoms';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import Beranda from '@screens/Beranda/Beranda';
import Completed from '@screens/Completed/Completed';
import {AltechColors} from '@theme/colorsAltech';
import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {tabBarIconBottomTab, TabBarIconProps} from './TabBarIconBottomTab';

const Tab = createBottomTabNavigator();

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  const navigation = useBaseNavigation();

  const tabBarButtonFab = (props: BottomTabBarButtonProps) => {
    const isButtonFabSelected = props.accessibilityState?.selected;

    return (
      <>
        <TouchableOpacity
          {...props}
          style={styles.floatingButton}
          onPress={() => navigation.navigate('AddTaskScreen')}>
          <Icon
            name={isButtonFabSelected ? 'check' : 'add'}
            type="material"
            color="white"
            size={30}
          />
        </TouchableOpacity>
      </>
    );
  };

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
        component={DummyPage}
        options={{
          tabBarButton: (props: BottomTabBarButtonProps) =>
            tabBarButtonFab(props),
        }}
      />
      <Tab.Screen name="Completed" component={Completed} />
    </Tab.Navigator>
  );
};
const DummyPage = () => {
  return (
    <SafeAreaView>
      <HeaderApp />
    </SafeAreaView>
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
