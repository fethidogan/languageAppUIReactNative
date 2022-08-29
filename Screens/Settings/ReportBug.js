// React
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/ReportBugStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements & TextInput
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import TopTitle from '../../components/TopTitle';
import { timeOutThree } from '../../functions/timeoutThree';


const ReportBug = ({ navigation }) => {
    const [pageNumber, setPageNumber] = useState(1)
    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const sendBug = () => {
        if (input.length < 40) {
            return setError("Please enter minimum 40 characters!")
        }
        setError("")
        setPageNumber(2)
    }

    return (
        <View style={styles.container}>

            {/* Report bug title and back button */}
            <TopTitle name="Report Bug" navigation={navigation} backto="Settings" paddingTop={30} />

            {pageNumber === 1 &&
                <>

                    {/* Report Bug Input */}
                    <View style={styles.emailInputContainer}>
                        <AutoGrowingTextInput
                            onChangeText={(e) => setInput(e)}
                            style={styles.textInput}
                            placeholder='Please tell more about the bug.'
                            placeholderTextColor='#66737C'
                            maxHeight={200}
                            minHeight={45}
                            enableScrollToCaret
                        />

                    </View>

                    {/* Error Info text */}
                    <Text
                        style={{ fontFamily: "Montserrat_500Medium", textAlign: "center", fontSize: 16, color: colors.cancelRequest, paddingTop: 10 }}>
                        {error}
                    </Text>

                    {/* Report Bug Buttons */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, alignItems: "center" }}>

                        {/* Upload Screenshot */}
                        <TouchableOpacity>
                            <View style={styles.registerButtonContainer}>
                                <Text style={styles.registerText}>Upload Screenshot</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Send Button */}
                        <TouchableOpacity onPress={() => sendBug()}>
                            <View style={styles.reportButtonContainer}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={styles.registerText}>Send</Text>
                                    <Icon name='chevron-right' size={30} color="white" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </>
            }

            {pageNumber === 2 &&
                <>
                    {/* Successfull sent */}
                    <Text style={styles.mailChangedText}>Reported bug succesfully.</Text>
                    <View style={{ paddingHorizontal: 60 }}>
                        <Text style={styles.willRedirectedText}>You will be redirected to lobby in <Text style={{ color: "red" }}>3</Text> seconds.</Text>
                    </View>
                    {timeOutThree(navigation)}
                </>
            }
        </View >

    )
}

export default ReportBug