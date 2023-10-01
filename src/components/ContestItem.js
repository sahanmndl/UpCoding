import React from "react";
import {Image, Linking, Platform, Text, TouchableOpacity, View} from "react-native";
import Colors from "../constants/Colors";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {formatDurationTime} from "../HelperFunctions";
import { FontAwesome5 } from '@expo/vector-icons';
import {google} from "calendar-link";

const ContestItem = ({item}) => {

    const {name, url, start_time, end_time, site, duration, status, in_24_hours} = item

    const sd = new Date(start_time)
    const now = Math.floor( sd / 1000 )
    const seconds = (now - 978307200)

    const addEventToGoogleCalender = {
        title: name,
        start: start_time,
        end: end_time
    }

    return (
        <TouchableOpacity
            style={{
                backgroundColor: Colors.DARK,
                borderRadius: 8,
                elevation: 4,
                marginBottom: 8,
                padding: 10,
                borderWidth: 0.5,
                borderColor: in_24_hours === "YES" ? Colors.GREEN : Colors.DARK
            }}
            onPress={() => Linking.openURL(url)}
        >
            <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                <View style={{flex: 0.1}}>
                    <Image
                        style={{height: 26, width: 26}}
                        source={site === "CodeChef" ? require('../../assets/codechef.png') :
                            site === "CodeForces" ? require('../../assets/codeforces.png') :
                                site === "AtCoder" ? require('../../assets/atcoder.png') :
                                    site === "TopCoder" ? require('../../assets/topcoder.png') :
                                        site === "HackerRank" ? require('../../assets/hackerrank.png') :
                                            site === "HackerEarth" ? require('../../assets/hackerearth.png') :
                                                site === "LeetCode" ? require('../../assets/leetcode.png') :
                                                    site === "Kick Start" ? require('../../assets/google.png') :
                                                        require('../../assets/placeholder.png')}
                        defaultSource={require('../../assets/placeholder.png')}
                    />
                </View>
                <View style={{flex: 0.9}}>
                    <Text
                        style={{color: 'white', fontSize: 16}}
                        numberOfLines={5}
                    >
                        {name}
                    </Text>
                </View>
            </View>
            <View style={{marginVertical: 14}}>
                <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                    <View style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
                        <MaterialIcons name="hourglass-top" size={24} color="#616161" />
                    </View>
                    <View style={{flex: 0.9}}>
                        <Text style={{color: Colors.LIGHT_GRAY}} numberOfLines={3}>
                            {site === "CodeChef" ? `${start_time} + 05:30:00 (IST)` :
                                `${new Date(start_time).toLocaleString()}`}
                        </Text>
                    </View>
                </View>
                <View style={{flex: 1, alignItems: 'center', flexDirection: 'row', marginTop: 10}}>
                    <View style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
                        <MaterialIcons name="hourglass-bottom" size={24} color="#616161" />
                    </View>
                    <View style={{flex: 0.9}}>
                        <Text style={{color: Colors.LIGHT_GRAY}} numberOfLines={3}>
                            {site === "CodeChef" ? `${end_time} + 05:30:00 (IST)` :
                                `${new Date(end_time).toLocaleString()}`}
                        </Text>
                    </View>
                </View>
                <View style={{flex: 1, alignItems: 'center', flexDirection: 'row', marginTop: 10}}>
                    <View style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
                        <Feather name="clock" size={18} color="#616161" />
                    </View>
                    <View style={{flex: 0.9}}>
                        <Text style={{color: Colors.LIGHT_GRAY}} numberOfLines={3}>
                            {formatDurationTime(duration)}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                    style={{
                        borderRadius: 100,
                        paddingVertical: 3,
                        paddingHorizontal: 6,
                        backgroundColor: Colors.BLUE,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{fontSize: 11, color: 'white', fontWeight: '600'}}>{site}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{height: 40, width: 40, alignItems: 'center', justifyContent: 'center'}}
                    onPress={() => {
                        Platform.OS === "android" || Platform.OS === "web"
                            ? Linking.openURL(google(addEventToGoogleCalender))
                            : Linking.openURL(`calshow:${seconds}`)
                    }}
                >
                    <FontAwesome5 name="calendar-plus" size={20} color={Colors.BLUE} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ContestItem