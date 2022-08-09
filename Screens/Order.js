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
  
  
  


const Order = ({navigation}) => {
  const[Currentorder,setcurrentorder]=useState(true);
  const[Previousorder,setpreviousorder]=useState(false);

  useEffect(() => {
   setcurrentorder(true);
   setpreviousorder(false);
  },[]);

  return (
    <View style={styles.conatainer}>
       <StatusBar style="dark"/>
<NativeBaseProvider> 

<VStack style={{flex:0.45,backgroundColor:"#fff"}} shadow='2'>

<Header containerStyle={{  borderWidth:0 }}

     backgroundColor={"#fff"}
     

     
    
    
centerComponent={
<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#37B3A9"}}>
New Orders
</Text>

}

/>
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
<HStack mt='auto' justifyContent='space-between'>

<VStack borderBottomWidth={Currentorder?'4':'0'} width='40%' pb='3%' style={{borderColor:Currentorder?"#37B3A9":'#89909E'}}>
           <TouchableOpacity activeOpacity={1}  onPress={()=>{setcurrentorder(!Currentorder),setpreviousorder(!Previousorder)}}>
              <Center>
              <Text style={{fontSize:18,color:Currentorder?"#37B3A9":'#89909E',fontFamily: 'arabicRegular'}} >
              New Orders
              </Text>
</Center>
</TouchableOpacity>
             </VStack>
             <VStack borderBottomWidth={Previousorder?'4':'0'} width='43%' pb='3%' style={{borderColor:Previousorder?"#37B3A9":'#89909E'}}>
           <TouchableOpacity activeOpacity={1} onPress={()=>{setpreviousorder(!Previousorder),setcurrentorder(!Currentorder)}}>
              <Center>
              <Text style={{fontSize:18,color:Previousorder?"#37B3A9":'#89909E',fontFamily: 'arabicRegular'}} >
              Pending Orders
              </Text>
</Center>
</TouchableOpacity>
             </VStack>
             
             
           
</HStack>
</VStack>

{Currentorder?(
<ScrollView style={{flex:1,}}>
<VStack style={{...styles.maincont}} >
              
              <VStack style={{...styles.subcont}}>
              
          
          
                    <Box style={{...styles.Box,height:458}} bgColor='white' borderWidth='1'
                    shadow='2' mt='5%' 
                    
                    >
                      <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('RecieptOrder')}>
                      <VStack pb='3%' borderBottomWidth='1' style={{borderColor:'#E1E1E1'}} >
                      
                     
                        <HStack width='90%' mx='auto'>
                      <Box style={{width:60,height:60,borderColor:"#fff"}} bgColor='white' borderWidth='1'
                    shadow='2' mt='5%'borderRadius='full'
                   
                    >
                   <Image
                   source={require('../Images/pic.png')}
                   style={{width:31.57,height:44.2}}
                   mx='auto'
                   my='auto'
                   alt='123'
                   />

                    </Box>
                    <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,marginTop:"8%" , marginLeft:"5%"}} >
                    Mahmoud Alatour
                </Text>
                <Center ml='auto' mt='10%'>
                <AntDesign name="arrowright" size={20} color="#374151" /> 
                </Center>
                      </HStack>
                      <HStack justifyContent='space-between' width='90%'  mx='auto' mt='5%'>
                        <VStack>
                      <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,}} >
                      Order Date
                </Text>
                <Text style={{fontFamily: 'arabicRegular',fontSize:12 ,color:"#9E9E9E" }} >
                19 -10- 2020- 02:00AM
                </Text>
                

</VStack>
<VStack>
                      <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" }} >
                      Order Number
                </Text>
                <Text style={{fontFamily: 'arabicRegular',fontSize:12 ,color:"#9E9E9E" }} >
                12739430493
                </Text>
                

</VStack>

                      </HStack>
                    </VStack>
                    </TouchableOpacity>
                     <VStack pb='3%' borderBottomWidth='1' style={{borderColor:'#E1E1E1'}}>
                     <VStack width='90%' mx='auto' mt='5%' space='3'>
                     <HStack justifyContent='space-between'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", }}>
         Food name 
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F", }}>
         2.30JD 
        </Text> 
                </HStack>
                <HStack justifyContent='space-between'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", }}>
         Food name 
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F"}}>
         2.30JD 
        </Text> 
                </HStack>
                <HStack justifyContent='space-between'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151" }}>
         Food name 
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F", }}>
         2.30JD 
        </Text> 
                </HStack>
                <HStack justifyContent='space-between'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", }}>
         Food name 
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F",}}>
         2.30JD 
        </Text> 
                </HStack>
                <HStack justifyContent='space-between'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151"}}>
         All
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151"}}>
        Total : 120 JOD
        </Text> 
                </HStack>



                     </VStack>
                     </VStack>
                       <HStack mt='5%' justifyContent='space-between' width='90%' mx='auto'>

                       <TouchableOpacity activeOpacity={1} >
                    <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold',fontSize:14 }}>Accept</Text>
                    </LinearGradient>
                      </TouchableOpacity>
                       <TouchableOpacity  activeOpacity={1}  style={{ ...styles.loginBtn }}>
                    <Text style={{ color: '#C40000', fontFamily: 'arabicBold' }}>Reject</Text>
                </TouchableOpacity>
               
                       </HStack>

                  </Box>
                  <Box style={{...styles.Box,height:458}} bgColor='white' borderWidth='1'
                    shadow='2' mt='5%' 
                    
                    >
                      <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('RecieptOrder')}>
                      <VStack pb='3%' borderBottomWidth='1' style={{borderColor:'#E1E1E1'}} >
                      
                     
                        <HStack width='90%' mx='auto'>
                      <Box style={{width:60,height:60,borderColor:"#fff"}} bgColor='white' borderWidth='1'
                    shadow='2' mt='5%'borderRadius='full'
                   
                    >
                   <Image
                   source={require('../Images/pic.png')}
                   style={{width:31.57,height:44.2}}
                   mx='auto'
                   my='auto'
                   alt='123'
                   />

                    </Box>
                    <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,marginTop:"8%" , marginLeft:"5%"}} >
                    Mahmoud Alatour
                </Text>
                <Center ml='auto' mt='10%'>
                <AntDesign name="arrowright" size={20} color="#374151" /> 
                </Center>
                      </HStack>
                      <HStack justifyContent='space-between' width='90%'  mx='auto' mt='5%'>
                        <VStack>
                      <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,}} >
                      Order Date
                </Text>
                <Text style={{fontFamily: 'arabicRegular',fontSize:12 ,color:"#9E9E9E" }} >
                19 -10- 2020- 02:00AM
                </Text>
                

</VStack>
<VStack>
                      <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" }} >
                      Order Number
                </Text>
                <Text style={{fontFamily: 'arabicRegular',fontSize:12 ,color:"#9E9E9E" }} >
                12739430493
                </Text>
                

</VStack>

                      </HStack>
                    </VStack>
                    </TouchableOpacity>
                     <VStack pb='3%' borderBottomWidth='1' style={{borderColor:'#E1E1E1'}}>
                     <VStack width='90%' mx='auto' mt='5%' space='3'>
                     <HStack justifyContent='space-between'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", }}>
         Food name 
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F", }}>
         2.30JD 
        </Text> 
                </HStack>
                <HStack justifyContent='space-between'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", }}>
         Food name 
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F"}}>
         2.30JD 
        </Text> 
                </HStack>
                <HStack justifyContent='space-between'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151" }}>
         Food name 
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F", }}>
         2.30JD 
        </Text> 
                </HStack>
                <HStack justifyContent='space-between'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", }}>
         Food name 
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F",}}>
         2.30JD 
        </Text> 
                </HStack>
                <HStack justifyContent='space-between'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151"}}>
         All
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151"}}>
        Total : 120 JOD
        </Text> 
                </HStack>



                     </VStack>
                     </VStack>
                       <HStack mt='5%' justifyContent='space-between' width='90%' mx='auto'>

                       <TouchableOpacity activeOpacity={1} >
                    <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold',fontSize:14 }}>Accept</Text>
                    </LinearGradient>
                      </TouchableOpacity>
                       <TouchableOpacity  activeOpacity={1}  style={{ ...styles.loginBtn }}>
                    <Text style={{ color: '#C40000', fontFamily: 'arabicBold' }}>Reject</Text>
                </TouchableOpacity>
               
                       </HStack>

                  </Box>
                  
                  </VStack>
                  </VStack>

</ScrollView>
):null}
{Previousorder?(
  <ScrollView style={{flex:1,}}>
  <VStack style={{...styles.maincont}} >
                
                <VStack style={{...styles.subcont}}>
                
                    <Box style={{...styles.Box,height:458}} bgColor='white' borderWidth='1'
                      shadow='2' mt='5%' 
                      
                      >
                        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('RecieptOrder1')}>
                        <VStack pb='3%' borderBottomWidth='1' style={{borderColor:'#E1E1E1'}} >
                        
                       
                          <HStack width='90%' mx='auto'>
                        <Box style={{width:60,height:60,borderColor:"#fff"}} bgColor='white' borderWidth='1'
                      shadow='2' mt='5%'borderRadius='full'
                     
                      >
                     <Image
                     source={require('../Images/pic.png')}
                     style={{width:31.57,height:44.2}}
                     mx='auto'
                     my='auto'
                     alt='123'
                     />
  
                      </Box>
                      <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,marginTop:"8%" , marginLeft:"5%"}} >
                      Mahmoud Alatour
                  </Text>
                  <Center ml='auto' mt='10%'>
                  <AntDesign name="arrowright" size={20} color="#374151" /> 
                  </Center>
                        </HStack>
                        <HStack justifyContent='space-between' width='90%'  mx='auto' mt='5%'>
                          <VStack>
                        <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,}} >
                        Order Date
                  </Text>
                  <Text style={{fontFamily: 'arabicRegular',fontSize:12 ,color:"#9E9E9E" }} >
                  19 -10- 2020- 02:00AM
                  </Text>
                  
  
  </VStack>
  <VStack>
                        <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" }} >
                        Order Number
                  </Text>
                  <Text style={{fontFamily: 'arabicRegular',fontSize:12 ,color:"#9E9E9E" }} >
                  12739430493
                  </Text>
                  
  
  </VStack>
  
                        </HStack>
                      </VStack>
                      </TouchableOpacity>
                       <VStack pb='3%' borderBottomWidth='1' style={{borderColor:'#E1E1E1'}}>
                       <VStack width='90%' mx='auto' mt='5%' space='3'>
                       <HStack justifyContent='space-between'>
                  <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", }}>
           Food name 
          </Text>
          <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F", }}>
           2.30JD 
          </Text> 
                  </HStack>
                  <HStack justifyContent='space-between'>
                  <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", }}>
           Food name 
          </Text>
          <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F"}}>
           2.30JD 
          </Text> 
                  </HStack>
                  <HStack justifyContent='space-between'>
                  <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151" }}>
           Food name 
          </Text>
          <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F", }}>
           2.30JD 
          </Text> 
                  </HStack>
                  <HStack justifyContent='space-between'>
                  <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", }}>
           Food name 
          </Text>
          <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F",}}>
           2.30JD 
          </Text> 
                  </HStack>
                  <HStack justifyContent='space-between'>
                  <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151"}}>
           All
          </Text>
          <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151"}}>
          Total : 120 JOD
          </Text> 
                  </HStack>
  
  
  
                       </VStack>
                       </VStack>
                         <HStack mt='5%' justifyContent='space-between'  mx='auto'>
  
                         <TouchableOpacity activeOpacity={1} >
                      <LinearGradient
                          colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          style={{ ...styles.Btn,width:width*0.7 }}
                      >
                          <Text style={{ color: "white", fontFamily: 'arabicBold',fontSize:14 }}>DELIVERD HANDED</Text>
                      </LinearGradient>
                        </TouchableOpacity>
                 
                         </HStack>
  
                    </Box>
                    <Box style={{...styles.Box,height:458}} bgColor='white' borderWidth='1'
                      shadow='2' mt='5%' 
                      
                      >
                        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('RecieptOrder1')}>
                        <VStack pb='3%' borderBottomWidth='1' style={{borderColor:'#E1E1E1'}} >
                        
                       
                          <HStack width='90%' mx='auto'>
                        <Box style={{width:60,height:60,borderColor:"#fff"}} bgColor='white' borderWidth='1'
                      shadow='2' mt='5%'borderRadius='full'
                     
                      >
                     <Image
                     source={require('../Images/pic.png')}
                     style={{width:31.57,height:44.2}}
                     mx='auto'
                     my='auto'
                     alt='123'
                     />
  
                      </Box>
                      <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,marginTop:"8%" , marginLeft:"5%"}} >
                      Mahmoud Alatour
                  </Text>
                  <Center ml='auto' mt='10%'>
                  <AntDesign name="arrowright" size={20} color="#374151" /> 
                  </Center>
                        </HStack>
                        <HStack justifyContent='space-between' width='90%'  mx='auto' mt='5%'>
                          <VStack>
                        <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,}} >
                        Order Date
                  </Text>
                  <Text style={{fontFamily: 'arabicRegular',fontSize:12 ,color:"#9E9E9E" }} >
                  19 -10- 2020- 02:00AM
                  </Text>
                  
  
  </VStack>
  <VStack>
                        <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" }} >
                        Order Number
                  </Text>
                  <Text style={{fontFamily: 'arabicRegular',fontSize:12 ,color:"#9E9E9E" }} >
                  12739430493
                  </Text>
                  
  
  </VStack>
  
                        </HStack>
                      </VStack>
                      </TouchableOpacity>
                       <VStack pb='3%' borderBottomWidth='1' style={{borderColor:'#E1E1E1'}}>
                       <VStack width='90%' mx='auto' mt='5%' space='3'>
                       <HStack justifyContent='space-between'>
                  <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", }}>
           Food name 
          </Text>
          <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F", }}>
           2.30JD 
          </Text> 
                  </HStack>
                  <HStack justifyContent='space-between'>
                  <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", }}>
           Food name 
          </Text>
          <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F"}}>
           2.30JD 
          </Text> 
                  </HStack>
                  <HStack justifyContent='space-between'>
                  <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151" }}>
           Food name 
          </Text>
          <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F", }}>
           2.30JD 
          </Text> 
                  </HStack>
                  <HStack justifyContent='space-between'>
                  <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", }}>
           Food name 
          </Text>
          <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F",}}>
           2.30JD 
          </Text> 
                  </HStack>
                  <HStack justifyContent='space-between'>
                  <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151"}}>
           All
          </Text>
          <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151"}}>
          Total : 120 JOD
          </Text> 
                  </HStack>
  
  
  
                       </VStack>
                       </VStack>
                         <HStack mt='5%' justifyContent='space-between'  mx='auto'>
  
                         <TouchableOpacity activeOpacity={1} >
                      <LinearGradient
                          colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          style={{ ...styles.Btn,width:width*0.7 }}
                      >
                          <Text style={{ color: "white", fontFamily: 'arabicBold',fontSize:14 }}>DELIVERD HANDED</Text>
                      </LinearGradient>
                        </TouchableOpacity>
                 
                         </HStack>
  
                    </Box>
                    <Box style={{...styles.Box,height:458}} bgColor='white' borderWidth='1'
                      shadow='2' mt='5%' 
                      
                      >
                        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('RecieptOrder1')}>
                        <VStack pb='3%' borderBottomWidth='1' style={{borderColor:'#E1E1E1'}} >
                        
                       
                          <HStack width='90%' mx='auto'>
                        <Box style={{width:60,height:60,borderColor:"#fff"}} bgColor='white' borderWidth='1'
                      shadow='2' mt='5%'borderRadius='full'
                     
                      >
                     <Image
                     source={require('../Images/pic.png')}
                     style={{width:31.57,height:44.2}}
                     mx='auto'
                     my='auto'
                     alt='123'
                     />
  
                      </Box>
                      <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,marginTop:"8%" , marginLeft:"5%"}} >
                      Mahmoud Alatour
                  </Text>
                  <Center ml='auto' mt='10%'>
                  <AntDesign name="arrowright" size={20} color="#374151" /> 
                  </Center>
                        </HStack>
                        <HStack justifyContent='space-between' width='90%'  mx='auto' mt='5%'>
                          <VStack>
                        <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" ,}} >
                        Order Date
                  </Text>
                  <Text style={{fontFamily: 'arabicRegular',fontSize:12 ,color:"#9E9E9E" }} >
                  19 -10- 2020- 02:00AM
                  </Text>
                  
  
  </VStack>
  <VStack>
                        <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151" }} >
                        Order Number
                  </Text>
                  <Text style={{fontFamily: 'arabicRegular',fontSize:12 ,color:"#9E9E9E" }} >
                  12739430493
                  </Text>
                  
  
  </VStack>
  
                        </HStack>
                      </VStack>
                      </TouchableOpacity>
                       <VStack pb='3%' borderBottomWidth='1' style={{borderColor:'#E1E1E1'}}>
                       <VStack width='90%' mx='auto' mt='5%' space='3'>
                       <HStack justifyContent='space-between'>
                  <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", }}>
           Food name 
          </Text>
          <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F", }}>
           2.30JD 
          </Text> 
                  </HStack>
                  <HStack justifyContent='space-between'>
                  <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", }}>
           Food name 
          </Text>
          <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F"}}>
           2.30JD 
          </Text> 
                  </HStack>
                  <HStack justifyContent='space-between'>
                  <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151" }}>
           Food name 
          </Text>
          <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F", }}>
           2.30JD 
          </Text> 
                  </HStack>
                  <HStack justifyContent='space-between'>
                  <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", }}>
           Food name 
          </Text>
          <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F",}}>
           2.30JD 
          </Text> 
                  </HStack>
                  <HStack justifyContent='space-between'>
                  <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151"}}>
           All
          </Text>
          <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151"}}>
          Total : 120 JOD
          </Text> 
                  </HStack>
  
  
  
                       </VStack>
                       </VStack>
                         <HStack mt='5%' justifyContent='space-between'  mx='auto'>
  
                         <TouchableOpacity activeOpacity={1} >
                      <LinearGradient
                          colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          style={{ ...styles.Btn,width:width*0.7 }}
                      >
                          <Text style={{ color: "white", fontFamily: 'arabicBold',fontSize:14 }}>DELIVERD HANDED</Text>
                      </LinearGradient>
                        </TouchableOpacity>
                 
                         </HStack>
  
                    </Box>
                    
                    </VStack>
                    </VStack>
  
  </ScrollView>
):null}
</NativeBaseProvider>
</View>
  )
}


export default Order
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