/*
import React, { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";
import { ScrollView, View, Text } from "react-native";
import { VictoryArea, VictoryChart, VictoryLine } from "victory-native";
import {TextDecoder, TextEncoder} from "text-encoding"

const token = 'totRedKcoRsQ2QYKOHNRsJCfV5J9k-jGSzPVh6atEoL8g5E-hBiBSryeX-pVOn4dacjLPHJuPTIk3U1ryJbNBw==';
const org = 'DOD';
const url = 'http://pie.local:8086';
const measurement = "dht11";
const fields = ["humidity", "temperature", "current", "power"];
const sensor_ids = ["TLM0102", "scs712"];
const bucket = "testdht";

const query = `from(bucket: "${bucket}")` +
`Authorization: Token totRedKcoRsQ2QYKOHNRsJCfV5J9k-jGSzPVh6atEoL8g5E-hBiBSryeX-pVOn4dacjLPHJuPTIk3U1ryJbNBw==` +
    `|> range(start: -3h)` +
    `|> filter(fn: (r) => r._measurement == "${measurement}")` +
    `|> filter(fn: (r) => ${fields.map(field => `r._field == "${field}"`).join(' or ')})` +
    `|> filter(fn: (r) => ${sensor_ids.map(id => `r.sensor_id == "${id}"`).join(' or ')})` +
    `|> pivot(rowKey:["_time"], columnKey: ["_field"], valueColumn: "_value")` +
    `|> yield(name: "results")` +
    `|> aggregateWindow(every: 1h, fn: mean)`;

const InfluxChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const influxQuery = async () => {
            try {
                const queryApi = new InfluxDB({ url, token }).getQueryApi(org);
                const res = [];

                queryApi.queryRows(query, {
                next(row, tableMeta) {
                  const o = tableMeta.toObject(row);
                  res.push(o);
                },
                error(error) {
                  console.error("query failed- ", error);
                },
              });

                const finalData = res.map(item => ({
                    humidity: item.humidity,
                    temperature: item.temperature,
                    current: item.current,
                    power: item.power,
                    name: item._time
                }));

                setData(finalData);
            } catch (error) {
                console.error(error);
            }
        };

        influxQuery();
    }, []);
const datatest = [{x: 0, y: 2}, {x: 1, y: 2.5}, {x: 2, y: 4}, {x: 3, y: 5}, {x: 4, y: 3}, {x: 5, y: 1}, {x: 6, y: 3}];
    return(
        <View style={{
          flexDirection:'column'
        }}>

        <Text style={{
          fontSize: 20,
          alignSelf:'center',
          padding:'5'
          }}>
                  Humidity
                </Text> 
        <ScrollView horizontal>
          <View style={{
           flexDirection: 'row',
           flex: 1,
           backgroundColor:'grey',
           borderRadius:50,
           alignContent:'center',
           alignItems:'center',
           height:300,
           width:300,
           borderColor:'black',
           borderWidth:3
          }}>
             
             <VictoryChart>
               <VictoryArea
                   
                   style={{ data: { fill:"url(#myGradient)", stroke:"navy", strokeWidth: 1}}}
                   interpolation="natural"
                    data={datatest}
                    x="x"
                    y="y" />
                 
                </VictoryChart>
              </View>  
        </ScrollView>  
        <Text style={{
              fontSize: 20,
              alignSelf:'center',
              padding:'5'
             }}>
                Temperature
              </Text>
        <View style={{
          flexDirection: 'row',
          flex: 1,
          backgroundColor:'darkslateblue',
          borderRadius:50,
          alignContent:'center',
          alignItems:'center',
          height:300,
          width:300
          }}>
            
              <VictoryChart style={{
              
              }}>
                <VictoryArea
                  style={{ data: { stroke: 'black', strokeWidth: 1 } }}
                 data={data}
                 
                  y='temperature' />
              </VictoryChart>
        </View>  

        <Text style={{
              fontSize: 20,
              alignSelf:'center',
              padding:5
            }}>
              Power
            </Text>

        <View style={{
           flexDirection: 'row',
           flex: 1,
           backgroundColor:'cadetblue',
           borderRadius:50,
           alignContent:'center',
           alignItems:'center',
           height:300,
           width:300
          }}>
            
            <VictoryChart>
              <VictoryLine
                style={{ data: { stroke: '#34d5eb', strokeWidth: 1 } }}
                data={data}
                x="name"
                y='power' />
            </VictoryChart>
        </View>  

        <Text style={{
              fontSize: 20,
              alignSelf:'center',
              padding:15,
              
            }}>
              Current
            </Text>

        <View style={{
           flexDirection: 'row',
           flex: 1,
           backgroundColor:'darkslateblue',
           borderRadius:50,
           alignContent:'center',
           alignItems:'center',
           height:300,
           width:300
           
          }}>
             
            <VictoryChart>
              <VictoryLine
                style={{ data: { stroke: 'black', strokeWidth: 1 } }}
                data={data}
                x="name"
                y='temperature' />
            </VictoryChart>
        </View>  
        </View>
          
           
       
      )
    }
export default InfluxChart;
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};


*/