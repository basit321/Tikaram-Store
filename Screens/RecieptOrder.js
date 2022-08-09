import { View, Text, TouchableOpacity, StyleSheet, Dimensions ,ScrollView} from 'react-native'
import React from 'react'

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
    TextArea,
    
  

  } from "native-base"
import { useNavigation } from '@react-navigation/native'
import { Location, Man, Map, Phone } from '../Components/Images'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons,AntDesign } from '@expo/vector-icons'

const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  
  
export default function RecieptOrder() {
    const navigation = useNavigation()
    return (
        <View style={styles.conatainer}>
            
            <ScrollView style={{flex:1}} >
                <View style={{height:height}}>
                <View  >
                    <LinearGradient
                        style={{ ...styles.linear }}
                        colors={['#37B3A9', '#E8E6A5']}
                    >
                        <HStack my="2" p="4" justifyContent="space-between">
                            <View style={{ height: 60, width: 60, backgroundColor: "#fff", borderRadius: 30, alignItems: "center", justifyContent: 'center' }}>
                                <Man />

                            </View>
                            <View>
                                <Text style={{ color: "#fff", fontSize: 16, fontFamily: "arabicBold" }}>
                                    User Name
                                </Text>
                                <Text style={{ color: "#fff", fontSize: 16, fontFamily: "arabicBold" }}>+962 79 999 9999</Text>
                            </View>
                            <View style={{ width: 100, borderWidth: 1, borderRadius: 20, borderColor: "#fff", alignSelf: "flex-end" }}>
                                <HStack justifyContent="center" alignItems="center">
                                    <Phone />
                                    <Text style={{ fontSize: 16, fontFamily: "arabicBold", color: "#fff" }}> Call</Text>
                                </HStack>
                            </View>
                        </HStack>
                    </LinearGradient>
                    

                </View>


                <View style={{ ...styles.card }}>
                <VStack pb='3%' borderBottomWidth='1' style={{borderColor:'#E1E1E1'}} >
                      
                     
                      
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



                     </VStack>
                     </VStack>
                     <HStack justifyContent='space-between' width='90%' mx='auto'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151"}}>
         All
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151"}}>
        Total : 120 JOD
        </Text> 
                </HStack>

                </View>

                <View style={{ ...styles.card }}>
                    <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicBold" }}>
                        Other notes
                    </Text>
                    <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicBold" }}>
                        Note text …
                    </Text>

                </View>

                <HStack mt='5%' justifyContent='space-between' width='90%' mx='auto' pb='5%'>

<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('RecieptOrder1')} >
<LinearGradient
 colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
 start={{ x: 0, y: 0 }}
 end={{ x: 1, y: 1 }}
 style={{ ...styles.Btn }}
>
 <Text style={{ color: "white", fontFamily: 'arabicBold',fontSize:14 }}>Accept</Text>
</LinearGradient>
</TouchableOpacity>
<TouchableOpacity  activeOpacity={1}  style={{ ...styles.loginBtn }} onPress={()=>navigation.goBack()}>
<Text style={{ color: '#C40000', fontFamily: 'arabicBold' }}>Reject</Text>
</TouchableOpacity>

</HStack>
</View>
            </ScrollView>
        </View >
    )
}
const styles = StyleSheet.create({

    linear: {
        justifyContent: "center",
        margin: 20,
        borderRadius: 20
    },
    card: {
        borderRadius: 20,
        backgroundColor: "#fff",
        paddingBottom:'5%',
        margin: 20,
        marginVertical: 10
    },
    shadowC: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
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
        
        
        subcont:{
          width:width*0.9,
          
          marginLeft:"auto",
          marginRight:'auto',
          marginTop:"5%"
        
        } ,
        maincont:{
          paddingBottom:"10%"
        },
        conatainer:{
            flex:1,
          
            backgroundColor:"#F6F6F6"
        
            
        },
        
        
})