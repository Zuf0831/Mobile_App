import React , { useState, useEffect}from 'react'
import { View, Text , TextInput, StyleSheet, Pressable, TouchableOpacity, Alert} from 'react-native'
import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase(
    {
        name:'MainDB',
        location : 'default',
    },
    () => { },
    error => {console.log(error)}
);


const SignUpForm = ({navigation}) => {

    const [username, SetUsername] = useState('');
    const [email , SetEmail] = useState('');
    const [password, SetPassword] = useState('');

    // useEffect(() => {
    //     creteTable();
    //     getData();
    // },[]);
    
    // const creteTable = () => {
    //     db.transaction((tx) => {
    //         tx.executeSql(
    //             "CREATE TABLE IF NOT EXISTS "
    //             + "users "
    //             + "(username TEXT, password TEXT, email TEXT);"
    //         )
    //     })
    // }

    // const getData = () => {
    //     try {
    //         db.transaction((tx) => {
    //             tx.executeSql(
    //                 "SELECT username, password, email FROM users",
    //                 [],
    //                 (tx, results) => {
    //                     var len = results.rows.length;
    //                     if (len > 0){
    //                         navigation.navigate('LoginScreen')
    //                     }
    //                 }
    //             )
    //         })
    //     } catch (error){
    //         console.log(error);
    //     }
    // }

    // const setData = async () => {
    //         try {
    //             await db.transaction(async (tx) => {

    //                 await tx.executeSql(
    //                     "INSERT INTO users (username, password,email) VALUES (?,?,?)",
    //                     [username, password, email]
    //                 );
    //             })
    //             navigation.navigate('LoginScreen');
    //         } catch (error) {
    //             console.log(error);
    //         }
    // }
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
                    onChangeText={(value) => SetEmail(value)}
                    value={email}
                    />
                <TextInput/>
            </View>

            <View style={styles.inputText}>
                <TextInput 
                    placeholderTextColor="#444"
                    placeholder="Username"
                    textContentType="username"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={false}
                    onChangeText={(value)=>SetUsername(value)}
                    value={username}
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
                    onChangeText={(value) => SetPassword(value)}
                    value={password}
                    />
                <TextInput/>
            </View>

            <View style={styles.inputText}>
                <TextInput 
                    placeholderTextColor="#444"
                    placeholder="Confirm Password"
                    textContentType="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    />
                <TextInput/>
            </View>

            <Pressable
              titleSize={20}
              style={styles.button}
              onPress={() => navigation.navigate('LoginScreen')}
              >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.signUpContainer}>
              <Text>Already have an account? </Text>
              <TouchableOpacity onPress={() =>  navigation.navigate('LoginScreen')}>
                <Text style={{color: '#0096F6'}}>Log In</Text>
              </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default SignUpForm

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