

import React from 'react';
import { useState,useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity,Alert,ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Card} from '../Components/Icons'

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
  

  } from "native-base"
  import Modal from 'react-native-modal'; 

  import { Ionicons } from '@expo/vector-icons';

import Logo from "../Components/Logo"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;





const Userapp =({navigation})=> {
    
const[visible,setvisible]=useState(false);
const[loginvisible,selogintvisible]=useState(false);
const[createaccount,setcreateaccount]=useState(true);
const[modallogin,setmodallogin]=useState(false);

const[Otpmodal,setotpmodal]=useState(false);




  const navigatedelay=()=>{
 
    
 
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      
        setmodallogin(false)
      
        setotpmodal(false)
    
 
 
  }

  
  
    return (
        <NativeBaseProvider>
            
             <StatusBar style="auto" />
        <ImageBackground source={require('../Images/gradient.png')} style={{flex: 1,
            width: width,
            height: height * 1.1,
            alignItems: 'center',
            justifyContent: 'center',
            
          
            }}
            alt="description of image"   
            
            >
    
            <VStack mb='15%' mr='10%'>
                <Logo />
            </VStack>
            <TouchableOpacity activeOpacity={1} style={styles.box} onPress={()=>{setmodallogin(true)}}>
                <View style={{ ...styles.textContainer }}>
                    <Text style={{ fontFamily: 'arabicRegular', fontSize: 24, marginBottom: 7 }}>
                        Welcome
                    </Text>
                    <Text style={{ fontFamily: 'arabicRegular', color: "#4B5563", fontSize: 14, lineHeight: 15 }}>
                        Before enjoying Tikramm services
                    </Text>
                    <Text style={{ fontFamily: 'arabicRegular', color: "#4B5563", fontSize: 14, lineHeight: 15 }}>
                        Please register first
                    </Text>
                </View>
               
            </TouchableOpacity>
           
        </ImageBackground>

        

        <Modal isVisible={modallogin} style={styles.slidemodel}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={300}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setmodallogin(false)}
        >
           <ScrollView style={{

backgroundColor: 'white',
flex:1,



borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>
            
            <VStack style={{marginTop:"10%",height:height}} mx='auto' >
            
             
                <Text style={{fontFamily: 'arabicRegular',fontSize:18 ,color:"#374151" ,}} >
                    Login
                </Text>
                   <Card style={{width:width*0.9,marginTop:"5%"}}/>


                <VStack style={{...styles.form}} mx='auto'>
               
               
               <VStack mt='3%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                   Phone Number 
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='+92012010213'
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  InputLeftElement={<Image
                  
                   source={require("../Images/uae.png")}
                     style={{width:25,height:17.3}}
                     ml='2%'
                     alt="description of image"

                  />}
                  
                />


               </VStack>
                
               
               <VStack mt='3%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                    Password
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='********S '
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  type='password'
                  
                
                  
                />
                                    <HStack ml='auto'>
                <TouchableOpacity activeOpacity={1}  >
                 <Text style={{fontFamily: 'arabicRegular',fontSize:12,color:"#59A599"}} >
                    Forget Password ?
                </Text>
                   </TouchableOpacity> 
                 </HStack>


               </VStack>
              <TouchableOpacity activeOpacity={1} onPress={()=>{setotpmodal(true)}} style={{marginTop:'30%'}}>
               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Login</Text>
                    </LinearGradient>
</TouchableOpacity>
            </VStack>
            

                
             

            </VStack>

    </ScrollView>
        </Modal>


        
        <Modal isVisible={Otpmodal} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setotpmodal(false)}
        >
           <ScrollView style={{

backgroundColor: 'white',
flex:1,
padding: 22,

borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>
            <VStack style={{marginTop:24,paddingBottom:"5%"}}>
            <TouchableOpacity activeOpacity={1} onPress={()=>setotpmodal(false)} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
            </TouchableOpacity>
          
             <VStack style={{marginTop:12}}>
                <Text style={{fontFamily: 'arabicRegular',fontSize:24 ,color:"#374151" ,}} >
                    Enter the code 
                </Text>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#9CA3AF" ,}} >
                    Enter the code we  send to your {'\n'}phone please check and fill it
                </Text>
                  

                 <VStack mt='5%'>
                  <HStack justifyContent='space-between'>
                  <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af",fontSize:21
                 ,fontFamily: 'robotoRegular',textAlign:"center"}}
                  placeholder=' 1 '
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  width='20%'
                   py='20%'
                   keyboardType='decimal-pad'
                
                  
                />
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af",fontSize:21
                 ,fontFamily: 'robotoRegular',textAlign:"center"}}
                  placeholder=' 1 '
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  width='20%'
                   py='20%'
                   keyboardType='decimal-pad'
                
                  
                />
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af",fontSize:21
                 ,fontFamily: 'robotoRegular',textAlign:"center"}}
                  placeholder=' 1 '
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  width='20%'
                   py='20%'
                   keyboardType='decimal-pad'
                
                  
                /><Input
                borderRadius='xl'
                style={{borderColor:"#BEC5D1",color:"#9CA3Af",fontSize:21
                ,fontFamily: 'robotoRegular',textAlign:"center"}}
                 placeholder=' 1 '
                 placeholderTextColor='#9CA3Af'
                 mt='3%'
                 width='20%'
                  py='20%'
                  keyboardType='decimal-pad'
               
                 
               />
                </HStack>
      
               </VStack>
                
             </VStack>
              
             <VStack mt='90%'>
             <Text style={{fontFamily: 'arabicRegular',fontSize:17
      ,color:'#9CA3AF',marginLeft:"auto",marginRight:"auto"}} >
                    I didnt receive the code  {'\n         '}
                    <Text style={{color:'#37B3A9'}}>
                     Resend code 
                    </Text>
                </Text>
                <TouchableOpacity activeOpacity={1} onPress={()=>  {navigation.navigate('Dashboard'),navigatedelay()} }>

               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Keep going</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                  </VStack>
            

            </VStack>

    </ScrollView>
        </Modal>
        </NativeBaseProvider>
    );
}
export default Userapp;
const styles = StyleSheet.create({
    backImage: {
        flex: 1,
        width: width,
        height: height * 1.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:"auto",
        marginBottom:"auto"
       
    },
    box: {
        borderRadius: 10,
        backgroundColor: "#fff",
        textAlign: 'center',
        alignItems: 'center',
        width: width * 0.9,
        height: height * 0.4
    },
    createBtn: {
        width: width * 0.6,
        height: 40,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        paddingBottom: 4
    },
    loginBtn: {
        width: width * 0.6,
        height: 40,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 1,
        borderColor: '#37B3A9',
        paddingBottom: 4
    },
    
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
    position:"absolute",
    width: width,
height: height  

  
  },

  slidemodel:{
    
        justifyContent: 'flex-end',
        margin: 0,
        
        width: width,
    height: height  
    
    
  },
  slidemodelcontent:{
    backgroundColor: 'white',
    flex:1,
    padding: 22,
   
    borderRadius: 0,
    borderColor: 'rgba(0, 0, 0, 0.1)',



  },

  modalContent: {
    backgroundColor: 'white',
    flex:1,
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    borderColor: 'rgba(0, 0, 0, 0.1)',

  },
  createaccountmodel:{

    backgroundColor: 'white',
    
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height:"40%",

  },
  child: {
    flex: 1,
    width: width,
    height: height * 1.1,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  Btn: {
    
    height: 49,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 4,
    marginTop:"10%",

    marginLeft:"auto" ,
    marginRight:"auto",
    width:width*0.7
    
},
form:{
  width:width*0.9
}
   
});
