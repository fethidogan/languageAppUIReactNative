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

    nameInputContainer: {
        paddingHorizontal: 20,
        marginTop: 50
    },
    ageInputContainer: {
        paddingHorizontal: 20,
        marginTop: 10
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
    textInput: {
        fontSize: 15,
        fontFamily: "Montserrat_400Regular",
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: colors.mainBlue,
        paddingLeft: 5,
        marginTop: 5
    },

    nameText: {
        fontSize: 15,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark,
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
    registerButtonContainer: {
        alignSelf: "center",
        backgroundColor: colors.mainBlue,
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginTop: 120,
    },
    registerText: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 19,
        color: "white",
    },
    secondpageButtonContainer: {
        alignSelf: "center",
        backgroundColor: colors.mainBlue,
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    registerText: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 19,
        color: "white",
    },

    languageButtonContainer: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colors.mainBlue,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 1,
        paddingBottom: 1,
        borderRadius: 10,
    },
    languageButtonText: {
        fontFamily: "Montserrat_500Medium",
        fontSize: 12,
        color: "white",
    },

    // Modal
    modalContainer: {
        backgroundColor: "white",
        marginTop: 20,
        marginHorizontal: 30,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: colors.mainBlue
    },
    modalHeading: {
        fontSize: 18,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark
    },
    seeAllFeedbacksButton: {
        alignItems: "center",
        marginHorizontal: 30,
        padding: 10,
        backgroundColor: colors.mainBlue,
        borderRadius: 10,
        marginTop: 3,
        marginBottom: 15
    },
    seeAllFeedbacksText: {
        fontSize: 17,
        fontFamily: "Montserrat_500Medium",
        color: "white"
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

    LangInputContainer: {
        paddingHorizontal: 20,
        marginTop: 10
    },

    wishedInputContainer: {
        paddingHorizontal: 20,
        marginTop: 5
    },

    firstPageButtonContainer: {
        alignSelf: "center",
        backgroundColor: colors.mainBlue,
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 30
    },

    firstpageLocInputContainer: {
        paddingHorizontal: 20,
        marginTop: 50
    },

    listItem: {
        marginTop: 10,
    },
    body: {
        marginHorizontal: 20,
    },
    name: {
        fontSize: 17,
        fontFamily: "Montserrat_600SemiBold",
        color: colors.textDark,
    },

    signLangInputContainer: {
        paddingHorizontal: 20,
        marginTop: 50
    },

    lastpageButtonContainer: {
        alignSelf: "center",
        backgroundColor: colors.mainBlue,
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20
    },


});
