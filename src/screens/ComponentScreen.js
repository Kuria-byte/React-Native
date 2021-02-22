import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

let name = 'ian'

const ComponentScreen = () => {
    return (
        <View>
           <Text style={styles.textStyle}>Getting Started with React</Text>
            <Text style={styles.subheader}>My name is {name}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }, 
    subheader:{
        fontSize: 15
    }
})
export default ComponentScreen
