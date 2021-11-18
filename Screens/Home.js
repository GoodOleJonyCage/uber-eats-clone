import React,{useState,useEffect} from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import Resturants from '../components/Resturants'
import SearchBar from '../components/SearchBar'
import {YelpKey} from '../components/YelpKey'

export default function Home({ navigation }) {
    
    const [resturantdata, setresturantdata] = useState( );
    
    const getYelpData = () => {
        
        let YelpKeyID = "NLPDFwIx-sSI1s8gNhD3FTW7kusUHaMc13vOysJ09VKlbxme6BzQpF3qG80m7I8Qr4Xa_Y9AcChqbL87DWOIRLb4qPD-7fXCKxN_L2oiagEo5mdTghmHzimFYZOVYXYx";
        const anywhereurl ="https://cors-anywhere.herokuapp.com/";
        const yelpurl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=milton";
        const apioptions = {
            headers: {
                "accept": "application/json",
                "x-requested-with": "xmlhttprequest",
                "Access-Control-Allow-Origin":"*",
                "Authorization": `Bearer ${YelpKeyID}`
            }
        }
        fetch(anywhereurl + yelpurl, apioptions)
            .then(result => result.json())
            .then(data => setresturantdata(data));
    }

    useEffect(() => {
         getYelpData();
    }, [])
     
    return (
        
        <SafeAreaView
            style={{
                backgroundColor: "lightgrey",
                flex: 1
            }}>
            <View
                style={{
                    backgroundColor: "white",
                    padding: 15
                }}>
                <HeaderTabs navigation={navigation} />
                <SearchBar />
            </View>
            <Categories />
            <Resturants navigation={navigation} resturantdata={resturantdata}/>
        </SafeAreaView>
    )
}


