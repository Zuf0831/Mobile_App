import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const PostFooter = () => {
  return (
    <View style={style.container}>
      <View style={style.spasi}>
        <View style={{marginLeft: 16}}>
          <Image style={{height : 25, width : 25}}source={{uri : 'https://img.icons8.com/material-outlined/48/000000/like--v1.png'}}/>
        </View>
        <View style={style.flip}>
          <Image style={{height : 25, width : 25}}source={{uri : 'https://img.icons8.com/material-outlined/32/000000/chat--v1.png'}}/>
        </View>
        <View style={{marginLeft: 16}}>
          <Image style={{height : 25, width : 25}}source={{uri : 'https://img.icons8.com/material-outlined/48/000000/filled-sent.png'}}/>
        </View>
      </View>
      <View style={style.bookmarkIconContainer}>
        <Image style={{height : 25, width : 25}}source={{uri : 'https://img.icons8.com/material-outlined/24/000000/bookmark-ribbon--v2.png'}}/>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
  },
  spasi: {
    flexDirection: 'row',
    width: '50%',
  },
  bookmarkIconContainer: {
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 16,
  },
  rotasi: {
    transform: [{rotate: '16deg'}],
  },
  flip: {
    transform: [{scaleX: -1}],
    marginLeft: 16,
  },
});

export default PostFooter;
