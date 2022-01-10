import React from 'react'
import { View, Text , StyleSheet, TouchableOpacity, Image} from 'react-native'
import Detail from './Detail'

const DetailHead = ({navigation}) => (
    <View>
        <Header navigation={navigation}/>
        <Detail navigation={navigation}/>
    </View> 
    )

export default DetailHead

const image = 'https://img.icons8.com/material/90/000000/back--v1.png';

const Header = ({navigation}) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('JobSearchScreen')}>
      <Image
        source={{uri: image}}
        style={{width: 30, height: 30, marginTop: 12, marginLeft : 8}}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 10,
    },
  
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
  });
  