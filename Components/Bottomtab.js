import React from 'react';
import { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { View, Text, LogBox, ImageBackground,TouchableOpacity } from 'react-native';

import { Button, HStack } from 'native-base'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, Entypo, MaterialCommunityIcons, Ionicons,Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Home from '../Screens/Home';

import Notification from '../Screens/Notification';
import Order from '../Screens/Order';
import { Bellicon, Shoppingcart } from './Icons';


const Stack = createStackNavigator();
const AppStack = createStackNavigator();
LogBox.ignoreAllLogs();




const BottomTabs = (props, navigation) => {

  // this is where my app navigator can see if modal is open from child's state
  // if modal is open, hide bottom tab

  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { borderTopRightRadius: 20, borderTopLeftRadius: 20, },
      //  headerShown: false,
      tabBarInactiveTintColor: "#1F2937",
      tabBarActiveTintColor: '#3783A9',
    }} >
      <Tab.Screen name="Home" options={{
       
       headerShown:false,
        tabBarIcon: ({ focused }) => (
          <SimpleLineIcons name="home" size={30} color={focused ? '#3783A9' : '#1F2937'} />
        ),


      }}>
        {screenProps => (
          <Home
            {...screenProps}
            updateAuthState={props.updateAuthState}
          />
        )}


      </Tab.Screen>
      <Tab.Screen name="orders" options={{
        headerShown:false,
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="checkbox-blank" size={30} color={focused ? '#3783A9' : '#1F2937'} />
        ),


      }}


      >
        {screenProps => (
          <Order
            {...screenProps}
            updateAuthState={props.updateAuthState}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Notification" options={{

        headerShown: false,

        tabBarIcon: ({ focused }) => (
          <Feather name="bell" size={30} color={focused ? '#3783A9' : '#1F2937'} />
        ),


      }}>
        {screenProps => (
          <Notification
            {...screenProps}
            updateAuthState={props.updateAuthState}
          />
        )}

      </Tab.Screen>


    </Tab.Navigator>

  );



}


export default BottomTabs;

