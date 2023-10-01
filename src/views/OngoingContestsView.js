import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import axios from "axios";
import ContestItem from "../components/ContestItem";
import Colors from "../constants/Colors";
import {MultiSelect} from "react-native-element-dropdown";
import {Entypo} from "@expo/vector-icons";

const OngoingContestsView = () => {

    const [contests, setContests] = useState([])
    const [loading, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [selected, setSelected] = useState([])

    const fetchContests = async () => {
        try {
            setLoading(true)
            await axios.get('https://kontests.net/api/v1/all')
                .then((response) => setContests(response.data))
                .catch((e) => console.error(e))
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
            setRefresh(false)
        }
    }

    const onRefresh = async () => {
        setRefresh(true)
        fetchContests()
    }

    useEffect(() => {
        fetchContests()
    }, [])

    const data = [
        {label: 'CodeChef', value: 'CodeChef'},
        {label: 'CodeForces', value: 'CodeForces'},
        {label: 'AtCoder', value: 'AtCoder'},
        {label: 'TopCoder', value: 'TopCoder'},
        {label: 'HackerRank', value: 'HackerRank'},
        {label: 'HackerEarth', value: 'HackerEarth'},
        {label: 'LeetCode', value: 'LeetCode'},
        {label: 'Kick Start', value: 'Kick Start'},
    ];

    const ongoingContests = selected.length > 0
        ? contests.filter((contest) => contest.status === "CODING" && selected.includes(contest.site))
        : contests.filter((contest) => contest.status === "CODING");

    return (
        <View style={{flex: 1, padding: 10}}>
            {loading ? (
                <ActivityIndicator size={'small'} color={Colors.BLUE}/>
            ) : (
                <>
                    <MultiSelect
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        search
                        data={data}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Site"
                        searchPlaceholder="Search..."
                        value={selected}
                        onChange={item => {
                            setSelected(item);
                        }}
                        renderLeftIcon={() => (
                            <Entypo
                                style={styles.icon}
                                color="grey"
                                name="code"
                                size={20}
                            />
                        )}
                        selectedStyle={styles.selectedStyle}
                    />
                    <FlatList
                        refreshing={refresh}
                        onRefresh={onRefresh}
                        showsVerticalScrollIndicator={false}
                        //ListEmptyComponent={NoForumResults}
                        initialNumToRender={50}
                        removeClippedSubviews={false}
                        data={ongoingContests}
                        renderItem={({item}) => (
                            <ContestItem item={item}/>
                        )}
                    />
                </>
            )}
        </View>
    )
}

export default OngoingContestsView

const styles = StyleSheet.create({
    dropdown: {
        height: 40,
        marginBottom: 10,
        backgroundColor: 'transparent',
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingLeft: 10
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'grey'
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    icon: {
        marginRight: 5,
    },
    selectedStyle: {
        borderRadius: 12,
    },
});