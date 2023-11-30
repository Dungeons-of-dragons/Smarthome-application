import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { InfluxDB } from '@influxdata/influxdb-client';
import { VictoryLine, VictoryChart } from 'victory-native';
import { TextEncoder, TextDecoder } from 'text-encoding';

const InfluxDBExample = () => {
  const [humidityData, setHumidityData] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);

  const fetchHumidityData = async () => {
    const { table } = await queryApi.collectRows(humidityQuery);
   console.log(table)
    if (table){
    setHumidityData(table.map(row => ({ x: new Date(row._time), y: +row._value })));
  }};

  const fetchTemperatureData = async () => {
    const { table } = await queryApi.collectRows(temperatureQuery);
   console.log(table)
    if (table){
    setTemperatureData(table.map(row => ({ x: new Date(row._time), y: +row._value })));
  }};

  useEffect(() => {
    const fetchData = async () => {
      const token = 'totRedKcoRsQ2QYKOHNRsJCfV5J9k-jGSzPVh6atEoL8g5E-hBiBSryeX-pVOn4dacjLPHJuPTIk3U1ryJbNBw=='
      const org = 'DOD'
      const url = 'http://192.168.1.109:8086'
      const bucket = 'testdht'
      const queryApi = new InfluxDB({ url, token }).getQueryApi(org);

      const humidityQuery = `
        from(bucket: "${bucket}")
          |> range(start: -2h)
          |> filter(fn: (r) => r._measurement == "dht11")
          |> filter(fn: (r) => r._field == "humidity")
      `;

      const temperatureQuery = `
        from(bucket: "${bucket}")
          |> range(start: -2h)
          |> filter(fn: (r) => r._measurement == "testdht")
          |> filter(fn: (r) => r._field == "temperature")
      `;

      

      await Promise.all([
        fetchHumidityData(queryApi, humidityQuery), 
        fetchTemperatureData(queryApi, temperatureQuery)
      ]);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
       {humidityData.length > 0 && (
      <VictoryChart>
        <VictoryLine data={humidityData} />
      </VictoryChart>
       )}
       {temperatureData.length > 0 && (
      <VictoryChart>
        <VictoryLine data={temperatureData} />
      </VictoryChart>
       )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default InfluxDBExample;