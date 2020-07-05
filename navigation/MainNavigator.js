import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import InfoScreen from "../screens/InfoScreen";

const Tab = createBottomTabNavigator();

export default function () {

    const [isLoading, setLoading] = useState(false);
    const [stateData, setStateData] = useState([]);


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
                var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                var year = a.getFullYear();
                var month = months[a.getMonth()];
                var date = a.getDate();
                var time = date + ' ' + month + ' ' + year
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

    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                activeTintColor: 'green',
                inactiveTintColor: 'gray',
            }}
                           screenOptions={({route}) => ({
                               tabBarIcon: ({focused, color, size}) => {
                                   if (route.name === 'Home') {
                                       return (
                                           <MaterialCommunityIcons
                                               name={
                                                   focused
                                                       ? 'home'
                                                       : 'home-outline'
                                               }
                                               size={size}
                                               color={color}
                                           />
                                       );
                                   } else if (route.name === 'Info') {
                                       return (
                                           <MaterialCommunityIcons
                                               name={focused ? 'information' : 'information-outline'}
                                               size={size}
                                               color={color}
                                           />
                                       );
                                   }
                               },
                           })}
            >
                <Tab.Screen options={{title: "Home"}} name="Home" component={HomeScreen}/>
                <Tab.Screen options={{title: "Info"}} name="Info" component={InfoScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}