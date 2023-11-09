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
            marginTop:10,
            }}>
          <View >   
            <Text style = {{
                marginTop:20,
                marginVertical:30,
                padding: 20,
                fontSize: 40,
                fontWeight:800,
                color:'black',
                justifyContent:'center',
                alignItems:'center',
            }}>Dungeon of Dragons
            </Text>
            </View>
            <View style={{
        height: '500',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
        }}>
        <Image 
            source={require("../assets/logo.png")}
            style={{
               
                flex:2, 
            }}
            />
            <Text style= {styles.baseText
            }>
                Your Smart Home Solution
            </Text>
             <Button
                title="Login"
                onPress={()=> navigation.navigate("Login")}
                style={{
                    
                    width:'50%' ,
                    borderRadius:10,
        
                }}/>
            
            </View>  
            <View style={{
                marginBottom:1,
            }}>
           
             
            
                </View>    
                  
            
            
      </View>
    </View>
    
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
            marginTop:200,
            position:'absolute',
            top:10,
            width:'100%',
            color:'grey',
            borderRadius:10, 
            } 
         }) 

export default Welcome

