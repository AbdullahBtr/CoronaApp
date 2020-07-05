import Color from "../constants/Color";
export default {
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    middleContainer: {
        flex: 8,
        alignItems: 'center',
        backgroundColor: Color.accent,
    },
    bottomContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },



    searchField:{
        marginVertical: 20,
        backgroundColor: 'white',
        borderColor: Color.greyBackground,
        borderWidth: 2,
        borderColor: Color.bg5,        
    },

    searchFieldContainer:{
        paddingLeft: 40,
        paddingRight: 40,
        },

    modalTopField:{
        flex: 2,
        backgroundColor: Color.metric,

    },


    
}