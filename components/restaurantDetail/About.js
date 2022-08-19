import React from "react";
import { View, Text, Image } from "react-native"

const yelpRestaurantInfo={
    name:"Farmhouse Kitchen Thai Cuisine",
    image:"https://static.urbandaddy.com/uploads/assets/image/articles/standard/cc569efce2e18e7b57c7bc047e64ffaf.jpg",
    price:"$$",
    review:1500,
    rating:4.5,
    categories:[
        {title:"Thai"},
        {title:"Comfort Food"},
        {title:"Coffee"},
        {title:"Ice Cream"},
        {title:"Snacks"}
    ],
};

export default function About(props) {
    const {name,image,price,review,rating,categories}=props.route.params;

const formattedCategories=categories.map(category=>category.title).join(" • ");

const description=`${formattedCategories} ${price ? " • " + price : ""}`;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName title={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image
        source={{ uri: props.image }}
        style={{ width: "100%", height: 180 }}
    />
)

const RestaurantName = (props) => (
    <Text
        style={{
            fontSize: 23,
            fontWeight: "bold",
            marginTop: 10,
            color:"black",
            marginHorizontal: 15,
        }}
    >{props.title}
    </Text>
)

const RestaurantDescription = (props) => (
    <Text
        style={{
            marginTop: 9,
            marginHorizontal: 15,
            fontWeight: "bold",
            fontSize: 15.5,
        }}
    >
        {props.description}
    </Text>
)