import React from "react";
import { StyleProp, StyleSheet, Text, View } from "react-native";
import colors from "../../../colors/colors";

// example usage
// <AppPrice content={22} size={{fontSize: '20px'}}/>

type AppPriceProps = {
    content: number,
    size: StyleProp<any>
}

export default function AppPrice({ content, size }: AppPriceProps) {
    return (
        <View>
            <Text style={[styles.text, size]}>{`$${content}.00`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.primary,
        fontWeight: "bold"
    }
})