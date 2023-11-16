import React, { useState,Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

import { Input, Button} from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import init from 'react_native_mqtt';

init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    sync : {}
  });
  const options = {
    host: 'broker.emqx.io',
    port: 8083,
    path: '/testTopic',
    id: 'id_' + parseInt(Math.random()*100000)
  };
 
  client = new Paho.MQTT.Client(options.host, options.port, options.path);
  
  const MqttInst = ()=>{
    const [testTopic, settestTopic] = useState(false);
    
    
  return(
         
    )
}
  export default MqttInst