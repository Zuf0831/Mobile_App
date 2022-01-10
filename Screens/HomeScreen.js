import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView} from 'react-native'
import Header from '../Components/Header'
import Stories from '../Components/Stories'
import Navbar ,{bottomTabIcons} from '../Tab Screen/Bottomtabs'
import Post from '../Post/Post'
import { POSTINGAN } from '../data/posting'

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation}/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Stories />
            {POSTINGAN.map((post, index) => (
            <Post post={post} key={index} />
            ))}
        </ScrollView>
            <Navbar icons={bottomTabIcons} />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#ffffff',
        flex : 1,
    }
})
