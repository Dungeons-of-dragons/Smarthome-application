import { Image, View, Text } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Welcome = ({navigation}) => {
  return (
    
    <SafeAreaView style={{flex:1,backgroundColor:'darkgrey', }}>
            <View>
                <Image
                source={require('../assets/temp.jpg')}
                style={{
                    height: 70,
                    width:70,
                    borderRadius:20,
                    position:'relative',
                    left:50,
                    top:20,
                    transform:[
                        { translateX:20},
                        { translateY: 50},   
                        {rotate:'5deg'}
                    ]
                }}
                />
            <Image
            source={require('../assets/lock.jpg')}
            style={{
                height: 70,
                width:70,
                borderRadius:20,
                position:'relative',
                top:-17,
                left: 190,
                transform:[
                    { translateY: 30},   
                    { rotate:'7deg'},
                ]
            }}
            />
            <Image
                source={require('../assets/energy.png')}
                style={{
                    height: 70,
                    width:70,
                    borderRadius:20,
                    position:'relative',
                    left:250,
                    transform:[
                        { translateX:40},
                        { translateY:80},
                           
                        {rotate:'10deg'}
                    ]
                }}
                />
             <Image
                source={require('../assets/humidity.jpg')}
                style={{
                    height: 70,
                    width:70,
                    borderRadius:20,
                    position:'absolute',
                    top:120,
                    left:260,
                    transform:[
                        { translateX:30},
                        { rotate:'10deg'} ,
                    ]
                }}
                />
            <Image
                source={require('../assets/gas.jpg')}
                style={{
                    height: 70,
                    width:70,
                    borderRadius:20,
                    position:'absolute',
                    top:210,
                    left:240,
                    transform:[
                        { translateX:40},
                        { translateY:120},    
                        {rotate:'10deg'}
                    ]
                }}
                />
            <Image
                source={require('../assets/logo.png')}
                style={{
                   height:300,
                   width:200,
                    borderRadius:20,
                    position:'relative',
                    top:-30,
                    left:55,
                    transform:[
                        {rotate:'7deg'},
                    ]
                }}
                />
            </View>
            <View style={{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        position:'relative',
        top:-40,
        }}>
            <Text style = {{
                marginVertical:30,
                padding:20,
                fontSize: 40,
                fontWeight:800,
                color:'black',
                justifyContent:'center',
                alignItems:'center',
                fontFamily:'sans-serif-condensed',
            }}>Dungeon of Dragons
            </Text>
             <Button
                title="Monitor your Home"
                onPress={() => navigation.navigate('Login')}
                style={{  
                    width:'50%' ,
                    borderRadius:10,
                    position:'relative',
                    bottom:30,
                }}/>
            
            </View>  
      </SafeAreaView>
  
    
  )
}
const styles = StyleSheet.create({
        baseText: {
            marginBottom:30,
            fontFamily:'Roboto',
            justifyContent:'center',
            position:'absolute',
            top:400,
            left:70,
            fontWeight:'bold',
            fontSize:20,
        },
        button:{
            paddingBottom:16,
            paddingVertical:11,
            borderColor: 'primary',
            alignItems:'center',
            justifyContent:'center',
            marginTop:20,
            position:'relative',
            top:10,
            width:'100%',
            color:'grey',
            borderRadius:10, 
            } 
         }) 

export default Welcome

