// React
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/ChangeEmailStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import TopTitle from '../../components/TopTitle';
import EditSaveButton from '../../components/EditSaveButton';

// Redux
import { useSelector, useDispatch } from "react-redux"
import { changeGender } from '../../redux/userSlice';
import { handleSave } from '../../functions/handleEdits';

const EditGender = ({ navigation }) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [gender, setGender] = useState(user.gender)


    // Handle Edits with Redux
    const handleEditSave = () => {
        handleSave(changeGender, gender, dispatch)
        navigation.navigate("EditProfile")
    }


    return (
        <View style={styles.container}>

            {/* Edit gender text and back button */}
            <TopTitle name="Gender" navigation={navigation} backto="EditProfile" paddingTop={30} />

            {/* Edit Gender Input */}
            <View style={{ paddingTop: 20, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                
                {/* Male Image */}
                <TouchableOpacity onPress={() => setGender("Male")}>
                    <View style={{
                        marginRight: 15,
                        alignItems: "center",
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderWidth: gender === "Male" ? 1 : 0,
                        borderRadius: 10,
                        borderColor: colors.mainBlue,
                        padding: 5
                    }}>
                        <Image source={require("../../assets/images/male-emoji.png")} style={styles.emojiImage} />
                        <Text style={styles.genderText}>Male</Text>
                    </View>
                </TouchableOpacity>

                {/* Female Image */}
                <TouchableOpacity onPress={() => setGender("Female")}>
                    <View style={{
                        marginRight: 15,
                        alignItems: "center",
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderWidth: gender === "Female" ? 1 : 0,
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
                <TouchableOpacity onPress={() => handleEditSave()}>
                    <EditSaveButton backto="EditProfile" buttonText="Save" />
                </TouchableOpacity>
            </View>

        </View >

    )
}

export default EditGender