import { Image, View, Text } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { StyleSheet } from 'react-native';


const Welcome = (navigation) => {
  return (
    
    <View style={{
        flex:1,
        backgroundColor:'lightgrey', }}>
     
      <View style={{
        height: '500',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',}}>
        <Image 
            source={require("../assets/logo.png")}
            style={{
                
                position:'absolute',
                top: 150,
                borderRadius:30,
                flex:2, 
            }}
            />
        <View style={{ 
            marginVertical: 30,
            }}>
            <Text style = {{
                padding: 20,
                fontSize: 40,
                fontWeight:800,
                color:'black',
                justifyContent:'space-evenly',
            }}>Dungeon of Dragons
            </Text>
            <Text style= {styles.baseText
            }>
                Your Smart Home Solution
            </Text>
            </View>  
            <View style={{
                position:'absolute',
                top: 550,
                flex:1,
                flexDirection:'row',
            }}>
                <Button
                 title="Login"
                onPress={()=> navigation.navigate('Login')}
                style={{
                    marginTop:22,
                    width:'100%',   
                    borderRadius:50,
        
                }}
             
            /> 
                </View>  
            
            
      </View>
    </View>
    
  )
}
const styles = StyleSheet.create({
        baseText: {
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
            marginTop:200,
            position:'absolute',
            top:10,
            width:'100%',
            color:'grey',
            borderRadius:10, 
            } 
         }) 

export default Welcome

