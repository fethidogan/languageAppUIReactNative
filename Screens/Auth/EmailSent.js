// React
import React, { useEffect } from 'react'
import { BackHandler, Image, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/RegisterStyles"


// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';


const EmailSent = ({ navigation }) => {
    function handleBackButtonClick() {
        navigation.navigate("SignIn");
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    }, []);
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <Icon name='mail' size={130} color="white" />
                <Text style={styles.checkmailHeading}>Email Sent</Text>
                <Text style={styles.checkmailHeading}>Please Check your E-Mail</Text>

                <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                    <View style={{ marginTop: 35 }}>
                        <Text style={styles.checkmailTap}>Tap this text to go back</Text>
                        <Text style={styles.checkmailTap}>Sign In</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EmailSent