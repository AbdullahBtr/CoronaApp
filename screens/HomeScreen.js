import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from "react-native";
import ModalScreen from '../components/ModalScreen.js';
import TitleText from "../components/TitleText";
import Colors from '../constants/Color';
import Layout from "../constants/Layout";
import CustomCard from "../components/CustomCard";
import CustomButton from "../components/CustomButton";

export default function () {

    const [stateData, setStateData] = useState([]);
    const screenWidth = Dimensions.get("window").width - 20;
    const [showModal, setShowModal] = useState(false);

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        fetch(
            "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Coronaf%C3%A4lle_in_den_Bundesl%C3%A4ndern/FeatureServer/0/query?where=1%3D1&outFields=LAN_ew_GEN,LAN_ew_EWZ,OBJECTID,Fallzahl,Aktualisierung,AGS_TXT,GlobalID,faelle_100000_EW,Death&outSR=4326&f=json"
        )
            .then((response) => response.json())
            .then((json) => {
                let totalPeople = 0;
                let totalCases = 0;
                let totalDeath = 0;
                let casesper100 = 0;
                json.features.map((state) => {
                    totalCases = totalCases + state.attributes.Fallzahl
                    totalDeath = totalDeath + state.attributes.Death;
                    casesper100 = casesper100 + state.attributes.faelle_100000_EW;
                    totalPeople = totalPeople + state.attributes.LAN_ew_EWZ;
                })
                casesper100 = (casesper100 / 16).toFixed(0);
                var a = new Date(json.features[0].attributes.Aktualisierung);
                var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
                var year = a.getFullYear();
                var month = months[a.getMonth()];
                var date = a.getDate() < 10 ? '0' + a.getDate() : a.getDate();
                var time = date + '.' + month + '.' + year
                setStateData({
                    totalPeople: totalPeople,
                    cases: totalCases,
                    deaths: totalDeath,
                    casesper100: casesper100,
                    lastUpdated: time
                })
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    const showSearchModal = () => {
        setShowModal(true);
    }

    const hideModal = () => {
        setShowModal(false);
    }

    const selectItem = (item) => {
        setData(item.attributes)
    }

    return (
        <View style={styles.screen}>
            <ModalScreen visible={showModal} hideModal={hideModal} selectItem={selectItem}></ModalScreen>
            <View style={[styles.topContainer, Layout.topContainer]}>
                <TitleText text="Corona App"></TitleText>
            </View>
            {isLoading ? (<Text>loading</Text>) : (
                <View style={[styles.middleContainer, Layout.middleContainer]}>
                    <View style={{width: '90%'}}>
                        <CustomCard title="Deutschland" data={stateData}/>
                        {data.county ? (
                            <CustomCard title={data.county} data={{
                                totalPeople: data.EWZ,
                                cases: data.cases,
                                deaths: data.deaths,
                                recovered: data.recovered,
                                casesper100: (data.cases_per_100k).toFixed(0),
                                lastUpdated: (data.last_update)
                            }}/>
                        ) : (<View></View>)
                        }

                    </View>
                    <View style={[Layout.bottomContainer, styles.bottomContainer]}>
                        <CustomButton style={styles.button} onClick={showSearchModal} title="Search for county"/>
                    </View>


                </View>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    topContainer: {
        backgroundColor: Colors.lightBackground,
    },
    middleContainer: {
        backgroundColor: Colors.accent,
        width: '100%',
    },
    bottomContainer: {
        backgroundColor: Colors.accent,
        marginVertical: 10,
    },
    grid: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollView: {
        width: '80%'
    },
    contentContainer: {
        width: '100%',
        alignItems: 'center'
    },
    button: {
        marginTop: 15,
        backgroundColor: 'green'
    },



});
