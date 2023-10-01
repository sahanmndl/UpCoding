import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import UpcomingContestsView from "../views/UpcomingContestsView";
import OngoingContestsView from "../views/OngoingContestsView";

const TopTabs = createMaterialTopTabNavigator()

const MainTopNav = () => {
    return (
        <TopTabs.Navigator initialRouteName="UpcomingContestsView">
            <TopTabs.Screen
                name="UpcomingContestsView"
                component={UpcomingContestsView}
                options={{title: "Upcoming"}}
            />
            <TopTabs.Screen
                name="OngoingContestsView"
                component={OngoingContestsView}
                options={{title: "Ongoing"}}
            />
        </TopTabs.Navigator>
    )
}

export default MainTopNav