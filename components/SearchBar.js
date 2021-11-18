import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons' 
import AntDesign from 'react-native-vector-icons/AntDesign' 

const SearchBar = () => {
    return (
        <View  
            style={{
                flexDirection:"row",
                marginTop:15
            }}>
            <GooglePlacesAutocomplete
                styles={{
                    textInput: {
                        backgroundColor: 'lightgrey',
                        borderRadius:20,
                        fontWeight:"700",
                        marginTop:7,
                        borderWidth:0
                    },
                    textInputContainer: {
                        backgroundColor: 'lightgrey',
                        borderRadius:50,
                        flexDirection:"row",
                        alignItems:"center",
                        marginRight:10
                    }
                }}
                renderLeftButton={() => (
                    <View style={{marginLeft:10}}>
                        <Ionicons name="location-sharp" size={24}></Ionicons>
                    </View>
                )}    
                renderRightButton={() => (
                    <View style={{ 
                        flexDirection: "row", 
                        alignItems: 'center',
                        marginRight: 8 , 
                        backgroundColor:"white",
                        padding:9,
                        borderRadius:30
                        }}>
                        <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }}/>
                        <Text style={{ marginLeft: 5 }}>Search</Text>
                    </View>
                )}    
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'YOUR API KEY',
                    language: 'en',
                }}
            />
        </View>
    )
}

export default SearchBar
