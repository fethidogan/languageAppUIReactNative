import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from "../assets/styles/ReportBugStyles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../assets/colors/colors';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

const ReportBug = ({ navigation }) => {

    return (
        <View style={styles.container}>

            {/* Navigate and user text */}
            <View style={{ flexDirection: "row", paddingTop: 50, alignItems: "center" }}>
                <View style={{ flex: 0.1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                        <Icon name='chevron-left' size={50} color={colors.textDark} />
                    </TouchableOpacity>
                </View>
                {/* Settings Text*/}
                <View style={styles.pageNameContainer}>
                    <Text style={styles.pageNameText}>Report Bug</Text>
                </View>
            </View>

            <View style={styles.emailInputContainer}>
                <AutoGrowingTextInput
                    style={styles.textInput}
                    placeholder='Please tell more about the bug.'
                    placeholderTextColor='#66737C'
                    maxHeight={200}
                    minHeight={45}
                    enableScrollToCaret
                />

            </View>

            {/* Report Bug */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, alignItems: "center" }}>
                
                <TouchableOpacity>
                    <View style={styles.registerButtonContainer}>
                        <Text style={styles.registerText}>Upload Screenshot</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.reportButtonContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.registerText}>Send</Text>
                            <Icon name='chevron-right' size={30} color="white" />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <Text style={styles.mailChangedText}>Reported bug succesfully.</Text>
            <View style={{ paddingHorizontal: 60 }}>
                <Text style={styles.willRedirectedText}>You will be redirected to lobby in <Text style={{ color: "red" }}>3</Text> seconds.</Text>
            </View>

        </View >

    )
}

export default ReportBug