import {BottomTabScreenProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../screens/Home';
import {Profile} from '../screens/Profile';
import { CompositeScreenProps } from '@react-navigation/native';
import { AppStackParamList, AppStackScreenProps } from './AppNavigator';

export type TabNavigatorParamList = {
  Home: undefined
  Profile: undefined
}

export type TabScreenProps<T extends keyof TabNavigatorParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabNavigatorParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<TabNavigatorParamList>()

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={ {headerShown : false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
