import React, { useEffect, useState } from 'react';
import { View, Image,Text } from 'react-native';
// import { WebSocket } from 'react-native-websocket';
import { VictoryChart, VictoryLine } from 'victory-native';

const Socket = () => {
    const [temperatureValue, setTemperatureValue]= useState([])
    const [humidityValue, setHumidityValue]= useState([])
    useEffect(() => {
      let ws = new WebSocket('wss://192.168.1.109:5000/json');
     //  ws.onopen = () => {
          //Connection opened
         //console.log('WebSocket connection opened');
     //    ws.send('Hello, server!'); // Send a message to the server
    //  };
      ws.onmessage = (e) => {
        // Receive a message from the server
        const mainJson = JSON.parse(e.data)
        const humidity = mainJson.map((val)=>({
          
                x: val._time,
                y: val.humidity
            
        }));

        const temperature = mainJson.map((val)=>({
            
                x: val._time,
                y: val.temperature
            
        }));
        setHumidityValue(humidity)
        setTemperatureValue(temperature)
        // console.log(temperature)
        // console.log(e.data);
      };
      ws.onerror = (e) => {
        // An error occurred
        console.log(e.message);
      };
      ws.onclose = (e) => {
        // Connection closed
        console.log(e.code, e.reason);
      };
    }, []);

    return (
      <View>
        <View>
        
        <Image
            source={require('../assets/humidity.jpg')} style={{
              height: 70,
              width:70,
              alignSelf:'center'}}/>
        
        <VictoryChart>
          <VictoryLine
          data={humidityValue}
          />
        </VictoryChart>
      </View>
      <View>
        <Text>Temperature</Text>
      <VictoryChart>
          <VictoryLine
          data={temperatureValue}
          />
        </VictoryChart>
      </View>
      </View>
    );
  };
  export default Socket;