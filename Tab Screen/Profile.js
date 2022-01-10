import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView ,SafeAreaView} from 'react-native';
import {Divider} from 'react-native-elements';
import { JOB } from '../data/job';

const Profile = () => {
    return(
    <SafeAreaView>
            <View>
                <View style={styles.skyBlue}></View>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} />
                    <View style={styles.title}>
                        <Text style={styles.name}>Bambang Sanjaya </Text>
                        <Text style={styles.job}>Software Engineer </Text>
                        <View style={{flexDirection : 'row'}}>
                            <Image style={{height : 40, width : 40 , marginTop : 10}}source={{uri : 'https://img.icons8.com/nolan/64/project.png'}}/>
                            <Text style={{fontSize : 15,marginTop: 20 }}> 141 Project</Text>
                        </View>
                    </View>
                    
                </View>
            </View>

            <View>
            <Text style={{color : 'black', marginLeft : 10 , marginBottom : 10 , fontSize : 20}}> Experience </Text>
            </View>

            <Divider width={1} orientation="vertical" />

            <View style={{marginTop : 5 }}>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {JOB.map((lul , index) => (
                    <View key={index} style={styles.viewSkillsContainer}>
                        <Image source={{uri : lul.photo}} style={styles.list}/>
                    </View>
                ))}
            </ScrollView>
            </View>

            <Divider width={1} orientation="vertical" />
            <View style={{flexDirection : 'row', marginBottom : 5}}>
                <View style={{flexDirection : 'row'}}>
                    <Image style={styles.icon} source={{uri : 'https://img.icons8.com/ios-filled/50/000000/new-job.png'}}/>
                    <Text style={styles.text}> 15+ Years</Text>
                </View>
                <View style={{flexDirection : 'row'}}>
                    <Image style={styles.icon} source={{uri : 'https://img.icons8.com/ios-glyphs/50/000000/activity-feed.png'}}/>
                    <View style={{flexDirection : 'column'}}>
                        <Text style={styles.text}> Lastest Activity</Text>
                        <Text style={styles.title}> 2 hours ago</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{flexDirection : 'row'}}>
                    <Image style={styles.icon} source={{uri : 'https://img.icons8.com/ios-filled/50/000000/project-management.png'}}/>
                    <View style={{flexDirection : 'column'}}>
                        <Text style={styles.exp}> Senior Software Engineer </Text>
                        <Text style={styles.titleExp}> PT. Sukasuka Tech </Text>
                    </View>
                </View>
                <View style={{marginLeft : 50}}>
                    <View style={{flexDirection : 'column'}}>
                        <Text style={styles.exp}> Senior DevOps Engineer </Text>
                        <Text style={styles.titleExp}> PT. AwcLone Server </Text>
                    </View>
                    <View style={{flexDirection : 'column'}}>
                        <Text style={styles.exp}> AI Engineer </Text>
                        <Text style={styles.titleExp}> PT. AI Proza  </Text>
                    </View>
                </View>
                <Divider width={1} orientation="vertical" />

                <View style={{flexDirection : 'row'}}>
                    <Image style={styles.icon} source={{uri : 'https://img.icons8.com/ios-filled/50/000000/education.png'}}/>
                    <View style={{flexDirection : 'column'}}>
                        <Text style={styles.exp}> Computer Engineering Bachelor Degree </Text>
                        <Text style={styles.titleExp}> Telkom University </Text>
                    </View>
                </View>
                <View style={{marginLeft : 50}}>
                    <View style={{flexDirection : 'column'}}>
                        <Text style={styles.exp}> Machine Learning Master Degree </Text>
                        <Text style={styles.titleExp}> Oxford University </Text>
                    </View>
                </View>
            </View>
    </SafeAreaView>
    )
  }

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 2
    },
    skyBlue: {
        backgroundColor: 'white',
        height: 100
    },
    imageWrapper: {
        alignItems: 'center',
        marginTop: -75,
        marginBottom: 10,
        marginLeft : 10, 
        flexDirection : 'row'
    },
    title : {
        flexDirection : 'column',
        marginLeft : 10
    },
    image: {
        width: 150,
        height: 150,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 100
    },
    name: {
        marginTop : 20,
        fontSize: 25,
        color: 'black',
        marginLeft : 5,
    },
    job : {
        fontSize: 15,
        color: 'black',
    },
    viewSkillsContainer: {
        marginBottom: 6,
        alignItems: 'center',
        marginLeft: 16,
      },
    list : {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 3,
        marginLeft : 6,
        borderColor: '#C13584',
      },
    icon : {
        width : 40,
        height : 40,
        marginLeft : 12,
        marginTop : 10,
        resizeMode : 'contain',
    },
    text : {
        color : 'black', 
        fontSize : 20, 
        alignItems : 'center',
        marginTop : 10
    },
    title : {
        color : 'black', 
        fontSize : 12, 
        alignItems : 'center',
        marginTop : 1,
        marginBottom : 5
    },
    exp : {
        color : 'black', 
        fontSize : 16, 
        alignItems : 'center',
        marginTop : 10

    },
    titleExp : {
        color : 'black', 
        fontSize : 16, 
        alignItems : 'center',
        marginTop : 1
    }
});