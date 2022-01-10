import React from 'react'
import { View,StyleSheet, Image, TouchableOpacity} from 'react-native'

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo}source={require('../images/logo_name.png')}/>
            </TouchableOpacity>    

            <View style={styles.iconCointainer}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={{uri : 'https://img.icons8.com/ios-filled/50/000000/appointment-reminders.png' }}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('JobSearchScreen')}>
                    <Image style={styles.icon} source={{uri : 'https://img.icons8.com/ios-filled/50/000000/find-matching-job.png' }}/>
                </TouchableOpacity>          
                <TouchableOpacity onPress={()=> navigation.navigate('ProfileScreen')}>
                    <Image style={{marginLeft:10 ,width : 35, height : 35,borderRadius : 35,borderColor : 'black'}} source={{uri : 'https://randomuser.me/api/portraits/men/32.jpg' }}/>
                </TouchableOpacity>  
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container : {
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
        marginHorizontal : 20,
    },
    logo : {
        width : 100,
        height : 100, 
        resizeMode : 'contain',
    },
    iconCointainer : {
        flexDirection : 'row',
    },
    icon : {
        width : 30,
        height : 30,
        marginLeft : 10,
        resizeMode : 'contain',
    }
})
