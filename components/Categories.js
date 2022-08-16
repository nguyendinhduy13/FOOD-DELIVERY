import React from "react";
import {View,Text,Image, ScrollView} from "react-native"

const items=[
    {
        image:require("../assets/images/pickup.png"),
        text:"Pick-up",
    },
    {
        image:require("../assets/images/drink.jpg"),
        text:"Soft Drinks",
    },
    {
        image:require("../assets/images/bakery.png"),
        text:"Bakery Items",
    },
    {
        image:require("../assets/images/fastfood.jpg"),
        text:"Fast Foods",
    },
    {
        image:require("../assets/images/deals.jpg"),
        text:"Deals",
    },
    {
        image:require("../assets/images/desserts.png"),
        text:"Desserts",
    },
]

export default function Categories() {
    return(
        <View style={{
            marginTop:5,
            backgroundColor:"#fff",
            paddingVertical:10,
            paddingLeft:20,
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item,index)=>(
            <View key={index} style={{alignItems:"center",marginRight:30}}>
           <Image source={item.image} style={{
            height:50,
            width:40,
            resizeMode:"contain",
           }}/>
           <Text style={{fontSize:13,fontWeight:"900"}}>{item.text}</Text>
           </View>
            ))}
        </ScrollView>
        </View>
    )
}