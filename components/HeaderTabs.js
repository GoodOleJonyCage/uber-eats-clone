import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'

export default function HeaderTabs({navigation}) {

    const [activeTab, setactiveTab] = useState('Delievery');

    return (
        <SafeAreaView
            style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton
                navigation={navigation}
                setactiveTab={setactiveTab}
                text="Delievery"
                selected="true"
                activeTab={activeTab} />
            <HeaderButton
                navigation={navigation}
                setactiveTab={setactiveTab}
                text="Take Out"
                selected="false"
                activeTab={activeTab} />
        </SafeAreaView>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity
        onPress={(e) => { props.setactiveTab(props.text) ; props.navigation.navigate(props.text, {
            // name: restaurant.name,
            // image: restaurant.image_url,
            // price: restaurant.price,
            // reviews: restaurant.review_count,
            // rating: restaurant.rating,
            // categories: restaurant.categories,
        }); }}
        style={{
            backgroundColor: props.activeTab == props.text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
            fontSize: 15,
            fontWeight: 900,
            marginVertical: 20
        }}
    >
        <Text
            style={{
                color: props.activeTab != props.text ? "black" : "white",
                fontSize: 15,
                fontWeight: "900"
            }}>
            {props.text}
        </Text>
    </TouchableOpacity>
);
