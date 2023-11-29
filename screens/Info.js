import { View, Text, ScrollView, Dimensions, TouchableOpacity, LayoutAnimation, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Block from '../components/Block';
import * as shape from 'd3-shape';
import Dashboard from '../components/Dashboard';
import Button from '../components/Button';
import InfluxDBExample from '../data/mockData';

const windowWidth=Dimensions.get('window').width;
const Info = ({navigation}) => {
  const [isOn1, setIsOn1] = React.useState(false);
  const onColor ='orchid';
  const offColor='grey';
  const URL=''

  async function toggleLight(){
    const request = await fetch(URL)
  }

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'darkgrey',}}>
      <View>
        <Text style={{
          fontSize:20,
          marginVertical:10,
          padding:20,
          fontSize: 40,
          fontWeight:800,
          color:'black',
          justifyContent:'center',
          alignItems:'center',
          fontFamily:'sans-serif-condensed',
          
        }}>Welcome to your dashboard</Text>
      </View>
      <View style={{
        width:'100%'
      }}>
      <View style={{
        alignItems:'center'
      }}>
        <ScrollView
        style={{
          flexDirection:'column',
          height:350,
          width:{windowWidth},
          borderColor:'bgrey',
          borderWidth:2,
          borderRadius:20,
          alignContent:'flex-start',
          padding:20
        }}>
        <InfluxDBExample/>
        </ScrollView>
        
        <View style={{
          alignContent:'center',
          alignItems:'center',
        }}>
        <Text style={{padding:5,alignSelf:'center',fontFamily:'sans-serif-condensed',fontSize:20 }}> Lights</Text>
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
      </View>
      <View style={{
        alignContent:'center',
        alignItems:'center',
        padding:15
      }}>
      <Button
                title="LogOut"
                onPress={() => navigation.navigate('Login')}
                style={{  
                    width:'50%' ,
                    borderRadius:10,
                    
                  
                }}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    padding: 2,
    marginBottom: 6,
  },
  buttons: {
    flex: 1,
    marginBottom: 6,
  },
  button: {
    backgroundColor: 'orchid',
    width: 151,
    height: 151,
    borderRadius: 151 / 2,
  }
})

export default Info