import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import News from '../screen/News';
import { FontAwesome, Feather } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export default function Tab() {
    return(
        <BottomTab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: 'black',
          style: {
            backgroundColor: 'white',
            shadowColor: 'black',
            shadowOpacity: 0.6,
            shadowOffset: { width: 0, height: 1 },
            shadowRadius:6
          }, 
        }} >
            <BottomTab.Screen 
              name="Home"
              component={Home}
              options={{
                tabBarLabel: 'Activity',
                tabBarIcon: ({focused}) => (
                  <Feather name="activity" color={focused ? 'black' :'grey'} size={26} />
                ),
              }}
            />
            <BottomTab.Screen 
              name="News"
              component={News}
              options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ focused }) => (
                  <FontAwesome name="feed" color={focused ? 'black' :'grey'}size={24} />
                ),
              }}
            />

        </BottomTab.Navigator>
    )
}