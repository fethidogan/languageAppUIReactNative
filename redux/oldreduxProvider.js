import AsyncStorage from "@react-native-async-storage/async-storage"
import { combineReducers, createStore } from "redux"
import { persistReducer, persistStore } from "redux-persist"

// State
const initialState = {
    username: "fethi",
    count: 0
}

// Actions
// export const IncrementCount = () => {
//     return {
//         type: "INCREMENT_COUNT"
//     }

// }

// export const DecrementCount = () => {
//     return {
//         type: "DECREMENT_COUNT"
//     }

// }

// Reducer
const counter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_COUNT":
            return {
                ...state,
                count: state.count + action.payload
            }
            break;
        case "DECREMENT_COUNT":
            return {
                ...state,
                count: state.count - 1
            }
            break;

        default:
            return state
            break;
    }
}

// Root Reducer
const rootReducer = combineReducers({
    counter
})


// Persistent Store
const persistConfig = {
    key: "root",
    storage: AsyncStorage
}

// Persist Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Redux Store
export default () => {
    let reduxStore = createStore(persistedReducer)
    let persistor = persistStore(reduxStore)
    return { reduxStore, persistor }
}