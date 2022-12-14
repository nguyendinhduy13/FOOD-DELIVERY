import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native"

export default function HeaderTabs(props) {
    return (
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton
                text="Delivery"
                btncolor="black"
                textcolor="white"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab} />
            <HeaderButton
                text="Pickup"
                btncolor="white"
                textcolor="black"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
        </View>
    )
}

const HeaderButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: props.activeTab === props.text ? "black" : "white",
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 30,
            }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{ color: props.activeTab === props.text ? "white" : "black", fontSize: 15, fontWeight: "90" }}>{props.text}</Text>
        </TouchableOpacity>
    )
}