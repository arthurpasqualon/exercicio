import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import api from '../services/api'
import Task from'../components/Task';

export default class List extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    tasks: []
  }

  async componentDidMount(){ 
    const response = await api.get('tarefa')
    this.setState({tasks: response.data.lista});
  } 

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Exercicio 4all</Text>
        </View>
        <ScrollView contentContainerStyle={styles.taskList}>
          {this.state.tasks.map(task => 
            <Task key={task} task={task} navigation={this.props.navigation}/>
          )} 
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    height: 50,
    paddingTop: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',  
  },

  headerText:{
    fontSize: 16,
    fontWeight: 'bold'
  },

  taskList:{
    padding: 20,
  },

});
