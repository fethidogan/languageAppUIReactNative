import { StyleSheet } from 'react-native';
import { colors } from '../colors/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    emailInputContainer: {
        paddingHorizontal: 20,
        marginTop: 10
    },
    emailInput: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 15,
    },
    textInput: {
        fontSize: 15,
        fontFamily: "Montserrat_400Regular",
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: colors.mainBlue,
        paddingLeft: 5,
    },

    feedbackText: {
        marginHorizontal: 20,
        marginTop: 40,
        fontFamily: "Montserrat_400Regular",
        fontSize: 17,
        color: colors.textDark
    },
    ratingText: {
        marginHorizontal: 20,
        marginTop: 15,
        fontFamily: "Montserrat_400Regular",
        fontSize: 17,
        color: colors.textDark
    },
    subText: {
        marginHorizontal: 20,
        marginTop: 5,
        fontFamily: "Montserrat_400Regular",
        fontSize: 13,
        color: colors.textDark
    },

    // Button
    registerButtonContainer: {
        alignSelf: "center",
        backgroundColor: colors.mainBlue,
        paddingLeft: 65,
        paddingRight: 65,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginTop:50
    },
    registerText: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 19,
        color: "white",
    },

});
