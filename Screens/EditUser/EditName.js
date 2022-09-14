// React 
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/ChangeEmailStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from "react-native-elements"
import TopTitle from '../../components/TopTitle';
import EditSaveButton from '../../components/EditSaveButton';

// Redux
import { useSelector, useDispatch } from "react-redux"
import { changeUsername } from '../../redux/userSlice';
import { handleSave } from '../../functions/handleEdits';

// Fixes
// 3- if name is only ________ or num of chars < 3 show error

const EditName = ({ navigation }) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [username, setUsername] = useState(user.username)
    const [nameError, setNameError] = useState("")

    // Handle Name Change
    const handleNameChange = (e) => {
        // Regex
        var newName = e.replace(/[^a-z0-9_]/g, "")
        // var newName = e.replace(/^\d+|[\W_]+/g, "")
        var lowered = newName.toLowerCase()
        setUsername(lowered)
    }

    // Handle Edits with Redux
    const handleEditSave = () => {
        if (username.length < 6) {
            return setNameError("Username length can't be less than 6")
        }
        setNameError("")
        handleSave(changeUsername, username, dispatch)
        navigation.navigate("EditProfile")
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
            <TouchableOpacity onPress={() => handleEditSave()}>
                <EditSaveButton buttonText="Save" />
            </TouchableOpacity>

        </View >

    )
}

export default EditName