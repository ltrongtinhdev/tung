import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const AlbumArt = ({
  url,
  onPress
}) => (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: url }}
      />
    </View>
  );

export default AlbumArt;

const { width, height } = Dimensions.get('window');
const imageSize = width - 48;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 24,
    paddingRight: 24,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#fff',
  },
})
