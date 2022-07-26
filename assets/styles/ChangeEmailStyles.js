import { StyleSheet } from 'react-native';
import { colors } from '../colors/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    // Profile Owner
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

    emailInputContainer: {
        paddingHorizontal: 20
    },
    emailInput: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 15,
    },
    numpadInput: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 15,
    },
    verifyInput: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 25,
        paddingLeft: 10,
        alignSelf: "center"
    },
    mailChangedText: {
        textAlign: "center",
        fontFamily: "Montserrat_500Medium",
        fontSize: 17,
        color: colors.onlineCircle,
        marginTop: 20
    },
    willRedirectedText: {
        textAlign: "center",
        fontFamily: "Montserrat_500Medium",
        fontSize: 12.3,
        color: colors.onlineCircle,
        marginTop: 10,

    },

    // Register Button
    registerButtonContainer: {
        alignSelf: "center",
        backgroundColor: colors.mainBlue,
        paddingLeft: 65,
        paddingRight: 65,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10
    },
    registerText: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 19,
        color: "white",
    },
    emojiImage: {
        width: 90,
        height: 90,
        resizeMode: "contain"
    },
    genderText: {
        fontSize: 15,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark,
        marginTop: 8
    },

    // Error Toast
    errorTextsecond: {
        fontSize: 25,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark,
    }
});
