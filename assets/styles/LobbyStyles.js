import { StyleSheet } from 'react-native';
import { colors } from '../colors/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 30,
        paddingHorizontal: 10
    },

    // Choose Language
    chooseLanguage: {
        borderWidth: 1.5,
        padding: 5,
        borderColor: colors.mainBlue,
        borderRadius: 8
    },
    chooseLanguageText: {
        fontSize: 13,
        fontFamily: "Montserrat_400Regular",
        color: colors.mainBlue
    },

    // Selected Language
    selectedLanguageContainer: {
        padding: 7,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.mainBlue,
        borderRadius: 8,
        marginLeft: -55
    },
    selectedLanguageText: {
        fontSize: 13,
        fontFamily: "Montserrat_400Regular",
        color: "white"
    },

    // Find Partner 
    findPartnerContainer: {
        marginTop: 10,
        marginHorizontal: 40,
        padding: 3,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.mainBlue,
        flexDirection: "row",
        borderRadius: 8,
    },
    findPartnerText: {
        fontSize: 16,
        fontFamily: "Montserrat_400Regular",
        color: "white"
    },
    optionContainer: {
        alignItems: "center"
    },

    // Online Users
    onlineUserText: {
        marginTop: 10,
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark
    },

    // Main İndividual Friend List Container
    individualFriendContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingTop: 15
    },

    // Left & Right Container
    individualFriendLeftContainer: {
        flexDirection: "row",
        paddingLeft: 5,
        flex: 1
    },
    individualFriendRightContainer: {
        flex: 0.35,
        alignItems: "center",
        justifyContent: "center",
    },

    // Avatar Image
    avatarImage: {
        width: 55,
        height: 55,
        borderRadius: 55
    },
    avatarShadow: {
        alignSelf: "center",
        width: 55,
        height: 55,
        borderRadius: 55,
        elevation: 5,
        shadowColor: colors.textDark,
    },

    // Online & offline Circles
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
    speakCircle: {
        padding: 6,
        borderRadius: 35,
        backgroundColor: colors.onlineCircle,
        color: "white"
    },
    inviteCircle: {
        padding: 6,
        borderRadius: 35,
        backgroundColor: colors.mainBlue,
        color: "white"
    },

    // Text Styling
    userName: {
        fontSize: 14,
        fontFamily: "Montserrat_600SemiBold",
        color: colors.textDark
    },
    countryName: {
        fontSize: 13,
        fontFamily: "Montserrat_400Regular",
        color: colors.textDark
    },
    rating: {
        fontSize: 15,
        fontFamily: "Montserrat_600SemiBold",
        color: colors.textDark,
    },
    ageGender: {
        fontSize: 13,
        fontFamily: "Montserrat_400Regular",
        color: colors.textDark
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
    callNow: {
        fontSize: 10,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark,
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

    // Setting Modal
    ageBetweenText: {
        paddingHorizontal: 15,
        marginBottom: 10,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark
    },
    genderText: {
        paddingHorizontal: 15,
        marginTop: 5,
        marginBottom: 5,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark
    },

    // Invite Modal
    modalAvatarImage: {
        width: 55,
        height: 55,
        borderRadius: 55,
        marginLeft: -10
    },
    inviteModalContainer: {
        marginTop: 20,
        marginHorizontal: 30,
        borderRadius: 20,

    },
    inviteSenderContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 15
    },
    inviteAcceptButton: {
        padding: 6,
        backgroundColor: colors.mainBlue,
        borderRadius: 6,
        marginTop: 3,
        marginBottom: 15,
        marginTop: 10,
        marginLeft: 15
    },
    inviteDenyButton: {
        padding: 6,
        backgroundColor: colors.cancelRequest,
        borderRadius: 6,
        marginTop: 3,
        marginBottom: 15,
        marginTop: 10,
        marginRight: 15
    },
    inviteProposalText: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 12,
        fontFamily: "Montserrat_500Medium",
        color: "white"
    },
    wantsToTalkText: {
        fontFamily: "Montserrat_500Medium",
        fontSize: 15,
        color: colors.textDark,
        marginTop: 10,
        marginBottom: 10
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
});
