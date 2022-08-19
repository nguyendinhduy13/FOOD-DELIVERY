import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localrestaurants = [
    {
        name: "Beachside Bar",
        image_url: "https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?w=2000",
        categories: ["Cafe", "Bar"],
        price: "10$",
        review: 1244,
        rating: 4.5,
    },
    {
        name: "Benihama",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/67/cc/f8/chestnut-restaurant.jpg",
        categories: ["Cafe", "Bar"],
        price: "20$",
        review: 1244,
        rating: 3.7,
    },
    {
        name: "VietNam's Grill",
        image_url: "https://essencedining.com/wp-content/uploads/2021/03/8.-Restaurant_1.jpg",
        categories: ["VietNam", "Bar"],
        price: "20$",
        review: 1044,
        rating: 4.9,
    },
];

export default function RestaurantItem({ navigation, ...props }) {
    return (
        <>
            {props.restaurantdata.map((restaurant, index) => (
                <TouchableOpacity key={index} activeOpacity={1} style={{ marginBottom: 30 }}
                    onPress={() => navigation.navigate("RestaurantDetail",{
                        name:restaurant.name,
                        image:restaurant.image_url,
                        price:restaurant.price,
                        review:restaurant.review,
                        rating:restaurant.rating,
                        categories:restaurant.categories,
                    })}>
                    <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>

                        <Image
                            style={{ width: "100%", height: 180 }}
                            source={{
                                uri: restaurant.image_url,
                            }}
                        />
                        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
                            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
                        </TouchableOpacity>
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>
                </TouchableOpacity>
            ))}

        </>
    )
}


const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {props.name}
            </Text>
            <Text style={{ fontSize: 13, color: "gray" }}>
                30-45 min
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
            <Text>{props.rating}</Text>
        </View>
    </View>
)