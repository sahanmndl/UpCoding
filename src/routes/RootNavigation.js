import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import MainTopNav from "./MainTopNav";

const Stack = createStackNavigator()

const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainTopNav"
                component={MainTopNav}
                options={{headerShown: true, title: "UpCoding"}}
            />
        </Stack.Navigator>
    )
}

export default RootNavigation