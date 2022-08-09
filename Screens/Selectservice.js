import React from 'react';
import { useState,useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground,BackHandler, TouchableOpacity,Alert,ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Location,Bellicon,Payment,Shoppingcart,Heart,Info,Language,Phonecall,Email,Avatar
  ,Checkbox,Mark,Circles,Map_mark,Filledheart,AeroPlane,Hotels,Package

} from '../Components/Icons';
import { Visa,Mastercard,Apple} from '../Components/Images';

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
    
  
    Heading,
    Input,
    Form,
    FormControl,
    Item,
    Label,
    ArrowDownIcon,
    TextArea
  

  } from "native-base"
  import Modal from 'react-native-modal'; 
  import {Header} from "react-native-elements"
  import { Feather,Ionicons ,Entypo ,MaterialCommunityIcons,AntDesign,EvilIcons} from '@expo/vector-icons'; 
import { Navigation } from 'react-native-navigation';

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  
  
const Selectservice = ({navigation}) => {
  return (

    <View style={styles.conatainer}>
       <StatusBar style="dark"/>
<NativeBaseProvider> 

<VStack style={{flex:0.25,backgroundColor:"#fff"}} shadow='2' pb='5%'>
<VStack mt='auto'>
<HStack  width='90%' mx='auto' space='2%'  mt='10%' >
                    <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.goBack()}} >
                    <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
                    </TouchableOpacity>
                    <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-5%",marginLeft:"2%"}}>
                    Services Provided
        </Text>
                      </HStack>


<VStack width='90%' mx='auto'>
<Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='search'
                  placeholderTextColor='#9CA3Af'
                  mt='4%'
                  InputLeftElement={
                     
                    <EvilIcons name="search" size={24} color="gray" />
                  }  />


</VStack>
</VStack>
</VStack>
<ScrollView style={{flex:1,}}>
<VStack style={{...styles.maincont}} >
              
              <VStack style={{...styles.subcont}} >
              <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Allorder')} >
              <Box style={{...styles.Box,height:50,borderRadius:20}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='2%'

  
>

<HStack width='90%' mx='auto' my='auto' justifyContent='space-between' >

<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
All Items
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#37B3A9",}}>
278 Items
</Text>

</HStack>


</Box>
</TouchableOpacity>
          
         <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Allorder')} >

             
              <Box style={{...styles.Box,height:94}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='10%'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<Image source={require('../Images/Grocery/fruits.png')}
style={{width:100,height:66}}
alt="des"
/>
<VStack ml='2%'>

<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
Fruits & vegetables
</Text>

<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#374151",}}>
200 Item
</Text>



</VStack>


</HStack>
</Box>
        </TouchableOpacity>   
        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Allorder')} >

             
<Box style={{...styles.Box,height:94}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='10%'


>
<HStack width='90%' mx='auto' my='auto' space='2%'>

<Image source={require('../Images/Grocery/detergents.png')}
style={{width:100,height:66}}
alt="des"
/>
<VStack ml='2%'>

<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
Detergent
</Text>

<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#374151",}}>
10 Item
</Text>



</VStack>


</HStack>
</Box>
</TouchableOpacity>          
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Allorder')} >

             
<Box style={{...styles.Box,height:94}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='10%'


>
<HStack width='90%' mx='auto' my='auto' space='2%'>

<Image source={require('../Images/Grocery/bakery.png')}
style={{width:100,height:66}}
alt="des"
/>
<VStack ml='2%'>

<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
Bakery 
</Text>

<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#374151",}}>
100 Item
</Text>



</VStack>


</HStack>
</Box>
</TouchableOpacity>          
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Allorder')} >

             
<Box style={{...styles.Box,height:94}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='10%'


>
<HStack width='90%' mx='auto' my='auto' space='2%'>

<Image source={require('../Images/Grocery/cheese.png')}
style={{width:100,height:66}}
alt="des"
/>
<VStack ml='2%'>

<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
Cheese and dairy
</Text>

<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#374151",}}>
100 Item
</Text>



</VStack>


</HStack>
</Box>
</TouchableOpacity>          
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Allorder')} >

             
<Box style={{...styles.Box,height:94}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='10%'


>
<HStack width='90%' mx='auto' my='auto' space='2%'>

<Image source={require('../Images/Grocery/cheese.png')}
style={{width:100,height:66}}
alt="des"
/>
<VStack ml='2%'>

<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
Cheese and dairy
</Text>

<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#374151",}}>
100 Item
</Text>



</VStack>


</HStack>
</Box>
</TouchableOpacity>          

    
                  </VStack>
                  </VStack>

</ScrollView>
    </NativeBaseProvider>
    </View>


  )
}

export default Selectservice
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
      
        backgroundColor:"#F6F6F6"
    
        
    },
    
    slidemodel:{
    
      
      margin: 0,
      
      width: width,
  height: height  
  
  
  },
    
  createBtn: {
  
  height: 49,
  borderRadius: 10,
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
  paddingBottom: 4
  },  
  loginBtn: {
  
  height: 49,
  borderRadius: 10,
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  
  borderWidth: 1,
  borderColor: '#C40000',
  paddingBottom: 4,
  width:width*0.3
  },    
  slidemodelcontent:{
  backgroundColor: 'white',
  flex:1,
  padding: 22,
  
  borderRadius: 0,
  borderColor: 'rgba(0, 0, 0, 0.1)',
  
  
  
  
  },  
  bottomModal: {
  justifyContent: 'flex-end',
  margin: 0,
  position:"absolute",
  width: width,
  height: height  
  
  
  },
  modalContentlogin: {
  backgroundColor: 'white',
  
  
  borderRadius: 4,
  borderColor: 'rgba(0, 0, 0, 0.1)',
  height:222,
  borderRadius:20
  
  },
  modalContentchnagepass: {
  backgroundColor: 'white',
  
  
  borderRadius: 4,
  borderColor: 'rgba(0, 0, 0, 0.1)',
  height:412,
  
  width:343,
  marginLeft:'auto',
  marginRight:"auto",
  
  borderRadius:20
  
  },
  logoutbtn: {
  
  height: 49,
  borderRadius: 10,
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
  paddingBottom: 4,
  width:129,
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
  width:width*0.45
  
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
  
  
  subcont:{
    width:width*0.9,
    
    marginLeft:"auto",
    marginRight:'auto',
    marginTop:"5%"
  
  } ,
  maincont:{
    paddingBottom:"10%"
  },
  
  
        
  });