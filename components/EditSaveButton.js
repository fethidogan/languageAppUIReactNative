import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { styles } from "../assets/styles/ChangeEmailStyles"

const EditSaveButton = ({ buttonText }) => {
    return (

        <View style={styles.registerButtonContainer}>
            <Text style={styles.registerText}>{buttonText}</Text>
        </View>


    )
}

export default EditSaveButton