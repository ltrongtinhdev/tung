import React, { Component } from 'react';
import {
    View,
    Text, Image, TouchableOpacity, ScrollView
} from 'react-native';
import styles from '../style';
var http = require('../config.js');
export default class List2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            artist: '',
            albumArtUrl: '',
            audioUrl: '',
            Track: []

        };
        this.ButtonClick = this.ButtonClick.bind(this);
        this.Getlist();
    }
    Getlist() {
        fetch(http().HTTP('List2'))
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
                //console.log(Track)
            })
            .catch((err) => {
                console.log(err, "Lỗi")
            })
    }
    ButtonClick(key) {
        fetch(http().HTTP(`List2/${key}`))
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
                <TouchableOpacity style={styles.containerList2Item}
                    key={i}
                    onPress={() => this.ButtonClick(e.id)}>
                    {/* <View style={styles.containerList2ItemBody1}><Text style={styles.stt}>{e.id}</Text></View> */}
                    <View style={styles.containerList2ItemBody2}>
                        <Image style={styles.imgList2} source={{ uri: e.albumArtUrl }} />
                    </View>
                    <View style={styles.containerList2ItemBody3}>
                        <Text style={styles.Tenbaihat}>{e.title}</Text>
                        <Text style={styles.Casi}>{e.artist}</Text>
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <ScrollView
                nestedScrollEnabled={true}
                style={styles.containerList2}>
                {render_track}
            </ScrollView>
        )
    }
}
