import { StyleSheet } from 'react-native';
import { colors } from '../colors/colors';

export const styles = StyleSheet.create({
    // Containers
    container: {
        flex: 1
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
    
    // Create Account
    createAccountText: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark,
        paddingHorizontal: 20,
        paddingTop: 20
    },
    emailInputContainer: {
        paddingHorizontal: 20
    },
    emailInput: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 15,
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
    // Have an account
    haveAnAccountText: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 13,
        color: colors.textDark,
    },
    signInHereText: {
        fontFamily: "Montserrat_500Medium",
        fontSize: 13,
        color: colors.mainBlue,
        marginLeft: 10
    },
});
