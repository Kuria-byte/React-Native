import React from 'react'
import { View, Text, FlatList } from 'react-native'

const ListScreen = () => {

    const friends = [
        { name: 'Ian' },
        { name: 'Tom' },
        { name: 'Conteh' },
        { name: 'Zac' },
        { name: 'Nyam' }
    ]

    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text> {item.name} </Text>

            }} />
    )
}

export default ListScreen
