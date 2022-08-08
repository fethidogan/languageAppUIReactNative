import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "mary_neagen",
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
            { friendUsername: "ahmet_123", friendprofile: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg" }
        ],
        userFeedbacks: [
            { from: "asdasd_asd", frompic: "https://imageio.forbes.com/specials-images/imageserve/620be658f8ed1ab7fd2e8d50/0x0.jpg?format=jpg&width=1200", rating: 4 }
        ],
        usersCall: 250,
        averageRating: 4.6,

    },
    reducers: {
        changeUsername: (state, { payload }) => {
            state.username = payload
        }
    }
});

export const { changeUsername } = userSlice.actions;
export default userSlice.reducer;