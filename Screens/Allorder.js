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
  
  
const Allorder = ({navigation}) => {
  return (

    <View style={styles.conatainer}>
       <StatusBar style="dark"/>
<NativeBaseProvider> 

<VStack style={{flex:0.3,backgroundColor:"#fff"}} shadow='2' pb='5%'>


<VStack mt='auto' space={3} >
<HStack  width='90%' mx='auto' space='2%'  >
                    <Center>
                    <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.goBack()}} >
                    <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
                    </TouchableOpacity>
                    </Center>
                    <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",marginLeft:"2%"}}>
                    All Items
        </Text>

        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#37B3A9",marginLeft:"auto"}}>
278 Items
</Text>
                      </HStack>




<VStack width='90%' mx='auto'>
<Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='search'
                  placeholderTextColor='#9CA3Af'
                
                  InputLeftElement={
                     
                    <EvilIcons name="search" size={24} color="gray" />
                  }  />


</VStack>
<HStack  width='90%'  mx='auto'  space='2' >
<TouchableOpacity activeOpacity={1} >

             
<Box style={{height:28,borderRadius:20,borderColor:'#FA9755'}} bgColor='white' borderWidth='1'  
 shadow='1' 


>
 <HStack my='auto' px='5%'  mx='auto'  >
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#FA9755",}}>
All
</Text>

     </HStack>   

</Box>
</TouchableOpacity>  
<TouchableOpacity activeOpacity={1} >

             
<Box style={{height:28,borderRadius:20,backgroundColor:"#E4E4E4"}}  
 shadow='1' 


>
 <HStack my='auto' px='5%'  mx='auto'  >
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
 Fruits
</Text>

     </HStack>   

</Box>
</TouchableOpacity>  
<TouchableOpacity activeOpacity={1} >

             
<Box style={{height:28,borderRadius:20,backgroundColor:"#E4E4E4"}}  
 shadow='1' 


>
 <HStack my='auto' px='5%'  mx='auto'  >
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
 Vegetables
</Text>

     </HStack>   

</Box>
</TouchableOpacity>          
            
    

    



</HStack>
</VStack>



</VStack>
<ScrollView style={{flex:1,}}>
<VStack style={{...styles.maincont}} >
              
              <VStack style={{...styles.subcont}} >
              
          
         <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Items')}   >

             
              <Box style={{...styles.Box,height:102}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='10%'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<Image source={require('../Images/Fruits/avacado.png')}
style={{width:102,height:81}}
alt="des"
/>

<VStack ml='2%'>
<HStack>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
Strawberry
</Text>

</HStack>

<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#A3A3A3",}}>
1 kg
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#48B9B0",}}>
2.50 JD
</Text>





</VStack>
<Center ml='auto' mb='auto'>
<Entypo name="dots-three-vertical" size={15} color="gray" />
</Center>

</HStack>
</Box>
        </TouchableOpacity>   
        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Items')}   >

             
              <Box style={{...styles.Box,height:102}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='10%'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<Image source={require('../Images/Fruits/mint.png')}
style={{width:102,height:81}}
alt="des"
/>

<VStack ml='2%'>
<HStack>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
mint
</Text>

</HStack>

<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#A3A3A3",}}>
1 kg
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#48B9B0",}}>
2.50 JD
</Text>





</VStack>
<Center ml='auto' mb='auto'>
<Entypo name="dots-three-vertical" size={15} color="gray" />
</Center>

</HStack>
</Box>
        </TouchableOpacity>   
        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Items')}   >

             
<Box style={{...styles.Box,height:102}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='10%'


>
<HStack width='90%' mx='auto' my='auto' space='2%'>

<Image source={require('../Images/Fruits/carrot.png')}
style={{width:102,height:81}}
alt="des"
/>

<VStack ml='2%'>
<HStack>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
carrot
</Text>

</HStack>

<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#A3A3A3",}}>
1 kg
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#48B9B0",}}>
2.50 JD
</Text>





</VStack>
<Center ml='auto' mb='auto'>
<Entypo name="dots-three-vertical" size={15} color="gray" />
</Center>

</HStack>
</Box>
</TouchableOpacity>   
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Items')}   >

             
<Box style={{...styles.Box,height:102}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='10%'


>
<HStack width='90%' mx='auto' my='auto' space='2%'>

<Image source={require('../Images/Fruits/potato.png')}
style={{width:102,height:81}}
alt="des"
/>

<VStack ml='2%'>
<HStack>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
potato
</Text>

</HStack>

<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#A3A3A3",}}>
1 kg
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#48B9B0",}}>
2.50 JD
</Text>





</VStack>
<Center ml='auto' mb='auto'>
<Entypo name="dots-three-vertical" size={15} color="gray" />
</Center>

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

export default Allorder
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