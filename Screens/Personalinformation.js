import React from 'react';
import { useState,useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground,BackHandler, TouchableOpacity,Alert,ScrollView } from 'react-native';


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
  import { Feather,Ionicons ,Entypo ,MaterialCommunityIcons,AntDesign,EvilIcons,MaterialIcons,FontAwesome5,FontAwesome} from '@expo/vector-icons'; 
import { Navigation } from 'react-native-navigation';

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  
  
const Personalinformation = ({navigation}) => {
    const[Logoutmodal,setlogoutmodal]=useState(false);
  return (

    <View style={styles.conatainer}>
       <StatusBar style="dark"/>
<NativeBaseProvider> 

<Header containerStyle={{elevation: 10, // remove shadow on Android
        shadowOpacity: 3, // remove shadow on iOS
        borderBottomWidth: 0,
        shadow:9,
      
        opacity:0.9,
        height:"15%",
  
      
       }}

     backgroundColor={'#fff'}
     

     
    
      leftComponent={

<TouchableOpacity  activeOpacity={1}   onPress={() => setlogoutmodal(true)}  >

<Entypo name="menu" size={40} color="black" />

</TouchableOpacity   >


   
}
centerComponent={<Heading color='black' fontSize='3xl'>
Profile
</Heading>}
/>


<ScrollView style={{flex:1,}}>
<VStack style={{...styles.maincont}} >
              
              <VStack style={{...styles.subcont}} >
              
                  <HStack width='99%' mx='auto' space='6' >
                    
                  <Box style={{...styles.Box,height:120,width:width*0.3,backgroundColor:"#fff"}}  
 shadow='2' 


>

    <VStack mx='auto' my='auto'>
    <FontAwesome name="user-circle-o" size={50} color="black" />

    </VStack>
    </Box>
<Center>
    <Heading color='black' fontSize='2xl'>
Shahzaib
</Heading>
 </Center>
      

                  </HStack>
                  <VStack mt='5%'>
                  <Heading color='red.600' fontSize='2xl'>
Personal Infromation
</Heading> 
<VStack >
 <VStack mt='4%'>
<Text style={{fontSize:20}}>
Id
</Text>

<Input style={{borderBottomWidth:1,borderColor:"gray",fontWeight:"bold"}} borderWidth='0' 
borderColor='gray.50' 
mt='1%' 
fontSize='lg'
placeholder='Enter Id'
/>

 </VStack>
 <VStack mt='4%'>
<Text style={{fontSize:20}}>
Email
</Text>

<Input style={{borderBottomWidth:1,borderColor:"gray",fontWeight:"bold"}} borderWidth='0' 
borderColor='gray.50' 
mt='1%' 
fontSize='lg'
placeholder='Enter Email'
/>

 </VStack>
  <VStack mt='4%'>
<Text style={{fontSize:20}}>
Password
</Text>

<Input style={{borderBottomWidth:1,borderColor:"gray",fontWeight:"bold"}} borderWidth='0' 
borderColor='gray.50' 
mt='1%' 
fontSize='lg'
placeholder='Enter Password'
type='password'
/>

 </VStack>

 <VStack mt='4%'>
<Text style={{fontSize:20}}>
Phone Number
</Text>

<Input style={{borderBottomWidth:1,borderColor:"gray",fontWeight:"bold"}} borderWidth='0' 
borderColor='gray.50' 
mt='1%' 
fontSize='lg'
placeholder='Enter PhoneNumber'
/>

 </VStack>

 <VStack mt='4%'>
<Text style={{fontSize:20}}>
Show Referral Url 
</Text>

<Input style={{borderBottomWidth:1,borderColor:"gray",fontWeight:"bold"}} borderWidth='0' 
borderColor='gray.50' 
mt='1%' 
fontSize='lg'
placeholder='Enter Url'
/>

 </VStack>
 <VStack mt='4%'>
<Text style={{fontSize:20}}>
Id number
</Text>

<Input style={{borderBottomWidth:1,borderColor:"gray",fontWeight:"bold"}} borderWidth='0' 
borderColor='gray.50' 
mt='1%' 
fontSize='lg'
placeholder='Enter number'
/>

 </VStack>
 <VStack mt='4%'>
<Text style={{fontSize:20}}>
Joined At 
</Text>

<Input style={{borderBottomWidth:1,borderColor:"gray",fontWeight:"bold"}} borderWidth='0' 
borderColor='gray.50' 
mt='1%' 
fontSize='lg'
placeholder='Enter date'
/>

 </VStack>
 <VStack mt='4%'>
<Text style={{fontSize:20}}>
    Active contract
</Text>

<Input style={{borderBottomWidth:1,borderColor:"gray",fontWeight:"bold"}} borderWidth='0' 
borderColor='gray.50' 
mt='1%' 
fontSize='lg'
placeholder='Enter date'
/>

 </VStack>

 <Heading color='black' fontSize='2xl' mt='5%' fontWeight='medium'>
Documents
</Heading>
<Text style={{fontSize:20,marginTop:"5%"}}>
No documents uploaded
</Text>

<Heading color='red.700' fontSize='2xl' mt='5%' >
Add new  Documents +
</Heading>
</VStack>
     </VStack>           
                  </VStack>
                  </VStack>

</ScrollView>


<Modal isVisible={Logoutmodal} style={styles.slidemodel}
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={600}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setlogoutmodal(false)}
        >
           <ScrollView style={{

backgroundColor: 'white',
flex:1,

width:width*0.8,

borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>

         <TouchableOpacity style={{width:width,height:height,}} 
         
         activeOpacity={1}  onPress={()=> setlogoutmodal(false)}    >
            
         <VStack mt='10%' width='95%'  mx='auto'>
          
         <Heading color='black' fontSize='2xl' mt='5%' >
Shahzaib
</Heading>
<Heading color='red.600' fontSize='2xl' mt='4%'>
My Profile
</Heading> 
<VStack width='95%' mx='auto'>
<Text style={{fontSize:20,marginTop:"5%"}}>
Available Shifts
</Text>
<Text style={{fontSize:20,marginTop:"5%"}}>
My Shifts
</Text>
<Text style={{fontSize:20,marginTop:"5%"}}>
Absences
</Text>
<Text style={{fontSize:20,marginTop:"5%"}}>
Inbox
</Text>
<Text style={{fontSize:20,marginTop:"5%"}}>
    Payments
</Text>
<Text style={{fontSize:20,marginTop:"5%"}}>
    Referred a friend
</Text>
<Text style={{fontSize:20,marginTop:"5%"}}>
Performance
</Text>

<Text style={{fontSize:20,marginTop:"5%"}}>
Tutorail
</Text>

<Text style={{fontSize:20,marginTop:"5%"}}>
Rider Support 
</Text>
<Text style={{fontSize:20,marginTop:"5%"}}>
Privacy Policy
</Text>
<Text style={{fontSize:20,marginTop:"5%"}}>
Settings 
</Text>

<Heading color='red.700' fontSize='2xl' mt='5%' >
Logout
</Heading>




</VStack>
         </VStack>

            </TouchableOpacity>   
            
    </ScrollView>
        </Modal>



    </NativeBaseProvider>
    </View>


  )
}

export default Personalinformation
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