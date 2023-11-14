import { Image, Text, View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'

const Button = (props) => {
    const filledBgColor = props.color || 'primary';
    const outlineColor = 'orchid';
    const bgColor = props.filled ? filledBgColor : outlineColor;
    const textColor = props.filled ? 'white' : 'primary';
  
    return (
      <TouchableOpacity 
      style={{
            ...styles.button,
            ...{backgroundColor: bgColor},
            ...props.style
      }}
      onPress={props.onPress}
      >
        <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
        }}>{props.title}</Text>
        </TouchableOpacity>
    )
  }

 const styles = StyleSheet.create ({
    button:{
        paddingBottom:16,
        paddingVertical:11,
        borderColor: 'violet',
        alignItems:'center',
        justifyContent:'center',
        
    }
 }) 


export default Button