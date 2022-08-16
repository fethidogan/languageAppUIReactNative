// React
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/AllFeedbacksStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';

// Redux
import { useSelector } from "react-redux"


const AllFeedbacks = ({ navigation }) => {
    const user = useSelector(state => state.user)

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
                    <Text style={styles.profileNameText}>{user.username}</Text>
                    <Text style={styles.reviewCountText}>{user.userFeedbacks.length} Feedbacks</Text>
                </View>
            </View>

            {/* Feedbacks Of User */}
            <ScrollView>
                {user.userFeedbacks.map((item, index) => {
                    return (
                        <View key={item.from} style={styles.feedbackContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={styles.feedbackAvatarShadow}>
                                    <Image source={{ uri: item.frompic }} style={styles.feedbackAvatarImage} />
                                </View>
                                {/* Commenter Name and comment */}
                                <View style={{ flexDirection: "column", width: 225, paddingLeft: 5 }}>
                                    <Text style={styles.feedbackSender}>{item.from}</Text>
                                    <Text style={styles.feedbackText}>{item.feedback}</Text>
                                </View>
                            </View>
                            {/* Rating */}
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Icon name='grade' size={30} color={colors.ratingColor} />
                                <Text style={styles.feedbackratingNum}>{item.rating}</Text>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>

            {/* Bottom padding */}
            <View style={{ paddingBottom: 40 }}></View>
        </View>

    )
}

export default AllFeedbacks