import React from 'react'
import { SafeAreaView } from 'react-native'
import ProfileHead from '../Tab Screen/ProfileHead'

const ProfileScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor : 'white', flex : 1}}>
            <ProfileHead navigation={navigation}/>
        </SafeAreaView>
    )
}

export default ProfileScreen
