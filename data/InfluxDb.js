/*
import React, { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";
import { ScrollView, View, Text } from "react-native";
import { VictoryArea, VictoryZoomContainer, VictoryChart, VictoryLine } from "victory-native";
import {TextDecoder, TextEncoder} from "text-encoding"
import axios from 'axios';
import papa from 'papaparse';

FileReader.prototype.readAsArrayBuffer = function (blob) {
	if (this.readyState === this.LOADING) throw new Error("InvalidStateError");
	this._setReadyState(this.LOADING);
	this._result = null;
	this._error = null;
	const fr = new FileReader();
	fr.onloadend = () => {
		const content = atob(fr.result.substr("data:application/octet-stream;base64,".length));
		const buffer = new ArrayBuffer(content.length);
		const view = new Uint8Array(buffer);
		view.set(Array.from(content).map(c => c.charCodeAt(0)));
		this._result = buffer;
		this._setReadyState(this.DONE);
	};
	fr.readAsDataURL(blob);
}
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const atob = (input = '') => {
	let str = input.replace(/=+$/, '');
	let output = '';

	if (str.length % 4 == 1) {
		throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
	}
	for (let bc = 0, bs = 0, buffer, i = 0;
		buffer = str.charAt(i++);

		~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
			bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
	) {
		buffer = chars.indexOf(buffer);
	}

	return output;
}

const token = 'totRedKcoRsQ2QYKOHNRsJCfV5J9k-jGSzPVh6atEoL8g5E-hBiBSryeX-pVOn4dacjLPHJuPTIk3U1ryJbNBw=='
const org = 'DOD'
const url = 'http://192.168.1.109:8086'
const bucket = 'dht11'

let query = `from(bucket:"testdht" )
  |> range(start: -2d)
  |> filter(fn: (r) => r["_measurement"] == "dht11")
  |> filter(fn: (r) => r["_field"] == "humidity" or r["_field"] == "temperature" )
  |> pivot(rowKey:["_time"], columnKey: ["_field"], valueColumn: "_value")
  |> yield(name: "results")`

const InfluxChart = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    selectedDomain: null,
    zoomDomain: null,
  });

  
    const handleZoom = (domain) => {
      setState((prevState) => ({
        ...prevState,
        selectedDomain: domain,
      }));
    };

    const handleBrush = (domain) => {
      setState((prevState) => ({
        ...prevState,
        zoomDomain: domain,
      }));
    };
    useEffect(() => {

      const influxQuery = async () => {
      try{
        //create InfluxDB client
        const queryApi =  new InfluxDB({ url, token }).getQueryApi(org);
        //make query
        let res=[];
         queryApi.queryRows(query, {
          next(row, tableMeta) {
            const o = tableMeta.toObject(row);
            //push rows from query into an array object
            res.push(o);
          },
          complete() {
            let finalData = []
  
            for (let i = 0; i < res.length; i++) {
              let point = {};
              point["humidity"] = res[i]["humidity"];
              point["temperature"] = res[i]["temperature"];
  
              point["name"] = res[i]["_time"];
              finalData.push(point);
            }
            setData(finalData); 
          },
          error(error) {
  
            console.log("query failed- ", error);
          }
        });
      }catch (error) {
        console.error("An error occurred during the query:", error);
      } 
  
      };influxQuery();
    }, []);

  
const datatest = [{x: 0, y: 2}, {x: 1, y: 2.5}, {x: 2, y: 4}, {x: 3, y: 5}, {x: 4, y: 3}, {x: 5, y: 1}, {x: 6, y: 3}, {x: 7, y: 2}, {x: 8, y: 2.5}, {x: 9, y: 4}, {x:11, y: 5}, {x: 15, y: 3}, {x: 5, y: 1}, {x: 6, y: 3},{x: 0, y: 2}, {x: 1, y: 2.5}, {x: 2, y: 4}, {x: 3, y: 5}, {x: 4, y: 3}, {x: 5, y: 1}, {x: 6, y: 3}, {x: 0, y: 2}, {x: 1, y: 2.5}, {x: 2, y: 4}, {x: 3, y: 5}, {x: 4, y: 3}, {x: 5, y: 1}, {x: 6, y: 3}];
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
        <View >
          <View style={{
           flexDirection: 'row',
           flex: 1,
           backgroundColor:'grey',
           borderRadius:50,
           alignContent:'center',
           alignItems:'center',
           height:300,
           
           borderColor:'black',
           borderWidth:3
          }}>
             
             <VictoryChart
              width={300}
              height={300}
              
              /*containerComponent={
               <VictoryZoomContainer responsive={false}
                  zoomDimension="x"
                  zoomDomain={state.zoomDomain}
                  onZoomDomainChange={handleZoom}
                />
              }
           >
         
               <VictoryLine
                 
                   style={{ data: { fill:"orchid", stroke:"navy", strokeWidth: 1}}}
                   interpolation="natural"
                    data={data}
                    x="name"
                    y="humidity" />
                 
                </VictoryChart>
              </View>  
        </View>  
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
export default InfluxChart;
*/