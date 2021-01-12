import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput, TouchableOpacity, Image, ScrollView
} from 'react-native';
import styles from '../style';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
// import { MaterialCommunityIcons,AntDesign,Entypo,Ionicons } from '@expo/vector-icons';
var http = require('../config.js');
export default class khampha extends Component {
    constructor(props) {
        super(props)
        this.state = {
            use: this.props.route.params.use,
            gmail: ''
        };
        this.buttonslide = this.buttonslide.bind(this);
        this.Dangxuat = this.Dangxuat.bind(this);
        this.Gettt();
    }
    Gettt() {
        fetch(http().HTTP('GetTT'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.use,
            })
        })
            .then((response) => response.json())
            .then((json) => {
                let a = json.recordset[0].gmail
                this.setState({ gmail: a })
            })
            .catch((err) => {
                console.log(err, "sadsada ")
            })
    }
    buttonslide() {
        this.props.navigation.navigate('playlist', { usename: this.state.use })
    }
    Dangxuat = async () => {
        try {
            await AsyncStorage.removeItem('use');
            this.props.navigation.navigate('sign in')
            // console.log('xóa hành công')
        } catch (error) {
            // Error saving data
        }
    };
    render() {
        return (
            <ScrollView style={styles.containerKhamPha}>
                <LinearGradient
                    // colors={['rgba(14,55,149,2.8)', 'black']}
                    // style={styles.lineargradient}
                    colors={['#4169E1', 'white']}
                    style={styles.lineargradient}
                />
                <View style={styles.containeravt}>
                    <Image style={styles.iconimgavt}
                        source={require('../img/use.png')} />
                    <View>
                        <Text style={styles.txtTitle}>{this.state.use}</Text>
                        <Text style={styles.txtTitle}>{this.state.gmail}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.containerTitle}
                    onPress={this.buttonslide}
                >
                    {/* <MaterialCommunityIcons name="playlist-music" size={35} color="red" /> */}
                    <Text style={styles.txtCanhan}>Playlist</Text>
                    {/* <AntDesign style={{marginLeft:200}} name="right" size={20} color="white" /> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerTitleds}
                    onPress={this.Dangxuat}>
                    {/* <Entypo name="arrow-with-circle-down" size={35} color="red" /> */}
                    <Text style={styles.txtCanhan}>Đăng xuất</Text>
                    {/* <AntDesign style={{marginLeft:200}} name="right" size={20} color="white" /> */}
                </TouchableOpacity>
            </ScrollView>
        )
    }
}