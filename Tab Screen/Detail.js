import React from 'react';
import {View,ImageBackground, Image,Text, TouchableOpacity} from 'react-native';
import Navigation from '../Screens/Navigation';


const Detail = ({navigation}) => {
    return (
        <View style={{
            backgroundColor:"white",
            height:"100%",
            paddingHorizontal:20
        }}> 
        <ImageBackground source={{uri : 'https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg'}} 
              style={{width:"100%",height:250}}>
        </ImageBackground>
                <View style={{
                    backgroundColor:"#FFF",
                    padding:10,
                    borderRadius:15
                    }}>
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center",
                           
                        }}>
                                        <View>
                                                <Text style={{
                                                    fontSize:18,
                                                    fontFamily:"Bold",
                                                    color : 'black'
                                                    }}>Software Developer
                                                </Text>

                                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                                    <Text style={{
                                                        fontFamily:"Bold",
                                                        color:"#000",
                                                        opacity:0.6,
                                                        fontSize:14
                                                    }}>PT. AI </Text>

                                                    <Text style={{
                                                        fontFamily:"Bold",
                                                        fontSize:13,
                                                        color:"#B8B8B8",
                                                        marginLeft:25
                                                    }}>Jakarta, Indonesia</Text>
                                                </View>
                                        </View>
                            <View>
                                <TouchableOpacity>
                                <Image source={{uri : 'https://img.icons8.com/ios/64/000000/star--v1.png'}} 
                                    style={{marginLeft : 120,width:24,height:24}}/>
                                </TouchableOpacity>
                            </View>
                          
                           
                        </View>
                            <View style={{
                                flexDirection:"row",
                                paddingTop:20,
                                alignItems:"center"
                            }}>
                                <Image source={{uri : 'https://randomuser.me/api/portraits/men/62.jpg'}} style={{width:30,height:30}}/>
                                <Image source={{uri : 'https://randomuser.me/api/portraits/men/67.jpg'}} style={{width:30,height:30}}/>
                                <Image source={{uri : 'https://randomuser.me/api/portraits/women/81.jpg'}} style={{width:30,height:30}}/>
                                <Image source={{uri : 'https://randomuser.me/api/portraits/women/72.jpg'}} style={{width:30,height:30}}/>
                            <Text style={{
                                fontFamily:"Bold",
                                color:"#B8B8B8",
                                paddingHorizontal:10
                            }}>4 Friends Work Here</Text>
                            </View>
                </View>

                <View style={{
                    flexDirection:"row",
                    marginTop:20
                }}>
                        <View style={{
                            backgroundColor:"#FFF",
                            paddingVertical:10,
                            paddingHorizontal:10,
                            borderRadius:8,
                            width:140
                                }}>
                                    <Text style={{
                                        fontFamily:"Bold",
                                        color:"black",
                                    }}>Experience</Text>
                                    <Text style={{
                                        fontFamily:"Bold"
                                    }}>Minimum 2 year</Text>
                        </View>

                        <View style={{
                            backgroundColor:"#FFF",
                            paddingVertical:10,
                            paddingHorizontal:10,
                            marginLeft:35,
                            borderRadius:8,
                            width:140
                                }}>
                                    <Text style={{
                                        fontFamily:"Bold",
                                        color:"black",
                                    }}>Type</Text>
                                    <Text style={{
                                        fontFamily:"Bold"
                                    }}>Full Time</Text>
                        </View>

                </View>
                <View style={{
                    backgroundColor:"#FFF",
                    borderRadius:15,
                    padding:20,
                    marginTop:20
                }}>
                    <Text style={{
                        fontFamily:"Bold",
                        fontSize:20,
                        marginBottom:10,
                        color : 'black'
                    }}>Job Description</Text>
                    <Text style={{
                        fontFamily:"Bold",
                        color:"#B2B2B2",
                    }}> 
                        Software developers conceive of, design, and build computer programs. 
                        Some develop new applications for mobile or desktop use, while others build underlying operating systems. 
                    </Text>
                </View>
                <View style={{
                    width:"100%",
                    alignItems:"flex-end"
                }}>
                    <View style={{
                        backgroundColor:"#000",
                        alignItems:"center",
                        justifyContent:"center",
                        width:90,
                        height:55,
                        marginTop:5,
                        borderRadius:15,
                        padding:10
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen') }>
                            <Image source={{uri : 'https://img.icons8.com/wired/64/000000/checked.png'}} style={{width:30}} />
                            <Text style={{
                                color:"#FFF",
                                fontFamily:"Bold"
                            }}>Apply</Text>
                        </TouchableOpacity>         
                    </View>

                </View>
        </View>
    )
}

export default Detail
