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
// 

const EditAbout = ({ navigation }) => {
    const [aboutMe, setAboutMe] = useState("i am bla bla glu glu xxx ddixxasdas")
    const [errorMessage, setErrorMessage] = useState("")

    // Handle About Change
    const handleAboutChange = (e) => {
        setAboutMe(e)
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
                    maxLength={150}
                    inputStyle={{ color: colors.textDark }}
                    style={styles.emailInput}
                    placeholderTextColor={colors.mainBlue}
                    multiline={true}
                    numberOfLines={3}
                    errorMessage={errorMessage}
                />

            </View>

            {/* Change About */}
            <EditSaveButton navigation={navigation} backto="EditProfile" buttonText="Save" />




        </View >

    )
}

export default EditAbout