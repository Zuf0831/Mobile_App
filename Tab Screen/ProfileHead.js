import React from 'react'
import { View, Text , StyleSheet, TouchableOpacity, Image} from 'react-native'
import Profile from './Profile';

const ProfileHead = ({navigation}) => (
    <View>
        <Header navigation={navigation}/>
        <Profile/>
    </View> 
    )

export default ProfileHead

const image = 'https://img.icons8.com/material/90/000000/back--v1.png';
const setting = 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-setting-basic-ui-elements-flatart-icons-outline-flatarticons.png'

const Header = ({navigation}) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
      <Image
        source={{uri: image}}
        style={{width: 30, height: 30, marginTop: 12, marginLeft : 8}}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>PROFILE</Text>
    <TouchableOpacity onPress={() => navigation.navigate('UpdateScreen')}>
      <Image
        source={{uri: setting}}
        style={{width: 30, height: 30, marginTop: 12, marginRight : 10}}
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
  
    headerText: {
      color: '#000',
      fontWeight: '700',
      fontSize: 20,
      marginTop: 10,
      marginRight: 20,
    },
  });
  