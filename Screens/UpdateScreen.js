import React from 'react'
import { SafeAreaView } from 'react-native'
import AddNewUpdate from '../UpdateData/AddNewUpdate'

const UpdateScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor : 'white', flex : 1}}>
            <AddNewUpdate navigation={navigation}/>
        </SafeAreaView>
    )
}

export default UpdateScreen
