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
import Forgetpaswword from './Screens/Forgetpaswword';
import Menu from './Screens/Menu';
import Order from './Screens/Order';
import BottomTabs from './Components/Bottomtab';
import { HStack, NativeBaseProvider } from 'native-base';
import SuperMarket from './Screens/SuperMarket';
import { Bellicon, Shoppingcart } from './Components/Icons';
import Grocery from './Screens/Grocery';
import Fruits from './Screens/Fruits';
import FruitCart from './Screens/FruitCart';
import Restaurants from './Screens/Restaurants';
import Foods from './Screens/Food';
import RestaurantCart from './Screens/RestaurantCart';
import Aboutapp from './Screens/Aboutapp'
import { Feather,Ionicons ,AntDesign} from '@expo/vector-icons'; 
import Hotels from './Screens/Hotels';
import Hotelcheckin from './Screens/Hotelcheckin';
import Hotelcart from './Screens/Hotelcart';
import City from './Screens/City';
import Hotel_name from './Screens/Hotel';
import Rooms from './Screens/Rooms';
import Meals from './Screens/Meals';
import Flying_ticket from './Screens/Flyingticket';
import Flyingcheckin from './Screens/Flyingcheckin';
import Flyingcart from './Screens/Flyingcart';
import Fromcity from './Screens/Fromcity';
import To_country from './Screens/Tocountry';
import To_city from './Screens/Tocity';
import Degree from './Screens/Selectdegree';
import Delivery from './Screens/Deliver';
import Trackresturant from './Screens/Trackresturant'
import Trackresturant1 from './Screens/Trackresturant1'
import Trackflying from './Screens/Trackflying'
import Hoteltrack from './Screens/Hoteltrack'
import Trackorder from './Screens/Trackorder'

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
        <Stack.Navigator    screenOptions={{ headerShown: false  }}>
          <Stack.Screen name="Userapp" component={Userapp} />
          <Stack.Screen name="Forgetpaswword" component={Forgetpaswword} />
          <Stack.Screen name="Dashboard" component={Tabnav} />
          <Stack.Screen options={{ headerShown: true,title:"My Cart" }} name="fruitCart" component={FruitCart} />

          <Stack.Screen name="supermarket" component={SuperMarket} options={({ navigation }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#00CBA4',
              borderBottomWidth: 0,
              shadowColor: "#F6F6F6",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,

              elevation: 0,
            },
            headerTintColor: "#fff",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'arabicRegular', fontSize: 24,
            },
            title: 'Supermarket',
            headerRight: () => (
              <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('FruitCart')} >
              <View style={{ marginRight: 20 }}>
                <HStack>
                  <Shoppingcart color="#fff" />
                  <ImageBackground
                    source={require("./Images/circle.png")}
                    style={{ width: 15.85, height: 15.85, marginLeft: '-15%' }}
                    alt="description of image"
                  >
                    <Text style={{ fontFamily: 'arabicRegular', fontSize: 10, color: "#fff", textAlign: "center", marginTop: '-15%' }}>
                      3
                    </Text>

                  </ImageBackground>
                </HStack>
              </View>
              </TouchableOpacity>
            ),

          })} />

          <Stack.Screen name="grocery" component={Grocery} options={({ navigation }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#00CBA4',
              borderBottomWidth: 0,
              shadowColor: "#F6F6F6",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,

              elevation: 0,
            },
            headerTintColor: "#fff",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'arabicRegular', fontSize: 24,
            },
            title: 'Supermarket Name',
            headerRight: () => (
              <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('FruitCart')} >
              <View style={{ marginRight: 20 }}>
                <HStack>
                  <Shoppingcart color="#fff" />
                  <ImageBackground
                    source={require("./Images/circle.png")}
                    style={{ width: 15.85, height: 15.85, marginLeft: '-15%' }}
                    alt="description of image"
                  >
                    <Text style={{ fontFamily: 'arabicRegular', fontSize: 10, color: "#fff", textAlign: "center", marginTop: '-15%' }}>
                      3
                    </Text>

                  </ImageBackground>
                </HStack>
              </View>
              </TouchableOpacity>
            ),

          })} />

          <Stack.Screen name="fruits"  component={Fruits} options={({ navigation }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#00CBA4',
              borderBottomWidth: 0,
              shadowColor: "#F6F6F6",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,

              elevation: 0,
            },
            headerTintColor: "#fff",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'arabicRegular', fontSize: 24,
            },
            title: 'Supermarket Name',
            headerRight: () => (
              <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('FruitCart')} >
              <View style={{ marginRight: 20 }}>
                <HStack>
                  <Shoppingcart color="#fff" />
                  <ImageBackground
                    source={require("./Images/circle.png")}
                    style={{ width: 15.85, height: 15.85, marginLeft: '-15%' }}
                    alt="description of image"
                  >
                    <Text style={{ fontFamily: 'arabicRegular', fontSize: 10, color: "#fff", textAlign: "center", marginTop: '-15%' }}>
                      3
                    </Text>

                  </ImageBackground>
                </HStack>
              </View>
              </TouchableOpacity>
            ),

          })} />
          <Stack.Screen name="FruitCart" component={FruitCart} options={({ navigation }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#fff',
              borderBottomWidth: 0,
              shadowColor: "#F6F6F6",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,

              elevation: 0,
            },
            headerTintColor: "#374151",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'arabicRegular', fontSize: 24,
              
            },
            title: 'My Cart',
           headerLeft: () => (
            <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Dashboard')} >
            <HStack my='auto' width='90%' mx='auto' >
            
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" style={{marginTop:"10%"
            ,marginLeft:'10%'}} /> 
                 </HStack>
            </TouchableOpacity>
          ),

          })} />
                <Stack.Screen name="restaurants" component={Restaurants} options={({ navigation }) => ({
              headerShown: true,
              headerStyle: {
                backgroundColor: '#FF9D52',
                borderBottomWidth: 0,
                shadowColor: "#F6F6F6",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0,
                shadowRadius: 0,

                elevation: 0,
              },
              headerTintColor: "#fff",
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: 'arabicRegular', fontSize: 24,
              },
              title: 'Restaurants',
              headerRight: () => (
                <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('FruitCart')} >
              <View style={{ marginRight: 20 }}>
                <HStack>
                  <Shoppingcart color="#fff" />
                  <ImageBackground
                    source={require("./Images/circle.png")}
                    style={{ width: 15.85, height: 15.85, marginLeft: '-15%' }}
                    alt="description of image"
                  >
                    <Text style={{ fontFamily: 'arabicRegular', fontSize: 10, color: "#fff", textAlign: "center", marginTop: '-15%' }}>
                      3
                    </Text>

                  </ImageBackground>
                </HStack>
              </View>
              </TouchableOpacity>
              ),

            })} />


            <Stack.Screen name="food" component={Foods} options={({ navigation }) => ({
              headerShown: true,
              headerStyle: {
                backgroundColor: '#FF9D52',
                borderBottomWidth: 0,
                shadowColor: "#F6F6F6",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0,
                shadowRadius: 0,

                elevation: 0,
              },
              headerTintColor: "#fff",
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: 'arabicRegular', fontSize: 24,
              },
              title: 'Restaurants Name',
              headerRight: () => (
                <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('FruitCart')} >
                <View style={{ marginRight: 20 }}>
                  <HStack>
                    <Shoppingcart color="#fff" />
                    <ImageBackground
                      source={require("./Images/circle.png")}
                      style={{ width: 15.85, height: 15.85, marginLeft: '-15%' }}
                      alt="description of image"
  
                    >
                      <Text style={{ fontFamily: 'arabicRegular', fontSize: 10, color: "#fff", textAlign: "center", marginTop: '-15%' }}>
                        3
                      </Text>
  
                    </ImageBackground>
                  </HStack>
                </View>
                </TouchableOpacity>
              ),

            })} />

<Stack.Screen name="RestaurantCart" component={RestaurantCart}  />
<Stack.Screen name="Aboutapp" component={Aboutapp}  />
<Stack.Screen name="Hotels" component={Hotels}  />
<Stack.Screen name="Hotelcheckin" component={Hotelcheckin}  />
<Stack.Screen name="Hotelcart" component={Hotelcart}  />
<Stack.Screen name="City" component={City}  />
<Stack.Screen name="Hotel_name" component={Hotel_name}  />
<Stack.Screen name="Rooms" component={Rooms}  />
<Stack.Screen name="Meals" component={Meals}  />
<Stack.Screen name="Flying_ticket" component={Flying_ticket}  />
<Stack.Screen name="Flyingcheckin" component={Flyingcheckin}  />
<Stack.Screen name="Flyingcart" component={Flyingcart}  />
<Stack.Screen name="Fromcity" component={Fromcity}  />
<Stack.Screen name="To_country" component={To_country}  />
<Stack.Screen name="To_city" component={To_city}  />
<Stack.Screen name="Degree" component={Degree}  />
<Stack.Screen name="Delivery" component={Delivery}  />
<Stack.Screen name="Trackresturant" component={Trackresturant}  />
<Stack.Screen name="Trackresturant1" component={Trackresturant1}  />
<Stack.Screen name="Trackflying" component={Trackflying}  />
<Stack.Screen name="Hoteltrack" component={Hoteltrack}  />
<Stack.Screen name="Trackorder" component={Trackorder}  />




























































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