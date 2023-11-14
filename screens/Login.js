import { ImageBackground, Image,View, Text } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
import {CrossfadeImage} from 'react-native-crossfade-image'
import Button from '../components/Button'
import { Pressable } from 'react-native'


const Login = ({navigation}) => {
    const [isPasswordShown, SetIsPasswordShown]=useState(false);
    //const [isChecked,setIsChecked]=useState(false);
  return (
   <SafeAreaView style={{flex:1,backgroundColor:"darkgrey",}}>
      <View style={{
        
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
      }}>
        <View style={{
        justifyContent:'center',
        alignItems:'center',
        width:'80%',
        
        }}>
          <View style={{
          width:'100%',
          alignItems:'center',
          justifyContent:'center',
        }}>

        <Text style={{
            marginVertical:8,
            fontSize:20,
            fontWeight:'bold',
        }}> Dungeons of Dragons</Text> 
        </View>

        <CrossfadeImage style={{
            borderRadius:20,
            height:'80%',
            width:'100%',
        }}
         source={require("../assets/logo.png")} resizeMode="cover" blurRadius={25} >
        
        <Text style={{
            fontSize:20,
            fontWeight:'bold',
            marginTop:50,
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
            fontSize:20,
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
        
        <View>
          <Button
          title="Login"
                onPress={() => navigation.navigate('Info')}
                style={{
                    
                    marginVertical:50,
                    borderRadius:10,
                    
                }}/>
        </View>
          
          
       
        
        </CrossfadeImage>
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