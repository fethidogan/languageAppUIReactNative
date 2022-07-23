import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from "../assets/styles/ConversationFeedbackStyles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../assets/colors/colors';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

const ConversationFeedback = ({ navigation }) => {

    return (
        <View style={styles.container}>
            {/* Feedback */}
            <Text style={styles.feedbackText}>Feedback ( Optional )</Text>
            <View style={styles.emailInputContainer}>
                <AutoGrowingTextInput
                    style={styles.textInput}
                    placeholder='How was your experience?'
                    placeholderTextColor='#66737C'
                    maxHeight={200}
                    minHeight={45}
                    numberOfLines={2}
                    enableScrollToCaret
                />
            </View>

            {/* Rating */}
            <Text style={styles.ratingText}>Rating</Text>
            <Text style={styles.subText}>How was your conversation ?</Text>

            {/* Stars */}
            <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: 10 }}>
                <Icon name='grade' size={55} color={colors.ratingColor} />
                <Icon name='grade' size={55} color={colors.ratingColor} />
                <Icon name='grade' size={55} color={colors.ratingColor} />
                <Icon name='grade' size={55} color={colors.ratingColor} />
                <Icon name='grade' size={55} color={colors.ratingColor} />
            </View>

            {/* Recommend Text */}
            <View style={{ marginTop: 20 }}>
                <Text style={styles.subText}>Do you recommend this user to others ?</Text>
            </View>

            {/* Stars */}
            <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: 10 }}>
                <Icon name='grade' size={55} color={colors.ratingColor} />
                <Icon name='grade' size={55} color={colors.ratingColor} />
                <Icon name='grade' size={55} color={colors.ratingColor} />
                <Icon name='grade' size={55} color={colors.ratingColor} />
                <Icon name='grade' size={55} color={colors.ratingColor} />
            </View>

            {/* Leave Feedback Button */}
            <TouchableOpacity onPress={() => navigation.navigate("Lobby")}>
                <View style={styles.registerButtonContainer}>
                    <Text style={styles.registerText}>Leave Feedback</Text>
                </View>
            </TouchableOpacity>
        </View >

    )
}

export default ConversationFeedback