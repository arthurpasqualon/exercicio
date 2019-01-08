import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
//import {Rating} from 'react-native-elements'


export default class Comments extends Component {

  
  render() {
   let profile = {uri : this.props.comment.urlFoto}
    return (
      <View style={styles.comment}>
        <Image source={profile} style={styles.commentProfile} />
        <View style={styles.commentContent}>
          <Text style={styles.commentAuthor}>{this.props.comment.nome}</Text>
          <Text style={styles.commentTitle}>{this.props.comment.titulo}</Text>
          <Text style={styles.commentText}>{this.props.comment.comentario}</Text>
        </View>
        <View style={styles.ratingBox}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

comment: {
  marginTop:5,
  flexDirection: 'row',
  flex:1
},

commentProfile:{
  width: 35,
  height: 35,
  marginHorizontal: 5,
  borderRadius: 100
},

commentContent: {
  flexDirection: 'column',
  flex:1,
  marginHorizontal: 5
},

commentAuthor: {
  color:'#ffa500',
  width:'100%',
  fontSize: 7,
  marginHorizontal: '3%',
  marginBottom:2
},

commentTitle: {
  color:'#ffa500',
  width:'100%',
  fontSize: 7,
  marginHorizontal: '3%',
  marginBottom:2
},

commentText: {color:'#ffa500',
width:'120%',
fontSize: 7,
marginHorizontal: '3%',
marginBottom:2
},

ratingBox: {
  marginRight:5,
  flexDirection: 'row',
  marginTop:5
}

});
