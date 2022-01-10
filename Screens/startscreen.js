import React from 'react'
import { View, Text , StyleSheet ,Dimensions, Image, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable'


const Startscreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../images/LOGO.png')}/>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.title}>Share your vision</Text>
                <Text style={styles.text}>Lets connect to discuss your business requirement and your vision</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
                        <LinearGradient 
                            colors={['#08d4c4','#01ab9d']}
                            style={styles.signIn}>
                            <Text style={styles.textSign}>Get Started </Text>
                            <Image style={{width : 20 , height : 20}}source={{uri :'https://img.icons8.com/ios/50/000000/circled-chevron-right.png' }}/>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}


export default Startscreen

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#0ac263'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });