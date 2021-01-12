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
        const txt = this.props.route.params.text
        console.log(txt)
        this.Getlist(txt);
        this.ButtonClick = this.ButtonClick.bind(this);
    }
    Getlist(txt) {
        fetch(http().HTTP('timkiem'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                textinput: txt,
            })
        })
            .then((response) => response.json())
            .then((json) => {
                const Track = [];
                for (let i = 0; i < json.recordset.length; i++) {
                    const obj = {
                        id: json.recordset[i].id,
                        title: json.recordset[i].title,
                        artist: json.recordset[i].artist,
                        albumArtUrl: http().HTTP(json.recordset[i].albumArtUrl),
                        //audioUrl: json.recordset[i].audioUrl                       
                    }
                Track.push(obj);
                }
                this.setState({ Track: Track })
            })
            .catch((err) => {
                console.log(err, "Lỗi")
            })
    }
    ButtonClick(key,txt) {
        fetch(http().HTTP('getidimkiem'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ID: txt,
            })
        })
            .then((response) => response.json())
            .then((json) => {
                const Track = [];
                let a = key;
                for (let i = 0; i < json.recordset.length; i++) {
                    if (json.recordset[i].id == a) {
                        const obj = {
                            title: json.recordset[i].title,
                            artist: json.recordset[i].artist,
                            albumArtUrl: http().HTTP(json.recordset[i].albumArtUrl),
                            audioUrl: http().HTTP(json.recordset[i].audioUrl)
                        }
                        Track.unshift(obj);
                    }
                    else {
                        const obj = {
                            title: json.recordset[i].title,
                            artist: json.recordset[i].artist,
                            albumArtUrl: http().HTTP(json.recordset[i].albumArtUrl),
                            audioUrl: http().HTTP(json.recordset[i].audioUrl)
                        }
                        Track.push(obj);
                    }
                }
                this.props.navigation.navigate("music", {
                    Data: Track,
                    id: key,
                    use: username
                })
            })
            .catch((err) => {
                console.log(err, "Lỗi")
            })
    }
    render() {
        let render_track = this.state.Track.map((e, i) => {
            const txt = this.props.route.params.text
            return (
                <TouchableOpacity style={styles.containerList2Item}
                    key={i}
                    onPress={() => this.ButtonClick(e.id,txt)}>
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
            <ScrollView style={styles.containerList2}>
                {render_track}
            </ScrollView>
        )
    }
}
