import React, { Component } from 'react';
import {
    View,
    Text, Image, TouchableOpacity, ScrollView
} from 'react-native';
import styles from '../style';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
var http = require('../config.js');
export default class List1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            artist: '',
            albumArtUrl: '',
            audioUrl: '',
            Track: []
        };
        username=this.props.username
        this.ButtonClick = this.ButtonClick.bind(this);
        this.Getlist();
    }
    Getlist() {
        fetch(http().HTTP('List1'))
            .then((response) => response.json())
            .then((json) => {
                if(json.data) {
                    const data = json.data.map(i => {
                        const url = i.albumArtUrl
                        const audioUrl1 = i.audioUrl
                        const obj = {
                            ...i,
                            audioUrl: http().HTTP(`Music/${audioUrl1}`),
                            albumArtUrl: http().HTTP(`Music/${url}`)
                        }
                        return obj
                        
                    })
                    this.setState({ Track: data })
                }
                
            })
            .catch((err) => {
                console.log(err, "Lỗi")
            })
    }
    ButtonClick(key) {
        fetch(http().HTTP(`List1/${key}`), {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then((response) => response.json())
            .then((json) => {
                if(json.data) {
                    const data = json.data.map(i => {
                        const url = i.albumArtUrl
                        const audioUrl1 = i.audioUrl
                        const obj = {
                            ...i,
                            audioUrl: http().HTTP(`Music/${audioUrl1}`),
                            albumArtUrl: http().HTTP(`Music/${url}`)
                        }
                        return obj
                        
                    })
                    this.props.navigation.navigate("music", { 
                        Data: data,
                        id: key,
                        use:username
                     })
                }
                
            })
            .catch((err) => {
                console.log(err, "Lỗi")
            })
    }
    render() {
        let render_track = this.state.Track.map((e, i) => {
            return (
                <TouchableOpacity style={styles.ListItem}
                    key={i}
                    onPress={() => this.ButtonClick(e.id)}
                >
                    <Image style={styles.imghot} source={{ uri: e.albumArtUrl }} >
                    </Image>
                    {/* <MaterialCommunityIcons style={{
                                position: 'absolute',
                                right: 1,
                                bottom: 20
                            }} name="play-circle-outline" size={24} color="white" /> */}
                    <Text style={styles.txtTen}>{e.title}</Text>
                </TouchableOpacity>
            )
        })
        return (
            <View style={styles.containerList1}>
                <View style={styles.ListColum}>
                    <ScrollView horizontal={true} style={styles.ListColumBody}>
                        {render_track}
                    </ScrollView>
                </View>
            </View>
        )
    }
}