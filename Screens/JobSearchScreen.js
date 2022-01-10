import React from 'react'
import SearchHead from '../Tab Screen/SearchHead'
import { SafeAreaView} from 'react-native'

const JobSearchScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <SearchHead navigation={navigation} />
        </SafeAreaView>
    )
}

export default JobSearchScreen

