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
  import { Feather,Ionicons ,Entypo ,MaterialCommunityIcons,AntDesign,EvilIcons,MaterialIcons} from '@expo/vector-icons'; 
import { Navigation } from 'react-native-navigation';

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  
  
const Items = ({navigation}) => {
    const[Logoutmodal,setlogoutmodal]=useState(false);
    const[Offer,setoffers]=useState(false);
  return (

    <View style={styles.conatainer}>
       <StatusBar style="dark"/>
<NativeBaseProvider> 

<VStack style={{flex:0.15,backgroundColor:"#fff"}} shadow='2' pb='5%'>


<VStack mt='auto' space={3} >
<HStack>
<HStack  width='90%' mx='auto' space='2%'   >
                    <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.goBack()}} >
                    <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
                    </TouchableOpacity>
                    <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-3%",marginLeft:"2%"}}>
                    Tomato
        </Text>
              
                       <HStack ml='auto' space='3'>
                       <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate('Edit')}} >
                       <Feather name="edit" size={20} color="#37B3A9" />
                       </TouchableOpacity>
                       <TouchableOpacity activeOpacity={1} onPress={()=>{setlogoutmodal(true)}} >
                       
<MaterialIcons name="delete" size={22} color="#F24F4F" />
                       </TouchableOpacity>


                       </HStack>
                      </HStack>

</HStack>
</VStack>



</VStack>
<ScrollView style={{flex:1,}}>
<VStack style={{...styles.maincont}}  >
              
              <VStack style={{...styles.subcont}} space='3' >
              
          
         <TouchableOpacity activeOpacity={1} >

             
              <Box style={{...styles.Box,height:215}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' mt='2%'

  
>
<HStack  mx='auto' my='auto' >
    
<Image source={require('../Images/Fruits/tomato.png')}
style={{width:187,height:178}}
alt="des"
/>

</HStack>
</Box>
        </TouchableOpacity>          
                     
        <TouchableOpacity activeOpacity={1} >
              <Box style={{...styles.Box,height:50,borderRadius:20}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' 

  
>

<HStack width='90%' mx='auto' my='auto' justifyContent='space-between' >

<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
Unit : KG
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#37B3A9",}}>
Price : 2.50 JD
</Text>

</HStack>


</Box>
</TouchableOpacity>
        <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",}}>
        The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America. The Nahuatl word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived
        </Text>
                 
        <TouchableOpacity activeOpacity={1} onPress={()=>setoffers(true)} >
<LinearGradient
 colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
 start={{ x: 0, y: 0 }}
 end={{ x: 1, y: 1 }}
 style={{ ...styles.Btn,width:width*0.7,marginTop:"10%" }}
>
 <Text style={{ color: "white", fontFamily: 'arabicBold',fontSize:14  }}>Add Offers</Text>

 
</LinearGradient>
</TouchableOpacity>
                  </VStack>
                  </VStack>

</ScrollView>

<Modal isVisible={Logoutmodal} 
         
         avoidKeyboard={false}
         onBackButtonPress=  { () =>setlogoutmodal(false)}
       >
          <View style={styles.modalContentlogin}>
                   <VStack mx='auto'my='auto'>

                   <Text style={{fontFamily:'arabicRegular',fontSize:24,color:"#374151", marginLeft:"auto",marginRight:"auto" }}>
Are you sure 
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#6B7280", marginLeft:"auto",marginRight:"auto"}}>
you want Delete this item
</Text>

<HStack space='5%' mt='10%' >
<TouchableOpacity activeOpacity={1} onPress={()=>setlogoutmodal(false)}>
<LinearGradient
                       colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                       start={{ x: 0, y: 0 }}
                       end={{ x: 1, y: 1 }}
                       style={{ ...styles.logoutbtn }}
                   >
                       <Text style={{ color: "white", fontFamily: 'arabicBold', }}>No</Text>
                   </LinearGradient>
</TouchableOpacity>
 
                   <Button
                     style={{ ...styles.logoutbtn,backgroundColor:"#707070" }}
                     
                     onPress={()=>{setlogoutmodal(false),navigation.navigate('Allorder')} } 
                   >
<Text style={{ color: "white", fontFamily: 'arabicBold',marginTop:"-10%" }}>Yes</Text>
                   </Button>
               


</HStack>




                   </VStack>

         

   </View>
       </Modal>
 

       <Modal isVisible={Offer} style={styles.bottomModal}
           animationInTiming={300}
         animationOutTiming={600}
          backdropTransitionOutTiming={1000}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setoffers(false)}
        >
           <View style={styles.modalContent}>
           <TouchableOpacity activeOpacity={1} onPress={()=>{setoffers(false)}}>
              <VStack  mx='auto'  mt='5%'  width='20%'  borderTopWidth='8'  borderColor='gray.300'
               borderRadius='3xl'
              >

              </VStack>
              </TouchableOpacity>
               
              <ScrollView style={{flex:1,}}>
<VStack style={{...styles.maincont}}  >
              
              <VStack style={{...styles.subcont}}  >

              <Text style={{fontFamily:'arabicBold',fontSize:18,color:"#48B9B0", }}>
              Add Offers
        </Text>
             
        <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",}}>
 
        Discount Percentage
        </Text>

        <Input style={{height:45,fontSize:18,borderColor:"#DBDBDB"}} bgColor='white' borderWidth='2'  


  width='100%'
  placeholder='%20' 
  borderRadius='lg'

  InputRightElement={

    <AntDesign name="down" size={20} color="black"   />
  }

/>

<HStack justifyContent='space-between'>
        <VStack>

       <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",}}>
       Old Price
        </Text>
        
        <Input style={{height:45,borderRadius:4,backgroundColor:"#F1F1F1",borderColor:"#DBDBDB"}}  borderWidth='1'  
borderColor='gray.100' 
 width='32'
 placeholder=' JD : 10.00'

  
/>

    
    
  </VStack>
  <VStack>

<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151",}}>
New Price
 </Text>
 
 <Input style={{height:45,borderRadius:4,backgroundColor:"#F1F1F1",borderColor:"#DBDBDB"}}  borderWidth='1'  
borderColor='gray.100' 
width='32'
placeholder=' JD : 10.00'


/>



</VStack>


  
       </HStack>
         
              
       <TouchableOpacity activeOpacity={1} onPress={()=>setoffers(false)} >
<LinearGradient
 colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
 start={{ x: 0, y: 0 }}
 end={{ x: 1, y: 1 }}
 style={{ ...styles.Btn,width:width*0.7,marginTop:"10%" }}
>
 <Text style={{ color: "white", fontFamily: 'arabicBold',fontSize:14  }}>Save Offer</Text>

 
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

export default Items
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
  modalContent: {
    backgroundColor: 'white',
    width:width,
     height:height*0.5,
  
    
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    borderColor: 'rgba(0, 0, 0, 0.1)',

  },
  
        
  });