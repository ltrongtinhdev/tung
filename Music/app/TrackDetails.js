import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  ToastAndroid
} from 'react-native';
var http = require('./config.js');
export default class TrackDetails extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '' };
    use=this.props.use
    id=this.props.id
    this.onAddPress 
    this.onMorePress 
  }
  onAddPress=()=>{
    // console.log(use)
    // console.log(id)
    this.props.navigation.navigate('addplaylist', { use:use ,id:id})
  }
  onMorePress=()=>{
    
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.onAddPress}>
        <Image style={styles.button}
          source={require('../img/ic_add_circle_outline_white.png')} />
      </TouchableOpacity>
      <View style={styles.detailsWrapper}>
        <Text style={styles.title} >{this.props.title}</Text>
        <Text style={styles.artist}>{this.props.artist}</Text>
      </View>
      {/* 
       */}
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
    paddingBottom:10
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  artist: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    opacity: 0.72,
  },
  moreButton: {
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 2,
    opacity: 0.72,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButtonIcon: {
    height: 17,
    width: 17,
  }
});
