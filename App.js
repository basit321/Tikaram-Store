import React from 'react';
import { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { View, Text, LogBox, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Home from './Screens/Home';
import Userapp from "./Screens/Userapp"
import Menu from './Screens/Notification';
import Order from './Screens/Order';
import BottomTabs from './Components/Bottomtab';
import { HStack, NativeBaseProvider } from 'native-base';

import RecieptOrder from './Screens/RecieptOrder';
import RecieptOrder1 from './Screens/Receptorder1';
import RecieptOrder2 from './Screens/Receptorder2';
import Setting from './Screens/Setting';
import MyWallet from './Screens/MyWallet';
import Oldoders from './Screens/Oldoders';
import Selectservice from "./Screens/Selectservice"
import Allorder from "./Screens/Allorder"
import Items from  "./Screens/Items"
import Edit from "./Screens/Edit"
import Selectcategory from "./Screens/Selectcategory"
import Selctsub from "./Screens/Selectsub"
import Store from "./Screens/Store"
import Personalinformation from './Screens/Personalinformation';
const Stack = createStackNavigator();
const AppStack = createStackNavigator();
// LogBox.ignoreAllLogs();


const fetchFonts = () => {
  return Font.loadAsync({
    'arabicRegular': require('./fonts/arabicRegular.ttf'),
    'arabicLight': require('./fonts/arabicLight.ttf'),
    'arabicBold': require('./fonts/arabicBold.ttf'),
    'arabicMedium': require('./fonts/arabicMedium.ttf'),
    'robotoRegular': require('./fonts/robotoRegular.ttf')


  })
}

const Tabnav = ({ route, navigation }) => {


  return (
    <View style={styles.conatainer}>

      <BottomTabs navigation={navigation} />
    </View>



  )
}

const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
const verticalAnimation = {
  gestureDirection: 'vertical',
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  },
};
const horizontalAnimation6 = {
  headerShown: true, 
  title: "Settings",

  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
const horizontalAnimation2 = {
  headerShown: true, 
  title: "My Wallet",

  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};



const App = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  return (
    <NativeBaseProvider>

      <NavigationContainer>
        <Stack.Navigator    screenOptions={{ headerShown: false  }} initialRouteName='Personalinformation'   >
          <Stack.Screen name="Userapp" component={Userapp} />
       
          <Stack.Screen name="Dashboard" component={Tabnav}   />
          
<Stack.Screen name="RecieptOrder" component={RecieptOrder}  options={{  headerShown: true, 
  title: "Order Number: 34212",
}} />
<Stack.Screen name="RecieptOrder1" component={RecieptOrder1} 
options={{  headerShown: true, title: "Order Number: 34212",}}   />
<Stack.Screen name="RecieptOrder2" component={RecieptOrder2} options={{  headerShown: true,title: "Order Number: 34212", }}  />


<Stack.Screen name="Setting" component={Setting} options={horizontalAnimation6} />
<Stack.Screen name="myWallet" component={MyWallet} options={horizontalAnimation2} />
<Stack.Screen name="Selectservice" component={Selectservice} options={horizontalAnimation} />
<Stack.Screen name="Allorder" component={Allorder} options={horizontalAnimation} />
<Stack.Screen name="Items" component={Items} options={horizontalAnimation} />
<Stack.Screen name="Oldoders" component={Oldoders} />
<Stack.Screen name="Edit" component={Edit} />
<Stack.Screen name="Selectcategory" component={Selectcategory} />
<Stack.Screen name="Selctsub" component={Selctsub} />
<Stack.Screen name="Store" component={Store} options={horizontalAnimation} />
<Stack.Screen name="Personalinformation" component={Personalinformation} />

          

          
          

          

          
          


          
          

          
          


          
          



































































































        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default App;
const styles = StyleSheet.create({

  conatainer: {
    flex: 1,
    justifyContent: "center",


  },








});