import { StyleSheet } from 'react-native';
import { colors } from '../colors/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    pageNameText: {
        textAlign: "center",
        fontSize: 17,
        fontFamily: "Montserrat_600SemiBold",
        color: colors.textDark
    },
    pageNameContainer: {
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        marginLeft: -35
    },


    // Text
    infoText: {
        fontSize: 13,
        fontFamily: "Montserrat_400Regular",
        color: colors.textDark
    },
    refText: {
        textAlign: "center",
        fontSize: 14,
        fontFamily: "Montserrat_500Medium",
        color: colors.mainBlue
    },

    // Button
    shareButtonContainer: {
        alignSelf: "center",
        backgroundColor: colors.mainBlue,
        paddingLeft: 65,
        paddingRight: 65,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginTop: 25
    },
    shareText: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 19,
        color: "white",
    },

    
});
