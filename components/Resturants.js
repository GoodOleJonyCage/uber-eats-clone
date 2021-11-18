import React from 'react'
import { View, Text, ScrollView,TouchableOpacity } from 'react-native'
import ResturantItem from './ResturantItem'
import ResturantIteItemm from './ResturantItem'

const Resturants = ({ navigation, ...props }) => {

    const resturantdata = { ...props.resturantdata };

    return (
        <View>
            {
                !resturantdata.businesses ? <></> :
                    <ScrollView >
                        {
                            resturantdata.businesses.map((resturant, index) => {
                                return <TouchableOpacity
                                        onPress={() =>
                                        navigation.navigate("RestaurantDetail", {
                                            // name: restaurant.name,
                                            // image: restaurant.image_url,
                                            // price: restaurant.price,
                                            // reviews: restaurant.review_count,
                                            // rating: restaurant.rating,
                                            // categories: restaurant.categories,
                                        })
                                    }>
                                    <ResturantItem
                                        resturant={resturant}
                                        key={index}
                                        index={index} />
                                </TouchableOpacity>
                            })
                        }
                    </ScrollView>
            }
        </View>
    )
}

export default Resturants
