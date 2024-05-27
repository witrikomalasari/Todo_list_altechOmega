import {HeaderApp} from '@components/atoms';
import KeyboardAvoid from '@components/atoms/KeyboardAvoid';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beranda from '@screens/Beranda/Beranda';
import Completed from '@screens/Completed/Completed';
import React, {FC} from 'react';

const Tab = createBottomTabNavigator();

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  // const navigation = useNavigation<NavigationParams>();

  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#F4F5F7',
          height: 60,
          paddingTop: 10,
          paddingBottom: 10,
        },
      }}>
      <Tab.Screen
        // options={{
        //   tabBarIcon: ({focused}) => (
        //     <BerandaIcon width={26} color={focused ? '#C67C4E' : 'gray'} />
        //   ),
        // }}
        name="Beranda"
        component={Beranda}
      />
      <Tab.Screen
        // options={{
        //   tabBarIcon: ({focused}) => (
        //     <Heart2 width={26} color={focused ? '#C67C4E' : 'gray'} />
        //   ),
        // }}
        name="Completed"
        component={Completed}
      />
      <Tab.Screen
        // options={{
        //   tabBarIcon: ({focused}) => (
        //     <Heart2 width={26} color={focused ? '#C67C4E' : 'gray'} />
        //   ),
        // }}
        name="Profile"
        component={DummyPage}
      />
    </Tab.Navigator>
  );
};

const DummyPage = () => {
  return (
    <KeyboardAvoid>
      <HeaderApp HeaderName="HeaderAPP" />
    </KeyboardAvoid>
  );
};

export default Home;
