import React from "react";
import { View,Text,ScrollView,StyleSheet, FlatList, Dimensions } from "react-native";
//import { VictoryArea,VictoryChart,VictoryLine } from "victory-native";
//import { AreaChart } from "react-native-svg-charts";
//import LineChartComponent from "./Graf";






const Dashboard=()=>{
    
    return(
        <ScrollView style={{
            backgroundColor:'grey',
            marginHorizontal:20,
            flexDirection:'column'
        }}>
         
            <View style={{
                flexDirection:'row',
                flex:1
            }}>
                 <View style={{
                    flex:1,
                    backgroundColor:'green'
                 }}>
                <Text style={{
                    fontSize:20
                }}>
                    Humidity
                </Text> 
                
                </View>

                <View style={{
                    flex:1,
                    backgroundColor:'orange'
                }}>
                <Text style={{
                    fontSize:20
                }}>
                    Temperature
                </Text> 
                
                </View>
            </View>
            <View>
             <View style={{
                flexDirection:'row',
                flex:1
             }}>
                <View style={{
                    flex:1,
                    backgroundColor:'blue'
                }}>
                <Text style={{
                    fontSize:20
                }}>
                    Power
                </Text> 
               
                </View>

                <View style={{
                    flex:1
                }}>
                <Text style={{
                    fontSize:20
                }}>
                    Current
                </Text> 
               
                </View>
                </View>   
           
            </View>
           
        </ScrollView>
        
    )
};
export default Dashboard;

