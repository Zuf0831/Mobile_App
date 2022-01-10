import React from 'react'
import { View, Text , TextInput, StyleSheet, Pressable, TouchableOpacity} from 'react-native'

const LoginForm = ({navigation}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.inputText}>
                <TextInput 
                    placeholderTextColor="#444"
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                    />
                <TextInput/>
            </View>

            <View style={styles.inputText}>
                <TextInput 
                    placeholderTextColor="#444"
                    placeholder="Password"
                    textContentType="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    />
                <TextInput/>
            </View>

            <View style={styles.textForgot}>
              <Text style={{color: '#6BB0F5'}}>Forgot Password?</Text>
            </View>

            <Pressable
              titleSize={20}
              style={styles.button}
              onPress={() => navigation.navigate('HomeScreen')}
              >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            <View style={styles.signUpContainer}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={() =>  navigation.navigate('SignUpScreen')}>
                <Text style={{color: '#0096F6'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    wrapper : {
        marginTop : 80,
    },

    inputText : {
        borderRadius: 4,
        paddingVertical: 2,
        paddingLeft: 8,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
        height: 45,
        marginHorizontal: 8,
    }, 

    button: {
        backgroundColor: '#0096F6',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
        marginHorizontal: 8,
    },

    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },

    signUpContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    },
    textForgot: {
        alignItems: 'flex-end',
        marginBottom: 30,
        marginRight: 8,
    },
})