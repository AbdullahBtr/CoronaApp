import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, Modal, StyleSheet, TextInput, View} from "react-native";
import {useDimensions} from "@react-native-community/hooks";
import Layout from "../constants/Layout";
import Color from "../constants/Color";
import TitleText from "./TitleText";
import CustomButton from "./CustomButton";

export default function ModalScreen(props) {
    const {height} = useDimensions().window;
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [filterCountry, setFilterCountry] = useState("");

    const handleClick = (item) => {
        props.hideModal();
        props.selectItem(item)
    }

    useEffect(() => {
        fetch(
            "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=last_update,EWZ,death_rate,cases,deaths,cases_per_100k,cases_per_population,BL,county,cases7_per_100k,recovered&outSR=4326&f=json"
        )
            .then((response) => response.json())
            .then((json) => {
                setData(json.features)
                console.log(json.features [0])
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Modal
            visible={props.visible}
            animationType="slide"
            supportedOrientations={["portrait", "landscape"]}
        >
            <View style={[Layout.topContainer, Layout.modalTopField]}>
                <TitleText text='Search for county'></TitleText>
            </View>
            <View style={[Layout.middleContainer]}>
                <TextInput
                    style={[Layout.searchField,Layout.searchFieldContainer]}
                    value={filterCountry}
                    onChangeText={setFilterCountry}
                    placeholder="Landkreis suchen"
                />
                {isLoading ? (
                    <ActivityIndicator/>
                ) : (
                    <FlatList
                        data={
                            !filterCountry
                                ? data.slice(0, 0)
                                : data.filter(
                                (item) =>
                                    item.attributes.county
                                        .toLowerCase()
                                        .includes(filterCountry) ||
                                    item.attributes.county.includes(filterCountry)
                                )
                        }
                        keyExtractor={(item, index) => item.attributes.county}
                        renderItem={({item, index}) => (
                            <View style={[styles.buttonContainer]}>
                                <CustomButton
                                    style={styles.button}
                                    title={index + 1 + '. ' + item.attributes.county}
                                    onClick={() => {
                                        handleClick(item);
                                        props.hideModal();
                                        setFilterCountry('');
                                    }}
                                />
                                {/*<Button title={index + 1 + '. ' + item.attributes.county}*/}
                                {/*        onPress={() => {*/}
                                {/*            handleClick(item);*/}
                                {/*            props.hideModal();*/}
                                {/*            setFilterCountry('');*/}
                                {/*        }}>*/}
                                {/*</Button>*/}
                            </View>
                        )}
                    />
                )}
            </View>
            <View style={[Layout.bottomContainer]}>
                <CustomButton style={[styles.cancelButton]} title="Cancel"
                              onClick={() => {
                                  props.hideModal();
                                  setFilterCountry('');
                              }}/>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: Color.lightBackground
    },
    input: {
        marginVertical: 20,
        borderColor: Color.greyBackground,
        borderWidth: 2
    },
    flatlist: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    buttonContainer: {},
    button: {marginBottom: 10,},
    cancelButton: {
        width: '100%',
        backgroundColor: Color.danger,
        marginBottom: 10,
    },


})