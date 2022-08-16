import { StyleSheet } from 'react-native';
import { colors } from '../colors/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // Request Heading Top
    requestsTextContainer: {
        alignItems: "center",
        marginTop: 50,

    },
    requestsText: {
        fontSize: 25,
        fontFamily: "Montserrat_400Regular",
        color: colors.textDark
    },

    // Avatar Image
    avatarImage: {
        width: 55,
        height: 55,
        borderRadius: 40,
    },
    avatarShadow: {
        alignSelf: "center",
        width: 55,
        height: 55,
        borderRadius: 40,
    },

    // Requests Container
    allFriendReqContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop:15
    },
    individualRequestsLeftContainer: {
        flexDirection: "row",
        flex: 0.9,
        alignItems:"center"
    },
    individualRequestsRightContainer: {
        flex: 0.4,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    messageInfoContainer: {
        marginLeft: 5,
        flex: 1,
    },

    // verify cancel request
    verifyRequest: {
        backgroundColor: colors.mainBlue,
        padding: 5,
        borderRadius: 30,
        color:"white"
    },
    cancelRequest: {
        backgroundColor: colors.cancelRequest,
        padding: 5,
        borderRadius: 30
    },

    // Text Styles
    msgText: {
        flex: 1,
        flexWrap: 'wrap',
        fontFamily: "Montserrat_400Regular",
        color: colors.textDark,
        fontSize: 14,
    },
    requestBoldUserText: {
        flex: 1,
        fontFamily: "Montserrat_600SemiBold"
    },


});
