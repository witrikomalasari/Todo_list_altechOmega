import {AllLIstIcon, CompletedIcon} from '@assets/iconSVG';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beranda from '@screens/Beranda/Beranda';
import Completed from '@screens/Completed/Completed';
import {AltechColors} from '@theme/colorsAltech';
import React, {FC} from 'react';

const Tab = createBottomTabNavigator();

interface IHomeProps {}

// const DummyPage = () => {
//   return (
//     <KeyboardAvoid>
//       <HeaderApp HeaderName="HeaderAPP" />
//     </KeyboardAvoid>
//   );
// };

const Home: FC<IHomeProps> = () => {
  // const navigation = useNavigation<NavigationParams>();

  const tabBarIconAllList = ({focused}) => (
    <AllLIstIcon
      width={30}
      color={focused ? AltechColors.white : AltechColors.gray}
    />
  );

  const tabBarIconCompleted = ({focused}) => (
    <CompletedIcon
      width={26}
      color={focused ? AltechColors.white : AltechColors.gray}
    />
  );

  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: AltechColors.secondary,
          height: 60,
          paddingTop: 10,
          paddingBottom: 10,
          // elevation: 0,
          borderTopWidth: 0,
          // shadowOpacity: 0,
          // borderBottomWidth: 0,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: tabBarIconAllList,
          tabBarActiveTintColor: AltechColors.text.white,
          tabBarInactiveTintColor: AltechColors.text.secondary,
        }}
        name="All List"
        component={Beranda}
      />
      <Tab.Screen
        options={{
          tabBarIcon: tabBarIconCompleted,
          tabBarActiveTintColor: AltechColors.text.white,
          tabBarInactiveTintColor: AltechColors.text.secondary,
        }}
        name="Completed"
        component={Completed}
      />
    </Tab.Navigator>
  );
};

export default Home;
