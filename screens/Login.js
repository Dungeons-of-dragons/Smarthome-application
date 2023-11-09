import { ImageBackground, Image,View, Text } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

import Button from '../components/Button'
import { Pressable } from 'react-native'


const Login = () => {
    const [isPasswordShown, SetIsPasswordShown]=useState(false);
    //const [isChecked,setIsChecked]=useState(false);
  return (
   <SafeAreaView style={{flex:1,backgroundColor:"darkgrey",}}>
      <View style={{
        marginVertical:22,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
      }}>
        <View style={{flex:2, marginVertical:22,}}>
          <Text style={{
            fontSize:22,
            fontWeight:'bold',
          }}
          >
            LOGIN
          </Text>
        </View>
        <View style={{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        height:'150',
        width:'70%',
        marginVertical:80,
        }}>
        <ImageBackground style={StyleSheet.image} source={require("../assets/logo2.png")} resizeMode="cover" >
        <View style={{
          width:'100%',
          height:48,
          
          
          alignItems:'center',
          justifyContent:'center',
          paddingLeft:22,
          flexDirection:'row',

        }}>
            <Text style={{
            marginVertical:8,
            fontSize:30,
            fontWeight:'bold',
        }}> DOD LOGIN</Text> 
        </View>
        <Text style={{
            fontSize:16,
            fontWeight:'bold',
            marginTop:20,
        }}> User Name</Text> 
        <View style={{
          width:'100%',
          height:48,
          borderColor:'black',
          borderWidth:2,
          borderRadius:8,
          alignItems:'center',
          justifyContent:'space-between',
          paddingLeft:22,
          flexDirection:'row',

        }}>
            <TextInput
            placeholder='Enter your Username'
            placeholderTextColor={'black'}
            keyboardType='default'
            style={{
              width:'100%',
              
            }}
            ></TextInput>
        </View>
        
        <Text style={{
            fontSize:16,
            fontWeight:'bold',
            marginTop:30,
        }}> Password</Text> 
        <View style={{
          width:'100%',
          height:48,
          borderColor:'black',
          borderWidth:2,
          borderRadius:8,
          alignItems:'center',
          justifyContent:'space-between',
          paddingLeft:22,
          flexDirection:'row',
        }}>
            <TextInput
            placeholder='Enter your Password'
            placeholderTextColor={'black'}
            secureTextEntry={isPasswordShown}
            style={{
              width:'100%',
              
            }}
            />
          <TouchableOpacity
          onPress={()=>SetIsPasswordShown(!isPasswordShown)}
            style={{
              position:'absolute',
              right:12,
            }}
          >
            {
            isPasswordShown == true ?           
            (
              <Ionicons name='eye-off' size={24} color={'black'}></Ionicons>
            ):(
              <Ionicons name='eye' size={24} color={'black'}></Ionicons>
            )
            } 

            </TouchableOpacity>  
        </View>
        
          <Button
          title="Login"
                onPress={()=> navigation.navigate("Info")}
                style={{
                    
                    marginVertical:30,

                       
                    borderRadius:10,
        
                }}/>
          
       
        
        </ImageBackground>
        </View>
      </View>
      </SafeAreaView>

     
  
  )
}
const styles= StyleSheet.create({
  image:{
    flex:1,
    justifyContent:'center',
    borderRadius:10,
    height:'50%',
    width:'50%',
    marginLeft:22,
  }
})
export default Login