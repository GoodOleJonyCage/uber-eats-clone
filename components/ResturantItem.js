import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons'

const ResturantItem = (props) => {
    return (
        <View
            style={{
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "white"
            }}>
            <ResturantImage {...props} />
            <ResturantInfo {...props}/>
        </View>
    )
}

const ResturantImage = (props) => {
    return <>
                <Image
                    source={{
                        //uri: "https://picsum.photos/200/300?random=" + props.index
                        uri : props.resturant.image_url
                    }}
                    style={{ width: "100%", height: 180 }}
                />
                <TouchableOpacity>
                    {/* <MaterialCommunityIcons name="heart" size={25} /> */}
                </TouchableOpacity>
         </>
}

const ResturantInfo = (props) => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: 10,
                marginVertical: 10
            }}
        >
            <View style={{
                flexDirection: "column",
            }}>
                <Text style={{
                    fontWeight: "bold",
                    color: "black"
                }}>
                   {props.resturant.name}
                </Text>
                <Text style={{
                    fontSize: 11,
                    color: "gray"
                }}>
                    123
                </Text>
            </View>
            <View style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
            }}>
                <Text>
                    {props.resturant.rating}
                </Text>
            </View>
        </View>
    );
}


export default ResturantItem
