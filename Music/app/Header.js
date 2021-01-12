import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class PHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('home')}>
          <Image style={styles.button}
            source={require('../img/ic_keyboard_arrow_down_white.png')} />
        </TouchableOpacity>
        <Text
          style={styles.message}>Đang Phát</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('playlist', { usename: this.props.use })} >
          <Image style={styles.button}
            source={require('../img/ic_queue_music_white.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}
// export default Header;

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  message: {
    flex: 1,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.72)',
    fontWeight: 'bold',
    fontSize: 10,
  },
  button: {
    opacity: 0.72
  }
});
