import React, {useState} from 'react';
import {Dimensions, View} from "react-native";
import {PieChart} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width - 20;


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

export default function Chart(props) {

    const [data, setData] = useState([]);

    const [death, setDeath] = useState({
        name: "gestorben",
        population: 2,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "black",
        legendFontSize: 15
    });
    const [recovered, setRecovered] = useState({
        name: "geheilt",
        population: 2,
        color: "green",
        legendFontColor: "black",
        legendFontSize: 15
    });
    const [sick, setSick] = useState({
        name: "erkrankt",
        population: 40,
        color: "red",
        legendFontColor: "black",
        legendFontSize: 15
    });

    // const data1 = [
    //     {
    //         name: "gestorben",
    //         population: props.data.death,
    //         color: "rgba(131, 167, 234, 1)",
    //         legendFontColor: "black",
    //         legendFontSize: 15
    //     }
    // ]


    useEffect(() => {
        setDeath(death => ({...death, population: props.data.deaths}))
        setRecovered(recovered => ({
            ...recovered,
            population: props.data.recovered === null ? 0 : props.data.recovered
        }))
        setSick(sick => ({...sick, population: props.data.cases}))
        setData([death, recovered, sick])
    }, [props.data])

    // useEffect(() => {
    //     setDeath(death => ({...death, population: props.data.deaths}))
    // }, [props.data.deaths])
    //
    // useEffect(() => {
    //     setData([death])
    // }, [death])
    //



    return (
        <View>
            <PieChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />
        </View>
    )
}