import React from 'react'
import { View, Text, Image, ScrollView, TouchableWithoutFeedbackBase } from 'react-native'

const items = [
    {
        image: require("../assets/images/bread.png"),
        text: "Bread"
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Coffee"
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Deals"
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Desserts"
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast Food"
    },
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Shopping Bag"
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Soft Drink"
    },
];

const Categories = () => {
    return (
        <View style={{
            marginTop: 10,
            backgroundColor: "white",
            paddingHorizontal: 15,
            paddingVertical: 10
        }}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    items.map((i, index) => {
                        return <CategoryItem key={index} text={i.text} image={i.image} />
                    })
                }
            </ScrollView>
        </View>
    )
}

const CategoryItem = (props) => {
    return (
        <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginHorizontal: 10
        }}>
            <Image source={props.image}
                style={{
                    width: 50,
                    height: 40,
                    resizeMode: "contain"
                }}
            />
            <Text styles={{
                fontSize: 33,
                fontWeight: "900"
            }}>
                {props.text}
            </Text>
        </View>
    )
}


export default Categories
