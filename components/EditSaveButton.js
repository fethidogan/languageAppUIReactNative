import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { styles } from "../assets/styles/ChangeEmailStyles"

const EditSaveButton = ({ navigation, backto, buttonText }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(backto)}>
            <View style={styles.registerButtonContainer}>
                <Text style={styles.registerText}>{buttonText}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default EditSaveButton