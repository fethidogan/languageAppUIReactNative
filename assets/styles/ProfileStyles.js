import { StyleSheet } from 'react-native';
import { colors } from '../colors/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // Image Container
    imageContainer: {
        alignItems: "center",
    },
    // Avatar Image
    avatarImage: {
        width: 125,
        height: 125,
        borderRadius: 125
    },
    avatarShadow: {
        alignSelf: "center",
        width: 125,
        height: 125,
        borderRadius: 125,
        elevation: 5,
        shadowColor: colors.textDark,
    },
    ConversationAvatarImage: {
        width: 80,
        height: 80,
        borderRadius: 80
    },
    ConversationAvatarShadow: {
        alignSelf: "center",
        width: 80,
        height: 80,
        borderRadius: 80,
        elevation: 5,
        shadowColor: colors.textDark,
    },
    myAvatarShadow: {
        alignSelf: "center",
        marginTop: 5,
        width: 125,
        height: 125,
        borderRadius: 125,
        elevation: 5,
        shadowColor: colors.textDark,
    },

    // Profile Owner
    profileNameText: {
        textAlign: "center",
        paddingTop: 10,
        fontSize: 17,
        fontFamily: "Montserrat_600SemiBold",
        color: colors.textDark
    },
    userAboutText: {
        textAlign: "center",
        paddingTop: 8,
        fontSize: 13,
        fontFamily: "Montserrat_400Regular",
        color: colors.textDark,
        paddingHorizontal: 50,
    },
    onlineText: {
        fontSize: 13,
        fontFamily: "Montserrat_600SemiBold",
        color: colors.onlineCircle,
        marginLeft: 3
    },
    offlineText: {
        fontSize: 13,
        fontFamily: "Montserrat_600SemiBold",
        color: colors.offlineCircle,
        marginLeft: 3
    },
    onlineCircle: {
        width: 15,
        height: 15,
        borderRadius: 20,
        backgroundColor: colors.onlineCircle,
    },
    offlineCircle: {
        width: 15,
        height: 15,
        borderRadius: 20,
        backgroundColor: colors.offlineCircle
    },
    onlineTextAndCircle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 9
    },

    // Button
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 15,
    },
    InConversationButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
    },
    addAsFriend: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.mainBlue,
        padding: 5,
        borderRadius: 10,
        marginRight: 5,
        justifyContent: "space-between",
    },
    editbutton: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        borderRadius: 10,
        marginRight: 5,
        borderWidth: 2,
        borderColor: colors.mainBlue,
        justifyContent: "space-between",
    },
    callNow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.onlineCircle,
        padding: 5,
        borderRadius: 10,
        marginLeft: 5
    },

    // Texts
    buttonText: {
        fontSize: 13,
        paddingLeft: 3,
        fontFamily: "Montserrat_400Regular",
        color: "white",
    },
    ConversationDurationText: {
        fontSize: 25,
        fontFamily: "Montserrat_500Medium",
        color: colors.onlineCircle,
    },
    editButtonText: {
        fontSize: 13,
        paddingLeft: 3,
        fontFamily: "Montserrat_400Regular",
        color: colors.textDark,
    },
    subheadingTexts: {
        fontSize: 13,
        fontFamily: "Montserrat_400Regular",
    },
    subheadingNumTexts: {
        fontSize: 15,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark,
        paddingLeft: 5
    },
    userInfoText: {
        fontSize: 18,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark,
        paddingHorizontal: 25,
        paddingTop: 15
    },
    userInfoHeading: {
        fontSize: 15,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark,
    },
    userInfoSubHeading: {
        fontSize: 13,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark,
    },

    // Feedback Talk Rating Container
    feedbackTalkRateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        paddingTop: 20
    },
    ConversationFeedbackTalkRateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        paddingTop: 10
    },

    // Icons
    languageIcon: {
        padding: 6,
        borderRadius: 35,
        backgroundColor: colors.mainBlue,
        color: "white",
        alignSelf: "center"
    },

    // Feedbacks
    feedbackContainer: {
        paddingHorizontal: 10,
        paddingTop: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    feedbackAvatarImage: {
        width: 55,
        height: 55,
        borderRadius: 55
    },
    feedbackAvatarShadow: {
        width: 55,
        height: 55,
        borderRadius: 55,
        elevation: 5,
        shadowColor: colors.textDark,
    },
    feedbackratingNum: {
        fontSize: 16,
        fontFamily: "Montserrat_600SemiBold",
        color: colors.textDark,
    },
    feedbackSender: {
        fontSize: 14,
        fontFamily: "Montserrat_600SemiBold",
        color: colors.textDark
    },
    feedbackText: {
        flex: 1,
        fontSize: 13,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark
    },

    // Buttons
    seeAllFeedbacksButton: {
        alignItems: "center",
        marginHorizontal: 30,
        padding: 10,
        backgroundColor: colors.mainBlue,
        borderRadius: 10,
        marginTop: 30
    },
    seeAllFeedbacksText: {
        fontSize: 17,
        fontFamily: "Montserrat_500Medium",
        color: "white"
    },
    buyPremiumButton: {
        alignItems: "center",
        marginHorizontal: 30,
        padding: 10,
        backgroundColor: colors.onlineCircle,
        borderRadius: 10,
        marginTop: 10
    },
    buyPremiumText: {
        fontSize: 17,
        fontFamily: "Montserrat_500Medium",
        color: "white"
    },
    reportUserButton: {
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 30,
        padding: 5,
        border: 1,
        borderWidth: 2,
        borderColor: colors.textDark,
        borderRadius: 10,
    },
    reportUserText: {
        fontSize: 14,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark
    },
    blockUserButton: {
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 30,
        padding: 5,
        border: 1,
        borderWidth: 2,
        borderColor: "#FF5185",
        borderRadius: 10,
    },
    blockUserText: {
        fontSize: 14,
        fontFamily: "Montserrat_500Medium",
        color: "#FF5185"
    },

    // Modal
    modalContainer: {
        backgroundColor: "white",
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: colors.textDark
    },
    modalHeading: {
        fontSize: 18,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark
    }
    ,
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 4,
    },
    checkbox: {
        alignSelf: "center",
    },

    emailInputContainer: {
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 20,
    },

    textInput: {
        fontSize: 15,
        fontFamily: "Montserrat_400Regular",
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: colors.mainBlue,
        paddingLeft: 5,
        marginTop: -11
    },
    reportButtonContainer: {
        alignSelf: "center",
        backgroundColor: colors.mainBlue,
        paddingLeft: 65,
        paddingRight: 65,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginBottom: 30
    },
    reportText: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 19,
        color: "white",
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

});
