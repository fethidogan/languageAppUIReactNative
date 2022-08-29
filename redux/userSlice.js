import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",

    initialState: {
        username: "mary_neagen",
        email: "fethido@gmail.com",
        loginMethod: "gmail",
        isPasswordSet: false,
        userpic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg",
        aboutme: "lorem ipsum biseyler",
        nativelanguage: "Russian",
        wantstolearn: [
            { language: "English", proficiency: "A1" },
            { language: "Turkish", proficiency: "A2" }

        ],
        gender: "Female",
        age: 25,
        location: "New Zealand",
        friendRequests: [
            {
                requestedUsername: "ahmet_123",
                requestedProfile: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg",
                requestedFrom: "United States",
                requestedRating: 4.7,
                requestedAge: 22,
                requestedGender: "Male",
                requestedStatus: "Online",
            },
            {
                requestedUsername: "gamze_x122",
                requestedProfile: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000",
                requestedFrom: "Turkey",
                requestedRating: 4.9,
                requestedAge: 20,
                requestedGender: "Female",
                requestedStatus: "Offline",
            }
        ],
        friends: [
            {
                friendUsername: "xasd_asdasd",
                friendPic: "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?cs=srgb&dl=pexels-pixabay-38554.jpg&fm=jpg",
                friendFrom: "United States",
                friendRating: 4.7,
                friendAge: 22,
                friendGender: "Female",
                friendStatus: "Online",
            },
            {
                friendUsername: "dmaslxe",
                friendPic: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000",
                friendFrom: "Turkey",
                friendRating: 4.9,
                friendAge: 24,
                friendGender: "Male",
                friendStatus: "Offline",
            },

        ],
        userFeedbacks: [
            {
                from: "anew_women",
                frompic: "https://imageio.forbes.com/specials-images/imageserve/620be658f8ed1ab7fd2e8d50/0x0.jpg?format=jpg&width=1200",
                rating: 4,
                feedback: "this was an super chat with an very nice person. I hope we can meet again."
            },
            {
                from: "an_axde",
                frompic: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                rating: 4.3,
                feedback: "she was so kind and i love to talk with her"
            },
            {
                from: "some_guy",
                frompic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
                rating: 5,
                feedback: "i couldnt understand what she said at beginning but it was good conversation"
            },
        ],
        usersCall: 250,
        averageRating: 4.6,
    },

    reducers: {
        // Edit Page
        changeUsername: (state, { payload }) => {
            state.username = payload
        },
        changeAboutMe: (state, { payload }) => {
            state.aboutme = payload
        },
        changeAge: (state, { payload }) => {
            state.age = payload
        },
        changeGender: (state, { payload }) => {
            state.gender = payload
        },
        changeNativeLang: (state, { payload }) => {
            state.nativelanguage = payload
        },
        changeLocation: (state, { payload }) => {
            state.location = payload
        },
        changeWantsToLearn: (state, { payload }) => {
            state.wantstolearn = payload
        },

        // Friend Requests
        rejectFriendRequest: (state, { payload }) => {
            state.friendRequests = state.friendRequests.filter(item => item.requestedUsername !== payload)
        },
        acceptFriendRequest: (state, { payload }) => {
            state.friendRequests = state.friendRequests.filter(item => item.requestedUsername !== payload.friendUsername)
            state.friends = [...state.friends, payload]
        },


    }
});

export const {
    changeUsername,
    changeAboutMe,
    changeAge,
    changeGender,
    changeNativeLang,
    changeLocation,
    changeWantsToLearn,
    rejectFriendRequest,
    acceptFriendRequest

} = userSlice.actions;
export default userSlice.reducer;