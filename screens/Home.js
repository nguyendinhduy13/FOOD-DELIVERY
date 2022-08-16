import React, { useState,useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native"
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItem, { localrestaurants, } from "../components/home/RestaurantItem";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements/dist/divider/Divider";
const VELP_API_KEY = "bPWTQO3-pfAzOs88rtspTS15JbydPENtb3VuXVAgJmzU-AcoFeW7RDmtoVJPLtEfFX3ibxU7aPVuDcdCq5IV1NTdIz2YI5l75BOyqu1xZ3y-fjpNZcUVcnIweVn6YnYx"

export default function Home() {
    const [restaurantdata, setRestaurantdata] = useState([localrestaurants]);
    const [city,setcity]=useState("San Francisco")
    const [activeTab,setActiveTab]=useState("Delivery")
    const getrestaurantsfromyelp = () => {
        const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${VELP_API_KEY}`,
            }
        }
        return fetch(yelpurl, apiOptions)
        .then((res) => res.json())
        .then((json) => setRestaurantdata(json.businesses
        .filter((businesses)=>businesses.transactions
        .includes(activeTab.toLowerCase()))))
    }
 useEffect(() => {
    getrestaurantsfromyelp();
 },[city,activeTab])
return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{ backgroundColor: "white", padding: 15 }}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
            <SearchBar cityhandler={setcity}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItem restaurantdata={restaurantdata} />
        </ScrollView>
        <Divider width={1}/>
        <BottomTabs/>
    </SafeAreaView>
)
}