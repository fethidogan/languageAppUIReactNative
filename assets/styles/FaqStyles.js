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
    faqContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        marginTop: 28,
        marginBottom:10
    },

    // Texts
    question: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 13,
        color: colors.textDark,
        flex: 1
    },
    answer: {
        fontFamily: "Montserrat_500Medium",
        fontSize: 13,
        color: colors.mainBlue
    },

});
