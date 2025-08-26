import React from "react";
import { StyleProp, StyleSheet, Text, View } from "react-native";
import colors from "../../../colors/colors";

// example usage
// <AppPrice content={100} size={18} perWhat="night" />

type AppPriceProps = {
    content: number,
    size: number,
    perWhat: string
}

export default function AppPrice({ content, size, perWhat }: AppPriceProps) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, { fontSize: size }]}>{`$${content}`}</Text>
            {perWhat && <Text style={[styles.perWhat,{ fontSize: size ? size / 1.5 : 12 } ]}>{`/${perWhat}`}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        color: colors.primary,
        fontWeight: "bold"
    },
    perWhat: {
        color: "white",
    }
})