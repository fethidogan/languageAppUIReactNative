// React
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/ChangeEmailStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from "react-native-elements"
import TopTitle from '../../components/TopTitle';
import EditSaveButton from '../../components/EditSaveButton';


const EditGender = ({ navigation }) => {
    const [gender, setGender] = useState("male")
    return (
        <View style={styles.container}>

            {/* Edit gender text and back button */}
            <TopTitle name="Gender" navigation={navigation} backto="EditProfile" paddingTop={30} />

            {/* Edit Gender Input */}
            <View style={{ paddingTop: 20, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={() => setGender("male")}>
                    <View style={{
                        marginRight: 15,
                        alignItems: "center",
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderWidth: gender === "male" ? 1 : 0,
                        borderRadius: 10,
                        borderColor: colors.mainBlue,
                        padding: 5
                    }}>
                        <Image source={require("../../assets/images/male-emoji.png")} style={styles.emojiImage} />
                        <Text style={styles.genderText}>Male</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setGender("female")}>
                    <View style={{
                        marginRight: 15,
                        alignItems: "center",
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderWidth: gender === "female" ? 1 : 0,
                        borderRadius: 10,
                        borderColor: colors.mainBlue,
                        padding: 5
                    }}>
                        <Image source={require("../../assets/images/female-emoji.png")} style={styles.emojiImage} />
                        <Text style={styles.genderText}>Female</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Save Gender */}
            <View style={{ marginTop: 30 }}>
                <EditSaveButton navigation={navigation} backto="EditProfile" buttonText="Save" />
            </View>

        </View >

    )
}

export default EditGender