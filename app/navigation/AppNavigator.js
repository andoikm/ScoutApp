import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Components from '../screens/Components';
import Logout from '../screens/Logout';
import UpcomingMatch from '../screens/UpcomingMatch';
import Match from '../screens/Match';
import LiveMatch from "../screens/LiveMatch";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const routes = [
    {
      name: 'Home',
      component: Home,
      options: { title: 'Home'},
    },
    {
      name: 'Components',
      component: Components,
      options: { title: 'Components'},
    },
    {
      name: 'UpcomingMatch',
      component: UpcomingMatch,
      options: { title: 'Upcoming Match Page'},
    },
    {
      name: 'Match',
      component: Match,
      options: { title: 'Match Page'},
    },
    {
      name: 'LiveMatch',
      component: LiveMatch,
      options: { title: 'Live Match Page'},
    },
    {
      name: 'Login',
      component: Login,
      options: { title: 'Login Page'},
    },
    {
      name: 'Logout',
      component: Logout,
      options: { title: 'Logout Page'},
    },
  ];

  return (
    <Stack.Navigator id="root-nav" initialRouteName="Home" screenOptions={{ headerShown: false }}>
      {routes.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{ ...route.options }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigator;
