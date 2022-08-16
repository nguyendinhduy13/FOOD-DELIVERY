import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { Divider } from "react-native-elements";


const foods = [
    {
        title: "Banh mi thit",
        description: "Banh mi and thit",
        price: "12k",
        image: "https://cdn.huongnghiepaau.com/wp-content/uploads/2019/08/banh-mi-kep-thit-nuong-thom-phuc.jpg"
    },
    {
        title: "oc mong tay xao mi",
        description: "oc mong tay and mi",
        price: "40k",
        image: "https://img-global.cpcdn.com/recipes/b681c1f4dbcf5a73/680x482cq70/mi-xao-%E1%BB%91c-mong-tay-recipe-main-photo.jpg"
    },
    {
        title: "bo kobe",
        description: "bo kobe",
        price: "1000k",
        image: "https://i.ytimg.com/vi/nkZOU-f4N9U/hqdefault.jpg"
    }
]

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "bold",
        color: "black"
    }
})

export default function MenuItem() {
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider width={0.5} orientation="vertical"/>
                </View>
            ))}
        </ScrollView>
    )
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image source={{ uri: props.food.image }}
            style={{ width: 100, height: 100, borderRadius: 8 }} />
    </View>
)