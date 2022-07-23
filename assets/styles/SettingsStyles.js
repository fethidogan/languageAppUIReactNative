import { StyleSheet } from 'react-native';
import { colors } from '../colors/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    // Profile Owner
    profileNameText: {
        textAlign: "center",
        fontSize: 17,
        fontFamily: "Montserrat_600SemiBold",
        color: colors.textDark
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

    // Texts
    settingSubTitleText: {
        fontSize: 14,
        fontFamily: "Montserrat_600SemiBold",
        color: colors.textDark
    },
    settingSubTitleDescText: {
        fontSize: 13,
        fontFamily: "Montserrat_400Regular",
        color: colors.textDark
    },
    logoutText: {
        fontSize: 22,
        fontFamily: "Montserrat_500Medium",
        color: colors.textDark,
        paddingTop: 5,
        paddingBottom: 5
    },
    followUsText: {
        fontSize: 14,
        fontFamily: "Montserrat_400Regular",
        color: colors.textDark
    },


    // Button
    logoutButton: {
        marginTop: 20,
        marginHorizontal: 15,
        backgroundColor: "#d1d1d1",
        alignItems: "center",
        borderRadius: 10
    }



});
