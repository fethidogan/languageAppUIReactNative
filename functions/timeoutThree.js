// navigate to settings after 3
export const timeOutThree = (navigation) => {
    setTimeout(() => {
        navigation.navigate("Settings")
    }, 3000)
}