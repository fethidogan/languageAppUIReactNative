// React
import React, { useState } from 'react'
import { Text, TouchableOpacity, View, TextInput, Modal } from 'react-native'

// Assets
import { styles } from "../../assets/styles/AfterSignOneStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CheckBox } from 'react-native-elements'
import TopTitle from '../../components/TopTitle';
import EditSaveButton from '../../components/EditSaveButton';


// Fixes
// 2- Save Button will be component


const EditLocation = ({ navigation }) => {
    const [page, setpage] = useState(3)
    const [checked, setChecked] = useState(1);
    const [checkedLevel, setCheckedlevel] = useState(1);
    const [modal, setModal] = useState(false);

    return (
        <View style={styles.container}>

            <>
                {/* Location text and back button */}
                <TopTitle name="Location" navigation={navigation} backto="EditProfile" paddingTop={30} />

                {/* Location Filter Input */}
                <View style={styles.LangInputContainer}>
                    <Text style={styles.nameText}>Your Location</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Type Location Ex. Germany'
                        placeholderTextColor='#66737C'
                        maxHeight={200}
                        minHeight={45}
                        enableScrollToCaret
                    />
                </View>

                {/* Location List */}
                <View style={{ marginTop: 10, borderWidth: 1, borderColor: colors.mainBlue, marginHorizontal: 20, borderRadius: 10 }}>
                    {['United Kingdom', 'Germany', 'Spain', "France", "Ukraine"].map((l, i) => (
                        <CheckBox
                            key={i}
                            title={l} // l is language text
                            fontFamily={"Montserrat_500Medium"}
                            textStyle={{ color: colors.textDark, fontSize: 15, fontWeight: "normal" }}
                            containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, marginTop: -5 }}
                            checkedIcon="check-square-o"
                            uncheckedIcon="square-o"
                            checked={checked === i + 1}
                            onPress={() => setChecked(i + 1)}
                        />
                    ))}
                </View>

                {/* Save Button */}
                <View style={{ marginTop: 20 }}>
                    <EditSaveButton navigation={navigation} backto="EditProfile" buttonText="Save" />
                </View>

            </>


        </View >

    )
}

export default EditLocation