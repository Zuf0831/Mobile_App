import React from 'react'
import {View,Text,Image,TextInput, ScrollView, TouchableOpacity} from 'react-native';

const Search = ({navigation}) => {
    return (
        <View>
            <ScrollView style={{
                backgroundColor:"#F8F8F8",
                paddingHorizontal:20,
            }}> 
                <Text style={{
                    fontFamily:"Bold",
                    fontSize:18,
                    marginTop:13,
                    color : 'black'
                }}>Find your best jobs.</Text>

                <View style={{
                    backgroundColor:"#FFF",
                    borderRadius:5,
                    padding:5,
                    flexDirection:"row",
                    alignItems:"center",
                    marginTop:20
                }}>
                    <TextInput
                        placeholder="What are you looking for?"
                        placeholderTextColor="#B0B0B0"
                        style={{
                            fontFamily:"Bold",
                            paddingHorizontal:20
                        }}
                    />
                    <View>
                        <TouchableOpacity>
                            <Image style={{width : 30, height : 30, marginLeft : 100}}source={{uri : 'https://img.icons8.com/material/30/000000/search--v1.png'}}/>
                        </TouchableOpacity>
                    </View>
                   
                </View>
                <Text style={{
                        fontFamily:"Bold",
                        marginTop:20,
                        fontSize:15,
                        color : 'black'
                    }}>Most Popular</Text>
                
               
             <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                        <View style={{
                            backgroundColor:"#FFF",
                            height:200,
                            width:150,
                            borderRadius:20,
                            marginTop:35
                        }}>
                            <Image source={{uri : 'https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/64/000000/external-software-developer-online-business-photo3ideastudio-gradient-photo3ideastudio.png'}} style={{width:150,height:150}}/>
                            <TouchableOpacity 
                            
                            onPress={() => navigation.navigate('DetailScreen')}
                            
                            style={{
                                backgroundColor:"#000",
                                height:60,
                                borderRadius:20,
                                marginTop:-10,
                                paddingHorizontal:8,
                                paddingVertical:8
                            }}>
                                <Text style={{
                                    color:"#FFF",
                                    fontFamily:"Bold",
                                    fontSize:13,
                                }}>Software Developer</Text>

                                <View style={{flexDirection:"row",marginTop:4}}>
                                  <View style={{
                                      backgroundColor:"#3E3C3C",
                                      paddingHorizontal:5,
                                      alignItems:"center",
                                      justifyContent:"center",
                                      borderRadius:5
                                      }}>
                                    <Text style={{
                                        color:"#B0B0B0",
                                        fontFamily:"Bold",
                                        fontSize:13
                                        }}>Full time</Text>
                                    </View>

                                    <Text style={{
                                        color:"#B0B0B0",
                                        fontFamily:"Bold",
                                        fontSize:13,
                                        marginLeft:25
                                        }}>$50/h</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            backgroundColor:"#FFF",
                            height:200,
                            width:150,
                            borderRadius:20,
                            marginTop:35,
                            marginHorizontal:30
                        }}>
                            <Image source={{uri : 'https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-accountant-women-profession-sbts2018-flat-sbts2018.png'}} style={{width:150,height:150}}/>
                            <View style={{
                                backgroundColor:"#FFF",
                                height:60,
                                borderRadius:20,
                                marginTop:-10,
                                paddingHorizontal:8,
                                paddingVertical:8
                            }}>
                                 
                                <Text style={{
                                    color:"#000",
                                    fontFamily : 'Bold',
                                    fontSize:13,
                                }}>Accountant</Text>
                                

                                <View style={{flexDirection:"row",marginTop:4}}>
                                <View style={{
                                      backgroundColor:"#DFDFDF",
                                      paddingHorizontal:5,
                                      alignItems:"center",
                                      justifyContent:"center",
                                      borderRadius:5
                                      }}>
                                    <Text style={{
                                        color:"#B0B0B0",
                                        fontFamily:"Bold",
                                        fontSize:13
                                        }}>Full time</Text>
                                </View>
                                    <Text style={{
                                        color:"#B0B0B0",
                                        fontFamily:"Bold",
                                        fontSize:13,
                                        marginLeft:25
                                        }}>$50/h</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            backgroundColor:"#FFF",
                            height:200,
                            width:150,
                            borderRadius:20,
                            marginTop:35,
                           
                        }}>
                            <Image source={{uri : 'https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-taxi-driver-male-occupation-avatar-itim2101-lineal-itim2101.png'}} style={{width:150,height:150}}/>
                            <View style={{
                                backgroundColor:"#FFF",
                                height:60,
                                borderRadius:20,
                                marginTop:-10,
                                paddingHorizontal:8,
                                paddingVertical:8
                            }}>
                                 
                                <Text style={{
                                    color:"#000",
                                    fontFamily:"Bold",
                                    fontSize:13,
                                }}>Car driver</Text>
                                

                                <View style={{flexDirection:"row",marginTop:4}}>
                                <View style={{
                                      backgroundColor:"#DFDFDF",
                                      paddingHorizontal:5,
                                      alignItems:"center",
                                      justifyContent:"center",
                                      borderRadius:5
                                      }}>
                                    <Text style={{
                                        color:"#B0B0B0",
                                        fontFamily:"Bold",
                                        fontSize:13
                                        }}>Full time</Text>
                                </View>
                                    <Text style={{
                                        color:"#B0B0B0",
                                        fontFamily:"Bold",
                                        fontSize:13,
                                        marginLeft:25
                                        }}>$50/h</Text>
                                </View>
                            </View>
                        </View>
                </ScrollView>
                <Text style={{
                    fontFamily:"Bold",
                    marginVertical:20,
                    fontSize:15
                }}>Nearby jobs</Text>

                        <View style={{
                            backgroundColor:"#FFF",
                            marginTop:10,
                            flexDirection:"row",
                            borderRadius:10,
                            height:60,
                            alignItems:"center",
                            paddingHorizontal:20
                        }}>
                                <View style={{
                                    backgroundColor:"#DFDFDF",
                                    borderRadius:5,
                                    height:40,
                                    width:40,
                                    alignItems:"center",
                                    justifyContent:"center"
                                }}>
                                    <Image source={{uri : 'https://img.icons8.com/wired/64/000000/design.png'}} style={{width:40,height:40}}/>
                                </View>

                                <View style={{
                                    paddingHorizontal:20
                                }}>
                                    <Text style={{
                                        fontFamily:"Bold",
                                        fontSize:13
                                    }}>Graphic Designer</Text>
                                    <View style={{
                                        backgroundColor:"#DFDFDF",
                                        borderRadius:5,
                                        width:70,
                                        alignItems:"center",
                                        marginVertical:5
                                    }}>
                                        <Text style={{fontFamily:"Bold",color:"#000",opacity:0.5}}>Part time</Text>
                                    </View>

                                  
                                </View>
                                <Text style={{
                                    fontFamily:"Bold",
                                    fontSize:18,
                                    marginLeft:40,
                                    marginTop:10
                                    }}>$5/h</Text>
                        </View>



                        <View style={{
                            backgroundColor:"#FFF",
                            marginTop:10,
                            flexDirection:"row",
                            borderRadius:10,
                            height:60,
                            alignItems:"center",
                            paddingHorizontal:20
                        }}>
                                <View style={{
                                    backgroundColor:"#DFDFDF",
                                    borderRadius:5,
                                    height:40,
                                    width:40,
                                    alignItems:"center",
                                    justifyContent:"center"
                                }}>
                                    <Image source={{uri : 'https://img.icons8.com/wired/64/000000/medical-doctor.png'}} style={{width:25,height:25}}/>
                                </View>

                                <View style={{
                                    paddingHorizontal:20
                                }}>
                                    <Text style={{
                                        fontFamily:"Bold",
                                        fontSize:13
                                    }}>Nurse</Text>
                                    <View style={{
                                        backgroundColor:"#DFDFDF",
                                        borderRadius:5,
                                        width:70,
                                        alignItems:"center",
                                        marginVertical:5
                                    }}>
                                        <Text style={{fontFamily:"Bold",color:"#000",opacity:0.5}}>Part time</Text>
                                    </View>

                                  
                                </View>
                                <Text style={{
                                    fontFamily:"Bold",
                                    fontSize:18,
                                    marginLeft:90,
                                    marginTop:10
                                    }}>$5/h</Text>
                        </View>

                        <View style={{
                            backgroundColor:"#FFF",
                            marginTop:10,
                            flexDirection:"row",
                            borderRadius:10,
                            height:60,
                            alignItems:"center",
                            paddingHorizontal:20
                        }}>
                                <View style={{
                                    backgroundColor:"#DFDFDF",
                                    borderRadius:5,
                                    height:40,
                                    width:40,
                                    alignItems:"center",
                                    justifyContent:"center"
                                }}>
                                    <Image source={{uri : 'https://img.icons8.com/wired/64/000000/spaghetti.png'}} style={{width:20,height:20}}/>
                                </View>

                                <View style={{
                                    paddingHorizontal:20
                                }}>
                                    <Text style={{
                                        fontFamily:"Bold",
                                        fontSize:13
                                    }}>Cheff</Text>
                                    <View style={{
                                        backgroundColor:"#DFDFDF",
                                        borderRadius:5,
                                        width:70,
                                        alignItems:"center",
                                        marginVertical:5
                                    }}>
                                        <Text style={{fontFamily:"Bold",color:"#000",opacity:0.5}}>Part time</Text>
                                    </View>

                                  
                                </View>
                                <Text style={{
                                    fontFamily:"Bold",
                                    fontSize:18,
                                    marginLeft:90,
                                    marginTop:10
                                    }}>$5/h</Text>
                        </View>


                        <View style={{
                            backgroundColor:"#FFF",
                            marginTop:10,
                            flexDirection:"row",
                            borderRadius:10,
                            height:60,
                            alignItems:"center",
                            paddingHorizontal:20
                        }}>
                                <View style={{
                                    backgroundColor:"#DFDFDF",
                                    borderRadius:5,
                                    height:40,
                                    width:40,
                                    alignItems:"center",
                                    justifyContent:"center"
                                }}>
                                    <Image source={{uri : 'https://img.icons8.com/wired/64/000000/mother-room.png'}} style={{width:30,height:30}}/>
                                </View>

                                <View style={{
                                    paddingHorizontal:20
                                }}>
                                    <Text style={{
                                        fontFamily:"Bold",
                                        fontSize:13
                                    }}>Baby Sitter</Text>
                                    <View style={{
                                        backgroundColor:"#DFDFDF",
                                        borderRadius:5,
                                        width:70,
                                        alignItems:"center",
                                        marginVertical:5
                                    }}>
                                        <Text style={{fontFamily:"Bold",color:"#000",opacity:0.5}}>Part time</Text>
                                    </View>

                                  
                                </View>
                                <Text style={{
                                    fontFamily:"Bold",
                                    fontSize:18,
                                    marginLeft:85,
                                    marginTop:10
                                    }}>$5/h</Text>
                        </View>
            </ScrollView>
        </View>
    )
}

export default Search
