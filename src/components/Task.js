import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight} from 'react-native';


export default class Task extends Component {


  render() {
    const {navigate} = this.props.navigation;

    return (
      <TouchableHighlight
      onPress={() => navigate('Detail', {task: this.props.task})}
      >
        <View style={styles.task}>
        <Text style={styles.taskName}>{this.props.task}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  
  task:{
    padding: 20,
    backgroundColor: '#FFF',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',  
    marginBottom: 15,
    borderRadius: 5,
  },

  taskName:{
    fontSize: 12,
    fontWeight: 'bold'
  }
  
  });
  
