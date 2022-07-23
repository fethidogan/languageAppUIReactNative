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

    // Profile Owner
    profileNameText: {
        textAlign: "center",
        fontSize: 17,
        fontFamily: "Montserrat_600SemiBold",
        color: colors.textDark
    },
    reviewCountText: {
        textAlign: "center",
        paddingTop: 5,
        fontSize: 13,
        fontFamily: "Montserrat_400Regular",
        color: colors.textDark
    },
    userNameFeedback: {
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        marginLeft: -35
    },

    // Feedback Talk Rating Container
    feedbackTalkRateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        paddingTop: 10
    },


    // Feedbacks
    feedbackContainer: {
        paddingHorizontal: 10,
        paddingTop: 15,
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


});
