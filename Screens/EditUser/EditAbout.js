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

// Redux
import { useSelector, useDispatch } from "react-redux"
import { changeAboutMe } from '../../redux/userSlice';
import { handleSave } from '../../functions/handleEdits';



const EditAbout = ({ navigation }) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [aboutMe, setAboutMe] = useState(user.aboutme)
    const [errorMessage, setErrorMessage] = useState("")

    
    // Handle About Change
    const handleAboutChange = (e) => {
        setAboutMe(e)
    }


    // Handle Edits with Redux
    const handleEditSave = () => {
        handleSave(changeAboutMe, aboutMe, dispatch)
        navigation.navigate("EditProfile")
    }


    return (
        <View style={styles.container}>

            {/* Edit About and back button*/}
            <TopTitle name="About Me" navigation={navigation} backto="EditProfile" paddingTop={30} />

            {/* About Me Input */}
            <View style={styles.emailInputContainer}>
                <Input
                    placeholder='About Me'
                    leftIcon={
                        <Icon
                            name='chat-bubble-outline'
                            size={30}
                            color={colors.mainBlue}
                        />
                    }
                    value={aboutMe}
                    onChangeText={e => handleAboutChange(e)}
                    maxLength={120}
                    inputStyle={{ color: colors.textDark }}
                    style={styles.emailInput}
                    placeholderTextColor={colors.mainBlue}
                    multiline={true}
                    numberOfLines={3}
                    errorMessage={errorMessage}
                />

            </View>

            {/* Change About */}
            <TouchableOpacity onPress={() => handleEditSave()}>
                <EditSaveButton buttonText="Save" />
            </TouchableOpacity>


        </View >

    )
}

export default EditAbout