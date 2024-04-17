import { View, Text } from "react-native"
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar"
import Constants from "expo-constants"

export default function Layout({ children, Titulo = "Floreria Fleur" }) {
    return (
        <View style={{ flex: 1, backgroundColor: "#fafafa", paddingTop: Constants.statusBarHeight }}>
            <ExpoStatusBar backgroundColor="#fafafa" style="dark" />
            <Text style={{ fontSize: 40, marginHorizontal: 15, color: '#555555', paddingVertical: 10 }}>{Titulo}</Text>
            <View style={{ height: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#e3e3e3' }} />
            {children}
        </View>
    )
}