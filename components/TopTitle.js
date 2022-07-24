import React from 'react'
import { colors } from 'react-native-elements'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from "../assets/styles/ProfileStyles"
import Icon from 'react-native-vector-icons/MaterialIcons';

const TopTitle = ({ name, navigation, backto, paddingTop }) => {
    return (
        <View style={{ flexDirection: "row", paddingTop: paddingTop, alignItems: "center" }}>
            <View style={{ flex: 0.1 }}>
                <TouchableOpacity onPress={() => navigation.navigate(backto)}>
                    <Icon name='chevron-left' size={50} color={colors.textDark} />
                </TouchableOpacity>
            </View>
            <View style={styles.pageNameContainer}>
                <Text style={styles.pageNameText}>{name}</Text>
            </View>
        </View>
    )
}

export default TopTitle