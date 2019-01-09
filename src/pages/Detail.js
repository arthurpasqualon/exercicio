import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text, Image, ScrollView } from 'react-native';
import api from '../services/api'
import call from 'react-native-phone-call'
//import { MapView } from 'react-native-maps'
import Comments from '../components/Comments'
import Header from '../components/Header'


export default class Detail extends Component {

static navigationOptions = {
    header: null
  }

  state = {
    detail: {},
    comments: [],
    region: {
      latitude: 37,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  }


  async componentDidMount(){
    const id = this.props.navigation.state.params.task
    const response = await api.get(`tarefa/${id}`)
    this.setState({detail: response.data})
    this.setState({comments : response.data.comentarios})
    this.setState({longitude : response.data.longitude})
    this.setState({latitude : response.data.latitude})
  } 

  render() {
    const {navigate} = this.props.navigation
    const phone = '../assets/img/LIGAR.png';
    const services = '../assets/img/SERVICOS.png';
    const address = '../assets/img/ENDERECO.png';
    const comments = '../assets/img/COMENTARIOS.png';
    const favorites = '../assets/img/FAVORITOS.png';
    let cover = {uri: this.state.detail.urlFoto}
    let profile = {uri: this.state.detail.urlLogo}

    const args = {
    number: this.state.detail.telefone,
    prompt: false  
    }

    return (
      <View style={styles.page}>
        <Header detail={this.state.detail} navigation={this.props.navigation}/>
        <ScrollView>
          <Image source={cover} style={styles.coverImage} />
          <View style={styles.profileHeader}>
            <Text style={styles.profileName}>{this.state.detail.titulo}</Text>
            <Image source={profile} style={styles.profileImage} />
          </View>
          <View style={styles.container}>
            <View style={styles.menu}>
            <View style={styles.menuFirst}>
            <TouchableHighlight onPress={() => call(args).catch(console.error)}>
                <Image source={require(phone)} style={{width:'90%', height:70}} /> 
            </TouchableHighlight>
            </View>
            <View style={styles.menuItens}>
            <TouchableHighlight onPress={() => navigate('Services')}>
                <Image style={{width:'90%', height:70}} source={require(services)}/>
            </TouchableHighlight>
            </View>
              <Image source={require(address)} style={styles.menuItens} />
              <Image source={require(comments)} style={styles.menuItens} />
              <Image source={require(favorites)} style={styles.menuLast} />
            </View>
            <View style={styles.divider} />
            <Text style={styles.description}>{this.state.detail.texto}</Text>
            <Image
              source={cover}
              style={styles.map}
            />
            <View style={styles.mapFooter}>
              <Text style={styles.mapAddress}>{this.state.detail.endereco}</Text>
              <Image source={require(address)} style={styles.addressIcon} />
            </View>
            {this.state.comments.map(comment => 
              <Comments key={comment} comment={comment}/>
              )} 
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    page:{
      backgroundColor: '#f9f9f9',
      width:'100%'
    },

    searchIcon:{
      width: 10,
      height: 10,
      marginRight: 5
    },

    coverImage:{
      width: '100%',
      height: 200,
      marginRight: 5
    },

    profileHeader:{
      flexDirection: 'column',
      flex:1, 
      marginBottom: 20
    },

    profileName:{
      width: '100%',
      color: '#ffa500',
      fontSize: 22,
      fontWeight: 'bold',
      marginLeft: 5,
      marginTop:5
    },

    profileImage:{
      backgroundColor: '#FFF',
      alignSelf:'flex-end',
      width: 85,
      height: 85,
      marginRight: 15,
      borderRadius:100,
      marginTop:-65 
    },

    container:{
      flex:1,
      backgroundColor: '#FFF',
      backgroundColor:'white',
      marginHorizontal: '5%',
      marginBottom: 50
    },

    menu:{
      flexDirection: 'row',
      justifyContent:'space-between',
    },

    menuFirst:{
      width: '15%',
      height: 70,
      marginLeft: 3,
      marginTop: 5
    },

    menuLast:{
      width: '15%',
      height: 70,
      marginRight: 3,
      marginTop: 5
    },

    menuItens:{
      width: '15%',
      height: 70,
      marginTop: 5
    },

    divider: {
      borderWidth: 0.8,
      borderColor:'#f9f9f9',
      margin: 6
    },

    description: {
      color:'#ffa500',
      fontSize: 12,
      marginHorizontal: '3%',
      marginBottom:4
    },
    
    map:{
      width: '100%',
      height: 100,
      marginRight: 10
    },

    mapFooter:{
      backgroundColor:'#ffa500',
      height:16,
      flexDirection:'row',
      alignItems:'center',
      justifyContent: 'space-between',
      marginBottom: 10
    },

    mapAddress: {
      color:'white',
      fontSize: 10,
      marginLeft: 10
    },

    addressIcon:{
      width: 20,
      height: 20,
      marginHorizontal: 5,
      backgroundColor: '#FFF',
      marginTop: -10,
      borderRadius: 100
    },

});

/*

TODO
 	    <MapView
              region={this.state.region}
              style={styles.map}
            />
*/

