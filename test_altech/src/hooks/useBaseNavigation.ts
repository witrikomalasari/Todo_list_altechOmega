// export type BaseNavigatorProp = NativeStackNavigationProp<NavigatorParamList>;

import {BaseNavigatorProp} from '@navigators/navigatorParams';
import {useNavigation} from '@react-navigation/native';

export const useBaseNavigation = () => useNavigation<BaseNavigatorProp>();
