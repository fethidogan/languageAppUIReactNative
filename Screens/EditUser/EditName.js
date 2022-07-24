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


// Fixes
// 2- Save Button will be component

const EditName = ({ navigation }) => {

    return (
        <View style={styles.container}>

            {/* Edit name title and back button */}
            <TopTitle name="Name" navigation={navigation} backto="EditProfile" paddingTop={30} />


            {/* Name Input */}
            <View style={styles.emailInputContainer}>
                <Input
                    placeholder='Your Name'
                    leftIcon={
                        <Icon
                            name='account-circle'
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

            {/* Change Name */}
            <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
                <View style={styles.registerButtonContainer}>
                    <Text style={styles.registerText}>Change Name</Text>
                </View>
            </TouchableOpacity>




        </View >

    )
}

export default EditName