import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddTaskScreen from '@screens/AddTask/AddTaskScreen';
import EditTaskScreen from '@screens/EditTask/EditTaskScreen';
import Home from '@screens/Home/Home';
import Login from '@screens/Login/Login';
import React, {ComponentProps, Fragment} from 'react';

export type NavigatorParamList = {
  Login: undefined;
  Home: undefined;
  Detail: undefined;
  AddTaskScreen: undefined; // TaskInputProps;
  EditTaskScreen: undefined;
};

const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppStack = () => {
  const Route = (
    <Fragment>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
      <Stack.Screen name="EditTaskScreen" component={EditTaskScreen} />
    </Fragment>
  );

  const getCurrentRoutes = () => {
    return Route;
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'simple_push',
      }}
      initialRouteName="Home">
      {getCurrentRoutes()}
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<ComponentProps<typeof NavigationContainer>> {}

export const MainNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer
      theme={AltechTheme}
      {...props} //to stop navigation persistence
    >
      <AppStack />
    </NavigationContainer>
  );
};

MainNavigator.displayName = 'MainNavigator';

const exitRoutes = ['Home'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);

const AltechTheme = {
  ...DefaultTheme,
  DarkTheme: false,
  colors: {
    ...DefaultTheme.colors,
  },
};
