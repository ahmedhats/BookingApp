import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    type: string,
    content: string
}

export default function AppTitle({ type, content }: Props) {
    return (
        <View>
            <Text style={type === 'title' ? styles.title : styles.subtitle}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'normal',
        color: '#737373'
    },
})