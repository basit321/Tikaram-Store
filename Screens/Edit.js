import React from 'react';
import { useState,useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground,BackHandler, TouchableOpacity,Alert,ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Location,Bellicon,Payment,Shoppingcart,Heart,Info,Language,Phonecall,Email,Avatar
  ,Checkbox,Mark,Circles,Map_mark,Filledheart,AeroPlane,Hotels,Package,Files

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
  import { Feather,Ionicons ,Entypo ,MaterialCommunityIcons,AntDesign,EvilIcons,MaterialIcons} from '@expo/vector-icons'; 
import { Navigation } from 'react-native-navigation';

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  
  
const Edit = ({navigation}) => {
    const[Logoutmodal,setlogoutmodal]=useState(false);
  return (

    <View style={styles.conatainer}>
       <StatusBar style="dark"/>
<NativeBaseProvider> 

<VStack style={{flex:0.15,backgroundColor:"#fff"}} shadow='2' pb='5%'>


<VStack mt='auto' space={3} >
<HStack>
<HStack  width='90%' mx='auto' space='2%'   >
                    
                    <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",}}>
                    Edit Item
        </Text>
              
                       <HStack ml='auto' >
                       <TouchableOpacity activeOpacity={1} onPress={()=>navigation.goBack()}>
                          
                       <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#FF4C4C",}}>
                    Cancel
        </Text> 
</TouchableOpacity>
                       </HStack>
                      </HStack>

</HStack>
</VStack>



</VStack>
<ScrollView style={{flex:1,}}>
<VStack style={{...styles.maincont}} >
              
              <VStack style={{...styles.subcont}} >
              
                  <HStack width='99%' mx='auto' space='3' >
                    
                  <Box style={{...styles.Box,height:110,width:width*0.3,backgroundColor:"#00CBA4"}}  
 shadow='2' 


>

    <VStack mx='auto' my='auto'>
        <Files style={{ marginLeft:"auto",marginRight:"auto"}}/> 
        <Text style={{fontFamily:'arabicBold',fontSize:14,color:"#fff",}}>
        Add Photo
        </Text>

    </VStack>
    </Box>
    <Box style={{...styles.Box,height:110,width:width*0.3,backgroundColor:"#fff"}}  
 shadow='2' 


>

    <VStack mx='auto' my='auto'>
       <Image
        style={{width:67,height:64}}
          source={require('../Images/Fruits/tomato.png')}
          alt='21231'
       />

    </VStack>
    </Box>

      
 
      

                  </HStack>
                   
                <VStack  mx='auto' mt='2%'>

                <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",}}>
                    Tittle
        </Text>
              
                       
        <Input style={{height:45,borderRadius:4,fontSize:18}} bgColor='white' borderWidth='1'  
borderColor='gray.50' 

  width='100%'
  placeholder='Tomato'
/>

<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",}}>
Description 
        </Text>
        <TextArea style={{height:158,borderRadius:4,fontSize:18}} bgColor='white' borderWidth='1'  
borderColor='gray.50' 

  width='100%'
  placeholder='The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America. '
/>    
  
<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",}}>
Select Category
        </Text>
        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Selectcategory')}>
        <Box style={{...styles.Box,height:45,borderRadius:4}} bgColor='white' borderWidth='1'  
borderColor='gray.50' 

  
>

    <HStack mx='auto' my='auto' justifyContent='space-between'  width='90%'>

    <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",marginTop:"-2%"}}>
    Fruits & vegetables
        </Text>
        <Center>
        <MaterialIcons name="navigate-next" size={24} color="black" />
        </Center>


    </HStack>
    </Box>
     </TouchableOpacity>
     <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",}}>
 Select Sub Category
        </Text>
        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Selctsub')}>
        <Box style={{...styles.Box,height:45,borderRadius:4}} bgColor='white' borderWidth='1'  
borderColor='gray.50' 

  
>

    <HStack mx='auto' my='auto' justifyContent='space-between'  width='90%'>

    <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",marginTop:"-2%"}}>
    vegetables
        </Text>
        <Center>
        <MaterialIcons name="navigate-next" size={24} color="black" />
        </Center>


    </HStack>
    </Box>
     </TouchableOpacity>
                </VStack>

       <HStack justifyContent='space-between'>
        <VStack>

       <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",}}>
       Unit
        </Text>
        
        <Box style={{...styles.Box,height:45,borderRadius:4, width:width*0.4}} bgColor='white' borderWidth='1'  
borderColor='gray.50' 

  
>

    <HStack mx='auto' my='auto' justifyContent='space-between'  width='90%'>

    <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",marginTop:"-2%"}}>
    KG
        </Text>
        <Center>
        <AntDesign name="down" size={20} color="black" />
        </Center>


    </HStack>
    </Box>
  </VStack>
  <VStack>
       <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",}}>
       Price
        </Text>
        
        <Box style={{...styles.Box,height:45,borderRadius:4, width:width*0.4}} bgColor='white' borderWidth='1'  
borderColor='gray.50' 

  
>

    <HStack mx='auto' my='auto' justifyContent='space-between'  width='90%'>

    <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",marginTop:"-2%"}}>
    2.00
        </Text>
        <Center>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",marginTop:"-2%"}}>
        JOD
        </Text>
        </Center>


    </HStack>
    </Box>
  </VStack>
       </HStack>
                    
       <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Items')} >
<LinearGradient
 colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
 start={{ x: 0, y: 0 }}
 end={{ x: 1, y: 1 }}
 style={{ ...styles.Btn,width:width*0.7,marginTop:"5%" }}
>
 <Text style={{ color: "white", fontFamily: 'arabicBold',fontSize:14  }}>Save</Text>

 
</LinearGradient>
</TouchableOpacity>
                  </VStack>
                  </VStack>

</ScrollView>


    </NativeBaseProvider>
    </View>


  )
}

export default Edit
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