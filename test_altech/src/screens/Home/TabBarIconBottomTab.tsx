import {Icon} from '@rneui/themed';
import {AltechColors} from '@theme/colorsAltech';
import React from 'react';
import {View} from 'react-native';

export interface TabBarIconProps {
  focused: boolean;
  color?: string;
  size?: number;
}

interface Route {
  name: string;
}

export const tabBarIconBottomTab = (
  {focused}: TabBarIconProps,
  route: Route,
) => {
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
      <Icon type={iconType} name={iconName} color={iconColor} size={iconSize} />
    </View>
  );
};
