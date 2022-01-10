import React from 'react'
import { View, Image, StyleSheet} from 'react-native'
import LoginForm from '../Components/LoginForm'

const LoginScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={require('../images/LOGO.png')} style={{height : 100, width : 100}}/>
        </View>
        <LoginForm navigation={navigation}/>
    </View>
)


export default LoginScreen

const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor : 'white',
        paddingTop : 50, 
        paddingHorizontal : 12
    },

    logoContainer : {
        alignItems : 'center',
        marginTop : 60,

    }
}
)