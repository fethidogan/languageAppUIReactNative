// React
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/ChangeEmailStyles"
import { colors } from '../../assets/colors/colors';

// Native elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Input } from "react-native-elements"
import TopTitle from '../../components/TopTitle';


// Fixes
// 2- Change Button will be component

const EditAge = ({ navigation }) => {

    return (
        <View style={styles.container}>

            {/* Edit Age and back button */}
            <TopTitle name="Age" navigation={navigation} backto="EditProfile" paddingTop={30} />

            {/* Edit Age Input */}
            <View style={styles.emailInputContainer}>
                <Input
                    placeholder='Your Age'
                    leftIcon={
                        <IonIcon
                            name='calendar'
                            size={30}
                            color={colors.mainBlue}
                        />
                    }
                    inputStyle={{ color: colors.textDark }}
                    style={styles.emailInput}
                    placeholderTextColor={colors.mainBlue}
                // errorMessage='Error'
                />

            </View>

            {/* Change Age */}
            <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
                <View style={styles.registerButtonContainer}>
                    <Text style={styles.registerText}>Change Age</Text>
                </View>
            </TouchableOpacity>




        </View >

    )
}

export default EditAge