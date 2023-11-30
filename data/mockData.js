/*import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
// import { WebSocket } from 'react-native-websocket';
import { VictoryChart, VictoryLine } from 'victory-native';

const Socket = () => {
    const [temperatureValue, useTemperature]= useState({})
    const [humidityValue, useHumidityValue]= useState({})
    useEffect(() => {
      const ws = new WebSocket('ws://192.168.1.109:5000/json');
    //   ws.onopen = () => {
    //     // Connection opened
    //     console.log('WebSocket connection opened');
    //     ws.send('Hello, server!'); // Send a message to the server
    //   };
      ws.onmessage = (e) => {
        // Receive a message from the server
        const mainJson = JSON.parse(e.data)
        const humidity = mainJson.map((val)=>{
            return{
                "time": val._time,
                "humidity": val.humidity
            }
        })

        const temperature = mainJson.map((val)=>{
            return{
                "time": val._time,
                "temperature": val.temperature
            }
        })
        useHumidityValue(humidity)
        useTemperature(temperature)
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
        <Text>DOD</Text>
        <VictoryChart>
          <VictoryLine
          data={humidityValue}
          />
        </VictoryChart>
      </View>
    );
  };
  export default Socket;*/