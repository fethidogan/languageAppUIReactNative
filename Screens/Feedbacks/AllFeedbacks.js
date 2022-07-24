// React
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/AllFeedbacksStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';

// Fixes
// 1- Try to change user name as container

const AllFeedbacks = ({ navigation }) => {
    return (
        <View style={styles.container}>

            {/* User Name Title and back button */}
            <View style={{ flexDirection: "row", paddingTop: 50 }}>
                <View style={{ flex: 0.1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("MyProfile")}>
                        <Icon name='chevron-left' size={50} color={colors.textDark} />
                    </TouchableOpacity>
                </View>
                {/* User Name and Feedback Count*/}
                <View style={styles.userNameFeedback}>
                    <Text style={styles.profileNameText}>Mary Neagen</Text>
                    <Text style={styles.reviewCountText}>10 Feedbacks</Text>
                </View>
            </View>

            <ScrollView>

                {/* Individual Feedback will Mapped*/}
                <View style={styles.feedbackContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.feedbackAvatarShadow}>
                            <Image source={require("../../assets/images/mary.png")} style={styles.feedbackAvatarImage} />
                        </View>
                        {/* Commenter Name and comment */}
                        <View style={{ flexDirection: "column", width: 225, paddingLeft: 5 }}>
                            <Text style={styles.feedbackSender}>Nick Hon</Text>
                            <Text style={styles.feedbackText}>this was an super chat with an very nice person. I hope we can meet again.</Text>
                        </View>
                    </View>
                    {/* Rating */}
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name='grade' size={30} color={colors.ratingColor} />
                        <Text style={styles.feedbackratingNum}>4</Text>
                    </View>
                </View>

                {/* Bottom padding */}
                <View style={{ paddingBottom: 40 }}></View>

            </ScrollView>

        </View>

    )
}

export default AllFeedbacks