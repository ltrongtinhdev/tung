import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './Header';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Controls';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
// maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0,
      repeatOn: false,
      shuffleOn: false,
    };
  }
  autoNext(){
  }
  setDuration(data) {
    // console.log(totalLength);
    this.setState({ totalLength: Math.floor(data.duration) });
  }
  setTime(data) {
    //console.log(data);
    this.setState({ currentPosition: Math.floor(data.currentTime) });
  }
  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }
  onBack() {
    if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        paused: false,
        totalLength: 1,
        isChanging: false,
        selectedTrack: this.state.selectedTrack - 1,
      }), 0);
    } else {
      this.refs.audioElement.seek(0);
      this.setState({
        currentPosition: 0,
      });
    }
  }
  onForward() {
    if (this.state.selectedTrack < this.props.tracks.length - 1) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        totalLength: 1,
        paused: false,
        isChanging: false,
        selectedTrack: this.state.selectedTrack + 1,
      }), 0);
    }
  }
  render() {
    const track = this.props.tracks[this.state.selectedTrack];
    console.log('dsa')
    console.log(track.audioUrl)
    console.log('dsa11111')
    const video = this.state.isChanging ? null : (
      <Video source={{ uri: track.audioUrl || null }} // Can be a URL or a local file.
        ref="audioElement"
        paused={this.state.paused}               // Pauses playback entirely.
        resizeMode="cover"
        // shuffleOn={this.state.shuffleOn}          // Fill the whole screen at aspect ratio.
        repeat={this.state.repeatOn}
        //onLoadStart={this.loadStart} // Callback when video starts to load
        onLoad={this.setDuration.bind(this)}    // Callback when video loads
        onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
        onEnd={this.onForward.bind(this)}   
        onError={this.videoError}    // Callback when video cannot be loaded
        style={styles.audioElement} />
    );
    return (
      <LinearGradient start={{ x: 0.1, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}>
        {/* <View style={styles.container}> */}
        <StatusBar hidden={true} />
        <Header
          navigation={this.props.navigation} 
          use={this.props.use}/>
        <AlbumArt url={track.albumArtUrl} />
        <TrackDetails
          navigation={this.props.navigation}
          title={track.title}
          artist={track.artist}
          use={this.props.use}
          id={this.props.id}
        />
        <SeekBar
          onSeek={this.seek.bind(this)}
          trackLength={this.state.totalLength}
          onSlidingStart={() => this.setState({ paused: true })}
          currentPosition={this.state.currentPosition} />
        <Controls
          //onPressRepeat={() => this.setState({ repeatOn: !this.state.repeatOn })}
          repeat={this.state.repeatOn}
          shuffleOn={this.state.shuffleOn}
          forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
          onPressShuffle={() => this.setState({ shuffleOn: !this.state.shuffleOn })}
          onPressPlay={() => this.setState({ paused: false })}
          onPressPause={() => this.setState({ paused: true })}
          onBack={this.onBack.bind(this)}
          onForward={this.onForward.bind(this)}
          paused={this.state.paused}
          onPressRepeat={() => this.setState({ repeatOn: !this.state.repeatOn})} 
         />
        {video}
        {/* </View>  */}
      </LinearGradient>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
  audioElement: {
    height: 0,
    width: 0,
  }
};
