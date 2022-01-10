import React from 'react'
import { View, Text , ScrollView , Image, StyleSheet} from 'react-native'
import { USER } from '../data/user'
import {Divider} from 'react-native-elements';

const Stories = () => {
    return (
        <View style={{marginBottom : 13}}>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {USER.map((story , index) => (
                    <View key={index} style={styles.viewStoriesContainer}>
                        <Image source={{uri : story.photo}} style={styles.story}/>
                        <Text style={{color : 'black'}}>{story.name}</Text>
                    </View>
                ))}
            </ScrollView>
            <Divider width={1} orientation="horizontal" />
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 3,
        marginLeft : 6,
        borderColor: '#C13584',
      },
      container: {
        marginBottom: 8,
      },
      wrapper: {
        marginLeft: 8,
      },
      viewStoriesContainer: {
        marginBottom: 6,
        alignItems: 'center',
        marginLeft: 16,
      },
      textStori: {
        color: '#000000',
        fontWeight: '500',
      },
})