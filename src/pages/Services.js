import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';


export default class pages extends Component {
  render() {
    const services = '../assets/img/SERVICOS.png';

    return (
          <View style={styles.container}>
            <Image source={ require(services) } style={styles.service}/>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    height:'100%',
    alignItems:'center'
  },
  service:{
    width: '50%',
    height: '25%'
  }

});
