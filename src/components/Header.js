import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// import {Icon} from ...
import api from '../services/api'


export default class Header extends Component {

  render() {
    const {navigate} = this.props.navigation
//    const search = '../../assets/img/PESQUISA.png';

    return (
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}> {this.props.detail.bairro} - {this.props.detail.cidade} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

header:{
  justifyContent:'center',
  paddingBottom:10,
  paddingTop:10,
  flexDirection: 'row',
  width: '100%',
  height: 30,
  backgroundColor: '#ffa500',
},

navigationButton:{
  width: 10,
  height: 10,
  marginRight: 15,
  marginLeft: 5
},

titleContainer:{
  alignSelf:'center',
},

titleIcon:{
  width: 10, height: 10
},


titleText:{
  textAlign:'center',
  fontSize: 10,
  color: '#FFF'
},

})
