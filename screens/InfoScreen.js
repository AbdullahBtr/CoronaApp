import React, {useEffect, useState} from 'react';
import { DataTable } from 'react-native-paper';
import {Dimensions, StyleSheet, Text, View} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';


export default function (props) {


    {/* Declare new state variable to save and access data  */}
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true);

    {/* Fetch data from API */}
    useEffect(() => {
        fetch(
            "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Coronaf%C3%A4lle_in_den_Bundesl%C3%A4ndern/FeatureServer/0/query?where=1%3D1&outFields=LAN_ew_GEN,LAN_ew_EWZ,OBJECTID,Fallzahl,Aktualisierung,AGS_TXT,faelle_100000_EW,Death&outSR=4326&f=json"
        )
            .then((response) => response.json())
            .then((json) => setData(json.features))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.screen}>
            <ScrollView sty={styles.scrollView}>
            <DataTable>
    <DataTable.Header>
      <DataTable.Title>State</DataTable.Title>
      <DataTable.Title numeric>Population</DataTable.Title>
      <DataTable.Title numeric>Cases</DataTable.Title>
    </DataTable.Header>
        {/*the first time data in state is empty, so ask if its size bigger than zero to avoid exception */}
    <DataTable.Row>
      <DataTable.Cell>{data && data.length>1 && data[0].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[0].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[0].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
    <DataTable.Cell>{data && data.length>1 && data[1].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[1].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[1].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
    <DataTable.Cell>{data && data.length>1 && data[2].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[2].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[2].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
    <DataTable.Cell>{data && data.length>1 && data[3].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[3].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[3].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
    <DataTable.Cell>{data && data.length>1 && data[4].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[4].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[4].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
    <DataTable.Cell>{data && data.length>1 && data[5].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[5].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[5].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
    <DataTable.Cell>{data && data.length>1 && data[6].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[6].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[6].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
    <DataTable.Cell>{data && data.length>1 && data[7].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[7].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[7].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
    <DataTable.Cell>{data && data.length>1 && data[8].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[8].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[8].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
    <DataTable.Cell>{data && data.length>1 && data[9].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[9].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[9].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
    <DataTable.Cell>{data && data.length>1 && data[10].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[10].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[10].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
    <DataTable.Cell>{data && data.length>1 && data[11].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[11].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[11].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
    <DataTable.Cell>{data && data.length>1 && data[12].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[12].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[12].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>
    
    <DataTable.Row>
    <DataTable.Cell>{data && data.length>1 && data[13].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[13].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[13].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
    <DataTable.Cell>{data && data.length>1 && data[14].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[14].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[14].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
    <DataTable.Cell>{data && data.length>1 && data[15].attributes.LAN_ew_GEN}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[15].attributes.LAN_ew_EWZ}</DataTable.Cell>
      <DataTable.Cell numeric>{data && data.length>1 && data[15].attributes.Fallzahl}</DataTable.Cell>
    </DataTable.Row>





  </DataTable>

  </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        paddingTop: 50,
        flex: 1,
    },


    scrollView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
         
    },
    contentContainer: {
        width: '100%',
        alignItems: 'center'
    },

    

});
