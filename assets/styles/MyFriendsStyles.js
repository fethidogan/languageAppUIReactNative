import { StyleSheet } from 'react-native';
import { colors } from '../colors/colors';

export const styles = StyleSheet.create({
    // Main Container
    container: {
        flex: 1,
    },

    // Top Heading
    friendsHeadingContainer: {
        alignItems: "center",
        paddingTop: 50,

    },
    friendsheadingText: {
        fontSize: 25,
        fontFamily: "Montserrat_400Regular",
        color: colors.textDark
    },

    // Main İndividual Friend List Container
    individualFriendContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingHorizontal: 6,
        paddingTop: 15
    },

    // Left & Right Container
    individualFriendLeftContainer: {
        flexDirection: "row",
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
        fontFamily: "Montserrat_500Medium",
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
        fontSize: 11,
        fontFamily: "Montserrat_600SemiBold",
        color: colors.textDark,
    }
});
