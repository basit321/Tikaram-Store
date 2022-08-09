import { View, Text, StyleSheet, TextInput ,ScrollView,Dimensions,ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react'
import { AeroPlane, FastFood, Hotels, Package, Search, SuperMarket,Main_card,Artboard1 } from '../Components/Icons'
import HomeCard from '../Components/HomeCard'
import Slider from '../Components/Slider'
import { StatusBar } from 'expo-status-bar'

import {
  Box,
  FlatList,
  Image,
  HStack,
  VStack,
  Center,
  NativeBaseProvider,

  ArrowBackIcon,
  Button,
  Radio,
  Select,
  CheckIcon,
  Link,
  Avatar,

  Heading,
  Input,
  Form,
  FormControl,
  Item,
  Label,
  ArrowDownIcon


} from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  

const Home = ({navigation}) => {
  
  
  
  return (
    <View style={{ ...styles.conatainer }}>
<StatusBar style='auto'/>
<ImageBackground style={{flex:0.5,overflow:'hidden',borderBottomLeftRadius:50,borderBottomRightRadius:50}}

source={require('../Images/gradient.png')}
alt='123'

>
<VStack mx='auto' my='auto'>
<Artboard1/>
</VStack>
</ImageBackground>
<ScrollView  style={{flex:1,}}>

<VStack style={{...styles.maincont,}} >

  
              
              <VStack style={{...styles.subcont,}}>
 

              <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Edit')} >
<LinearGradient
 colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
 start={{ x: 0, y: 0 }}
 end={{ x: 1, y: 1 }}
 style={{ ...styles.Btn,width:width*0.7 }}
>
 <Text style={{ color: "white", fontFamily: 'arabicBold',fontSize:14 }}>+ Add New Items</Text>

 
</LinearGradient>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Store')} >
<Box style={{...styles.Box,height:94}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='2%'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<Image source={require('../Images/Supermarkit1.png')}
style={{width:72,height:72}}
alt="des"
/>
<VStack ml='2%'>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#37B3A9",}}>
Store Name
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
Supermarket
</Text>



</VStack>


</HStack>
</Box>
</TouchableOpacity>
<HStack justifyContent='space-between'mt='5%'>
<TouchableOpacity activeOpacity={1}  onPress={()=>navigation.navigate('Oldoders')}  >
<Box style={{...styles.Box,height:129,width:width*0.4}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='2%'>
 <VStack my='auto'mx='auto'>
  <Image
   style={{width:40,height:40}}
   source={require('../Images/pre.png')}
   mx='auto'
   alt='1213'
  />
   <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
   Old Orders
</Text>
 </VStack>


</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1}  onPress={()=>navigation.navigate('Selectservice')}  >
<Box style={{...styles.Box,height:129,width:width*0.4}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='2%'>
 <VStack my='auto'mx='auto'>
  <Image
   style={{width:40,height:40}}
   source={require('../Images/serv.png')}
   mx='auto'
   alt='123'
  />
   <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
   Services Provided
</Text>
 </VStack>


</Box>
</TouchableOpacity>


</HStack>
<HStack justifyContent='space-between' mt='5%'>
<TouchableOpacity activeOpacity={1}  onPress={()=>navigation.navigate('myWallet')}  >
<Box style={{...styles.Box,height:129,width:width*0.4}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='2%'>
 <VStack my='auto'mx='auto'>
  <Image
   style={{width:40,height:40}}
   source={require('../Images/Wall.png')}
   mx='auto'
   alt='1231'
  />
   <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
   Wallet
</Text>
 </VStack>


</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1}  onPress={()=>navigation.navigate('Setting')}  >
<Box style={{...styles.Box,height:129,width:width*0.4}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='2%'>
 
 <VStack my='auto'mx='auto'>
  <Image
   style={{width:40,height:40}}
   source={require('../Images/sett.png')}
   mx='auto'
   alt='321'
  />
   <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
   Setting
</Text>
 </VStack>

</Box>
</TouchableOpacity>

</HStack>

</VStack>
</VStack>

</ScrollView>

    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: "#f6f6f6",
    flex:1,
  },
  searchContainer: {
    marginVertical: 5,
    backgroundColor: '#E6E7E9',
    marginHorizontal: 20,
    borderRadius: 5,
    paddingLeft: 10,
    alignItems: 'center',
    flexDirection: "row"
  },
  searchInput: {
    height: 40,
    width: "100%",
    paddingLeft: 5
  },
  servicesConatainer: {
    marginHorizontal: 20,
  },
  serviceHeading: {
    fontSize: 16,
    fontFamily: 'arabicRegular'

  },
  serviceSubHeading: {
    fontSize: 12,
    fontFamily: 'arabicRegular'
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-between'
  },
  subcont:{
    width:width*0.9,
    
    marginLeft:"auto",
    marginRight:'auto',
    marginTop:"5%"
  
  } ,
  maincont:{
    paddingBottom:"10%"
  },
  Btn: {
          
    height: 49,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 4,
    
    marginLeft:"auto" ,
    marginRight:"auto",
    width:width*0.5
    
    },
    Box:{
      width:width*0.9,
      borderRadius:15,
      borderColor:'#fff',
      height:101,
    },
    Box1:{
      width:width*0.9,
      borderRadius:15,
      borderColor:'#00B6AA',
      height:101,
    },
    
  
})