import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'


export default class Header extends Component {

  render() {
    const { goBack } = this.props.navigation
    let cover = {uri: this.props.detail.urlFoto}
    const search = '../assets/img/PESQUISA.png';

    return (
      <View style={styles.header}>
        <Icon type='material-community' name='arrow-left' color='#FFF' onPress={() => goBack()} iconStyle={styles.navigationButton} />
        <View style={styles.titleContainer}>
        <Icon name='location-on' color='#FFF' iconStyle={styles.titleIcon} /> 
          <Text style={styles.titleText}> {this.props.detail.bairro} - {this.props.detail.cidade} </Text>      
        </View>
	  <Image source={require(search)} style={styles.searchButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

header:{
  justifyContent:'space-between',
  alignItems: 'center',
  paddingTop:10,
  flexDirection: 'row',
  width: '100%',
  height: 40,
  backgroundColor: '#ffa500',
},

navigationButton:{
  alignSelf: 'flex-start',
  fontSize: 15,
  marginRight: 15,
  marginLeft: 5,
  marginBottom: 5
},

searchButton:{
  alignSelf: 'flex-end',
  width: 15,
  height: 15,
  marginRight: 15,
  marginLeft: 5,
  marginBottom: 5
},

titleContainer:{
  alignSelf:'center',
  flexDirection: 'row',
  
},

titleIcon:{
  fontSize: 15
},


titleText:{
  textAlign:'center',
  fontSize: 12,
  color: '#FFF',
  fontWeight: 'bold'
},

})
