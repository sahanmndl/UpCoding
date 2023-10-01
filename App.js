import "react-native-gesture-handler";
import React from "react";
import RootNavigation from "./src/routes/RootNavigation";
import {DarkTheme, NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";

export default function App() {
    return (
        <NavigationContainer theme={DarkTheme}>
            <StatusBar style={'light'}/>
            <RootNavigation/>
        </NavigationContainer>
    );
}
