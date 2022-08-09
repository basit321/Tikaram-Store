import React from 'react';
import { useState,useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground,BackHandler, TouchableOpacity,Alert,ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Location,Bellicon,Payment,Shoppingcart,Heart,Info,Language,Phonecall,Email,Avatar
  ,Checkbox,Mark,Circles,Map_mark,Filledheart,AeroPlane,Hotels,Package,Files,Star

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
  
  
const Store = ({navigation}) => {
    const[Logoutmodal,setlogoutmodal]=useState(false);
    const[Changepassword,setchangepassword]=useState(false);
  return (

    <View style={styles.conatainer}>
       <StatusBar style="dark"/>
<NativeBaseProvider> 

<VStack style={{flex:0.15,backgroundColor:"#fff"}} shadow='2' pb='5%'>
<VStack mt='auto'>
<HStack  width='90%' mx='auto' space='2%'  mt='10%' >
                    <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.goBack()}} >
                    <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
                    </TouchableOpacity>
                    <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-5%",marginLeft:"2%"}}>
                    Store Profile
        </Text>
                      </HStack>



</VStack>
</VStack>
<ScrollView style={{flex:1,}}>
<VStack style={{...styles.maincont}} >
              
              <VStack style={{...styles.subcont}} >
              <Box style={{...styles.Box,height:112}} bgColor='white' borderWidth='1'  
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

<HStack space='2%'>
<Star/>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9E9E9E",marginTop:'-5%'}}>
4.8
</Text>
</HStack>


</VStack>


</HStack>
</Box>
       
<VStack borderBottomWidth='1'style={{borderColor:"#D6D6D6"}} pb='5%'>
     <VStack borderTopWidth='1' mt='5%' style={{borderColor:"#D6D6D6"}}>
       <HStack width='90%' mx='auto' mt='5%'>
       <Text style={{fontFamily:'avenirRegular',fontSize:15,color:"#374151"}}>
       Email : info@petrardie.com
</Text>
       </HStack>

</VStack>
<VStack borderTopWidth='1' mt='5%' style={{borderColor:"#D6D6D6"}}>
       <HStack width='90%' mx='auto' mt='5%'>
       <Text style={{fontFamily:'avenirRegular',fontSize:15,color:"#374151"}}>
       Phone : +962 79 999 9999
</Text>
       </HStack>

</VStack>
<VStack borderTopWidth='1' mt='5%' style={{borderColor:"#D6D6D6"}}>
       <HStack width='90%' mx='auto' mt='5%'>
       <Text style={{fontFamily:'avenirRegular',fontSize:15,color:"#374151"}}>
       National ID : 9990000000
</Text>
       </HStack>

</VStack>
<VStack borderTopWidth='1' mt='5%' style={{borderColor:"#D6D6D6"}}>
       <HStack width='90%' mx='auto' mt='5%'>
       <Text style={{fontFamily:'avenirRegular',fontSize:15,color:"#374151"}}>
       Gender : Male
</Text>
       </HStack>

</VStack>
<VStack borderTopWidth='1' mt='5%' style={{borderColor:"#D6D6D6"}}>
       <HStack width='90%' mx='auto' mt='5%'>
       <Text style={{fontFamily:'avenirRegular',fontSize:15,color:"#374151"}}>
       Area : Jordan
</Text>
       </HStack>

</VStack>
</VStack>
<TouchableOpacity  activeOpacity={1}  style={{ ...styles.loginBtn ,marginTop:'15%' }} 
                onPress={()=>setchangepassword(true)}>
                    <Text style={{ color: '#8A8A8A', fontFamily: 'arabicBold' }}>Change Password</Text>
                </TouchableOpacity>

                  </VStack>
                  </VStack>

</ScrollView>


<Modal isVisible={Changepassword} style={styles.bottomModal}
           animationInTiming={300}
         animationOutTiming={600}
          backdropTransitionOutTiming={1000}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setchangepassword(false)}
        >
           <View style={styles.modalContent}>
           <TouchableOpacity activeOpacity={1} onPress={()=>{setchangepassword(false)}}>
              <VStack  mx='auto'  mt='5%'  width='20%'  borderTopWidth='8'  borderColor='gray.300'
               borderRadius='3xl'
              >

              </VStack>
              </TouchableOpacity>
               
              <ScrollView style={{flex:1,}}>
<VStack style={{...styles.maincont}}  >
              
<VStack width='90%' mx='auto'>
           <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#374151", }}>
 Change Password
</Text>
<TouchableOpacity activeOpacity={1} onPress={()=>setchangepassword(false)}>
<VStack ml='auto' mt='-5%'>
<Entypo name="cross" size={30} color="#C4C4C4"  />

</VStack>
</TouchableOpacity>
<VStack >
               
               <VStack mt='3%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                    Old Password
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='**** **** ****'
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  
                />


               </VStack>
                
               <VStack mt='3%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                   New Password
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='*** **** ****'
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                 
                  
                />


               </VStack>
                
               <VStack mt='3%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                    Confirm New Password
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='*** **** ****'
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                
                />


               </VStack>
                
           
            </VStack>
            <TouchableOpacity activeOpacity={1} onPress={()=>setchangepassword(false)}>
            <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn, width:256, marginLeft:'auto',marginRight:"auto",marginTop:'7%' }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Change </Text>
                    </LinearGradient>
                    </TouchableOpacity>
</VStack>

                  </VStack>
                  </ScrollView>
              

    </View>
        </Modal>
    </NativeBaseProvider>
    </View>


  )
}

export default Store
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
  
  borderWidth: 2,
  borderColor: '#8A8A8A',
  paddingBottom: 4,
  width:width*0.7,
  marginLeft:"auto",
  marginRight:'auto',
  
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
  modalContent: {
    backgroundColor: 'white',
    width:width,
     height:height*0.6,
  
    
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    borderColor: 'rgba(0, 0, 0, 0.1)',

  },
  
  
        
  });