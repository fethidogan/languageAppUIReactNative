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
        paddingHorizontal: 20,
        marginTop:20
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
        textAlign:"center",
        fontFamily: "Montserrat_500Medium",
        fontSize: 17,
        color: colors.onlineCircle,
        marginTop:20
    },
    willRedirectedText: {
        textAlign:"center",
        fontFamily: "Montserrat_500Medium",
        fontSize: 12.3,
        color: colors.onlineCircle,
        marginTop:10,
    
    },
    textInput:{
        fontSize: 15,
        fontFamily: "Montserrat_400Regular",
        borderWidth: 0.5,
        borderRadius:10,
        borderColor:colors.mainBlue,
        paddingLeft:5
    },

    // Register Button
    registerButtonContainer: {
        marginTop:15,
        alignSelf: "center",
        backgroundColor: colors.onlineCircle,
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal:10,
        borderRadius: 10
    },
    reportButtonContainer: {
        marginTop:15,
        alignSelf: "center",
        backgroundColor: colors.mainBlue,
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal:10,
        borderRadius: 10,
    },
    registerText: {
        fontFamily: "Montserrat_500Medium",
        fontSize: 14,
        color: "white",
    },

    // Delete Button
    reportButtonContainer: {
        marginTop:15,
        alignSelf: "center",
        backgroundColor: colors.cancelRequest,
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal:10,
        borderRadius: 10,
    },
    accountDeletedText: {
        textAlign:"center",
        fontFamily: "Montserrat_500Medium",
        fontSize: 17,
        color: colors.cancelRequest,
        marginTop:20
    },


});
