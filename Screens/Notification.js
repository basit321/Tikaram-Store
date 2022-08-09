import React from 'react';
import { useState,useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground,BackHandler, TouchableOpacity,Alert, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Location,Bellicon,Payment,Shoppingcart,Heart,Info,Language,Phonecall,Email,Avatar
  ,Checkbox,Mark,Circles,Map_mark,Filledheart

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
  import { Feather,Ionicons ,Entypo ,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'; 

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  
  
  

const Notification = ({navigation}) => {
   
  



   
  return (
    <View style={styles.conatainer}>
       <StatusBar style="dark"/>
<NativeBaseProvider> 

<View>

<Header containerStyle={{  borderWidth:0 }}

     backgroundColor="#fff"
     

     
    
 
centerComponent={
<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#37B3A9"}}>
Notification
</Text>

}

/>
</View>
<ScrollView style={{flex:1}} >

<VStack style={{...styles.maincont}} >
              
              <VStack style={{...styles.subcont}}>
               <LinearGradient
                        colors={['#37B3A9',  '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold',fontSize:16 }}>20-10-2020</Text>
                    </LinearGradient>
                  
          
          
                    <Box style={{...styles.Box1}} bgColor='white' borderWidth='1'
                    shadow='2' mt='5%' 
                    
                    >
                      <VStack width='90%' mx='auto'>
                      <Text style={{fontFamily:'arabicBold',fontSize:18,color:"#37B3A9"}}>
                      Notification Subject
</Text>                 
<Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,}} >
notification text …
                </Text>

                      </VStack>
                  </Box>
                  <Box style={{...styles.Box}} bgColor='white' borderWidth='1'
                    shadow='2' mt='5%' 
                    
                    >
                      <VStack width='90%' mx='auto'>
                      <Text style={{fontFamily:'arabicBold',fontSize:18,color:"#374151"}}>
                      Notification Subject
</Text>                 
<Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,}} >
notification text …
                </Text>

                      </VStack>
                  </Box>
                  <Box style={{...styles.Box}} bgColor='white' borderWidth='1'
                    shadow='2' mt='5%' 
                    
                    >
                      <VStack width='90%' mx='auto'>
                      <Text style={{fontFamily:'arabicBold',fontSize:18,color:"#374151"}}>
                      Notification Subject
</Text>                 
<Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,}} >
notification text …
                </Text>

                      </VStack>
                  </Box>
                  </VStack>
                  <VStack style={{...styles.subcont}}>
               <LinearGradient
                        colors={['#37B3A9',  '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', fontSize:16}}>20-10-2021</Text>
                    </LinearGradient>
                  
          
          
                    <Box style={{...styles.Box1}} bgColor='white' borderWidth='1'
                    shadow='2' mt='5%' 
                    
                    >
                      <VStack width='90%' mx='auto'>
                      <Text style={{fontFamily:'arabicBold',fontSize:18,color:"#37B3A9"}}>
                      Notification Subject
</Text>                 
<Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,}} >
notification text …
                </Text>

                      </VStack>
                  </Box>
                  <Box style={{...styles.Box}} bgColor='white' borderWidth='1'
                    shadow='2' mt='5%' 
                    
                    >
                      <VStack width='90%' mx='auto'>
                      <Text style={{fontFamily:'arabicBold',fontSize:18,color:"#374151"}}>
                      Notification Subject
</Text>                 
<Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,}} >
notification text …
                </Text>

                      </VStack>
                  </Box>
                  <Box style={{...styles.Box}} bgColor='white' borderWidth='1'
                    shadow='2' mt='5%' 
                    
                    >
                      <VStack width='90%' mx='auto'>
                      <Text style={{fontFamily:'arabicBold',fontSize:18,color:"#374151"}}>
                      Notification Subject
</Text>                 
<Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,}} >
notification text …
                </Text>

                      </VStack>
                  </Box>
                  </VStack>
                
</VStack>



</ScrollView>

</NativeBaseProvider>




       
    </View>
  )
}

export default Notification
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:"#F6F6F6"
    
        
    },
    
    slidemodel:{
    
      
      margin: 0,
      
      width: width,
  height: height  
  
  
},
    
createBtn: {
  
  height: 49,
  borderRadius: 30,
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
  paddingBottom: 4,
  width:width*0.5,
  marginLeft:"auto",
  marginRight:'auto'
},  
loginBtn: {
  
  height: 49,
  borderRadius: 10,
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',

  borderWidth: 1,
  borderColor: '#37B3A9',
  paddingBottom: 4
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


      
      });