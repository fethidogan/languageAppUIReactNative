// React 
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/ChangeEmailStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from "react-native-elements"
import TopTitle from '../../components/TopTitle';
import EditSaveButton from '../../components/EditSaveButton';

// Fixes 
// 1- Get name from Redux
// 2- Dispatch new name to redux 
// 3- if name is only ________ or num of chars < 3 show error

const EditName = ({ navigation }) => {
    const [username, setUsername] = useState("fethidoido")
    const [nameError, setNameError] = useState("")

    // Handle Name Change
    const handleNameChange = (e) => {
        // Regex
        var newName = e.replace(/[^a-z0-9_]/g, "")
        // var newName = e.replace(/^\d+|[\W_]+/g, "")
        var lowered = newName.toLowerCase()
        setUsername(lowered)
    }

    return (
        <View style={styles.container}>

            {/* Edit name title and back button */}
            <TopTitle name="Username" navigation={navigation} backto="EditProfile" paddingTop={30} />


            {/* Name Input */}
            <View style={styles.emailInputContainer}>
                <Input
                    placeholder='Username'
                    leftIcon={
                        <Icon
                            name='account-circle'
                            size={30}
                            color={colors.mainBlue}
                        />
                    }
                    value={username}
                    autoCapitalize='none'
                    onChangeText={e => handleNameChange(e)}
                    inputStyle={{ color: colors.textDark }}
                    style={styles.emailInput}
                    placeholderTextColor={colors.mainBlue}
                    maxLength={25}
                    errorMessage={nameError}
                />

            </View>

            {/* Change Name */}
            <EditSaveButton navigation={navigation} backto="EditProfile" buttonText="Save" />

        </View >

    )
}

export default EditName