import { View, Text, ImageBackground, TouchableOpacity, LayoutAnimation } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Info = () => {
  const [isOn, setIsOn] = React.useState(false);
  const [isOn1, setIsOn1] = React.useState(false);
  const onColor ='orchid';
  const offColor='grey';
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'darkgrey',}}>
      <View>

      </View>
      <View style={{
        height:'100%',
        width:'50%',
      }}>
      <View>
        <Text> Thermostat</Text>
        <TouchableOpacity style={{ 
          height:40, 
          width: 80, 
          borderRadius:50,
          borderColor:isOn ? onColor : offColor,
          overflow:'hidden',
          }}
          onPress={() =>{
            LayoutAnimation.easeInEaseOut();
            setIsOn(!isOn);
          }}>
          <View style={{
            height:'100%',
            width:'50%',
            backgroundColor: isOn ? onColor : offColor,
            alignSelf: isOn ? 'flex-end' : 'flex-start',
            alignItems:'center',
            justifyContent:'center',
          }}>
            <Text>{isOn ? 'ON': 'OFF' }</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View>
        <Text> Lights</Text>
        <TouchableOpacity style={{ 
          height:40, 
          width: 80, 
          borderRadius:50,
          borderColor:isOn1 ? onColor : offColor,
          overflow:'hidden',
          }}
          onPress={() =>{
            LayoutAnimation.easeInEaseOut();
            setIsOn1(!isOn1);
          }}>
          <View style={{
            height:'100%',
            width:'50%',
            backgroundColor: isOn1 ? onColor : offColor,
            alignSelf: isOn1 ? 'flex-end' : 'flex-start',
            alignItems:'center',
            justifyContent:'center',
          }}>
            <Text>{isOn1 ? 'ON': 'OFF' }</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
      
    </SafeAreaView>
  )
}

export default Info