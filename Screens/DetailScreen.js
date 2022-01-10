import React from 'react'
import {SafeAreaView} from 'react-native'
import DetailHead from '../Tab Screen/DetailHead'

const DetailScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <DetailHead navigation={navigation}/>
        </SafeAreaView>
    )
}

export default DetailScreen
