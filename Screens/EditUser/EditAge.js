// React
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/ChangeEmailStyles"
import { colors } from '../../assets/colors/colors';

// Native elements
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Input } from "react-native-elements"
import TopTitle from '../../components/TopTitle';
import EditSaveButton from '../../components/EditSaveButton';

// Toast
import DropdownAlert from 'react-native-dropdownalert';

// Redux
import { useSelector, useDispatch } from "react-redux"
import { changeAge } from '../../redux/userSlice';
import { handleSave } from '../../functions/handleEdits';


// Fixes
// Show toast if the age is smaller than 12 after save
// Save user data + dispatch to redux when everything is fine

const EditAge = ({ navigation }) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [age, setAge] = useState(user.age)
    const [error, setError] = useState("")

    // Handle Age Change
    const handleNameChange = (e) => {
        var newAge = e.replace(/[^0-9]/g, "")
        setAge(newAge)
    }


    const saveAge = () => {
        // Show error toast if age is smaller than 12
        if (parseInt(age, 10) < 12) {
            setError("Age can't be smaller than 12")
            // dropDownAlertRef.alertWithType('error', 'Error', "Age cant be less than 12");
        } else {
            handleSave(changeAge, age, dispatch)
            navigation.navigate("EditProfile")
        }
    };

    
    return (
        <View style={styles.container}>
            {/* <View style={{ zIndex: 1 }}>
                <DropdownAlert
                    ref={(ref) => {
                        if (ref) {
                            dropDownAlertRef = ref;
                        }
                    }}
                />
            </View> */}

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
                    value={`${age}`}
                    maxLength={2}
                    keyboardType="number-pad"
                    onChangeText={handleNameChange}
                    inputStyle={{ color: colors.textDark }}
                    style={styles.emailInput}
                    placeholderTextColor={colors.mainBlue}
                    errorMessage={error}
                />

            </View>


            {/* Save Age */}
            <TouchableOpacity onPress={() => saveAge()} style={{marginTop:15}}>
                <EditSaveButton backto="EditProfile" buttonText="Save" />
            </TouchableOpacity>



        </View >

    )
}

export default EditAge