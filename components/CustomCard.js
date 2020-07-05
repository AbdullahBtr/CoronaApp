import React from "react";
import {Card} from 'react-native-elements';
import {Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function CustomCard(props) {
    return (
        <Card title={props.title} style={{width: '80%'}}>
            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="human-male-male" size={20}/>
                <Text>Population: {!props.data.totalPeople ? 0 : props.data.totalPeople} </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="bacteria" size={20}/>
                <Text>Sick: {!props.data.cases ? 0 : props.data.cases} </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="emoticon-dead" size={20}/>
                <Text>Deaths: {!props.data.deaths ? 0 : props.data.deaths} </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="bandage" size={20}/>
                <Text>Recovered: {!props.data.recovered ? "no data" : props.data.recovered} </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="chart-bar" size={20}/>
                <Text>Cases per 100.000: {!props.data.casesper100 ? "no data" : props.data.casesper100} </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="update" size={20}/>
                <Text>Updated: {!props.data.lastUpdated ? "no data" : props.data.lastUpdated.slice(0, 10)} </Text>
            </View>
        </Card>
    )
}