import React from 'react'
import { View, Text , StyleSheet, TouchableOpacity, Image} from 'react-native'
import Search from './Search'

const SearchHead = ({navigation}) => (
    <View>
        <Header navigation={navigation}/>
        <Search navigation={navigation}/>
    </View> 
    )

export default SearchHead

const image = 'https://img.icons8.com/material/90/000000/back--v1.png';

const Header = ({navigation}) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
      <Image
        source={{uri: image}}
        style={{width: 30, height: 30, marginTop: 12, marginLeft : 8}}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>SEARCH</Text>
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
  
    headerText: {
      color: '#000',
      fontWeight: '700',
      fontSize: 20,
      marginTop: 10,
      marginRight: 155,
    },
  });
  