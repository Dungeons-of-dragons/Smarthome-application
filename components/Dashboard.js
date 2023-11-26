import React from "react";
import { View,Text,ScrollView,StyleSheet, FlatList, Dimensions } from "react-native";
import { VictoryArea,VictoryChart,VictoryLine } from "victory-native";



const data=[
    { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
]
const data1=[
    { quarter: 1, earnings: 0 },
  { quarter: 2, earnings: 1650 },
  { quarter: 3, earnings: 1420 },
  { quarter: 4, earnings: 1900 }
]
const data2=[
    { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 1650 },
  { quarter: 3, earnings: 1420 },
  { quarter: 4, earnings: 1900 }
]
const data3=[
    { quarter: 1, earnings: 0 },
  { quarter: 2, earnings: 1650 },
  { quarter: 3, earnings: 1420 },
  { quarter: 4, earnings: 1900 }
]

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
                <VictoryChart>
                <VictoryArea data={data}/>

                </VictoryChart> 
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

const styles = StyleSheet.create({
    app: {
        flex: 4, // the number of columns you want to devide the screen into
        marginHorizontal: "auto",
        width: 400,
        backgroundColor: "red"
      },
      row: {
        flexDirection: "row"
      },
      "1col":  {
        backgroundColor:  "lightblue",
        borderColor:  "#fff",
        borderWidth:  1,
        flex:  1
      },
      "2col":  {
        backgroundColor:  "green",
        borderColor:  "#fff",
        borderWidth:  1,
        flex:  2
      },
      "3col":  {
        backgroundColor:  "orange",
        borderColor:  "#fff",
        borderWidth:  1,
        flex:  3
      },
      "4col":  {
        flex:  4
      }
  });