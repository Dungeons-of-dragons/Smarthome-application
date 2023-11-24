import React from "react";
import { View,Text,ScrollView,StyleSheet, FlatList, Dimensions } from "react-native";
import { VictoryArea,VictoryChart } from "victory-native";
//import { Box } from "@mui/material";

const { width } = Dimensions.get('window');
const gap = 1;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;
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
const Row=({children}) =>(
    <View style={styles.row}>{children}</View>
)
const Col=({numRows,children})=>{
    return (
        <View style={styles['${numRows}col']}>{children}</View>
    )
}
const Dashboard=()=>{
    
    return(
        <ScrollView style={{
            backgroundColor:'',
            marginHorizontal:20,

        }}>
         
            <Row>
                <Col numRows={2}>
                <Text style={{
                    fontSize:20
                }}>
                    Humidity
                </Text> 
                <VictoryChart width={200} height={150}>
                <VictoryArea data={data}/>
                </VictoryChart> 
                </Col>

                <Col numRows={2}>
                <Text style={{
                    fontSize:20
                }}>
                    Temperature
                </Text> 
                <VictoryChart width={200} height={150}>
                <VictoryArea data={data1}/>
                </VictoryChart> 
                </Col>
            </Row>
            <Row>
                <Col numRows={2}>
                <Text style={{
                    fontSize:20
                }}>
                    Power
                </Text> 
                <VictoryChart width={200} height={150}>
                <VictoryArea data={data2}/>
                </VictoryChart> 
                </Col>

                <Col numRows={2}>
                <Text style={{
                    fontSize:20
                }}>
                    Current
                </Text> 
                <VictoryChart width={200} height={150} fill={'orchid'}>
                <VictoryArea data={data3}/>
                </VictoryChart> 
                </Col>
            </Row>
         
           
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