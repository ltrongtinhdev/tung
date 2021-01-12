import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Player from './Player';
var http = require('./config.js');
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const Track = this.props.route.params.Data
    console.log("Track",Track)
    return (
      <Player 
        navigation={this.props.navigation}
        tracks={Track}
        use={this.props.route.params.use}
        id ={this.props.route.params.id}
       />
    );

  }
}


