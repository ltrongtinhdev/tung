import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput, TouchableOpacity, Image, ScrollView,ToastAndroid
} from 'react-native';
import styles from '../style';
import LinearGradient from 'react-native-linear-gradient';
// import { MaterialCommunityIcons,AntDesign,Entypo,Ionicons } from '@expo/vector-icons';
var http = require('../config.js');
export default class khampha extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            idlist: '',
            title: '',
            artist: '',
            albumArtUrl: '',
            audioUrl: '',
            Track: []

        };
        this.Getlist();
        this.ButtonClick = this.ButtonClick.bind(this);
    }
    Getlist() {
        fetch(http().HTTP('getidlist'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                IDlist: this.props.route.params.idDSlist,
                use: this.props.route.params.use
            })
        })
            .then((response) => response.json())
            .then((json) => {
                const Track = [];
                //console.log(json.recordset)
                for (let i = 0; i < json.recordset.length; i++) {
                    const obj = {
                        id: json.recordset[i].id,
                        idlist: json.recordset[i].idlist,
                        title: json.recordset[i].title,
                        artist: json.recordset[i].artist,
                        albumArtUrl: http().HTTP(json.recordset[i].albumArtUrl),                      
                    }
                    Track.push(obj);
                }
                this.setState({ Track: Track })
            })
            .catch((err) => {
                console.log(err, "Lỗi")
            })
    }
    ButtonClick(key) {
        fetch(http().HTTP('getmusiclist'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                IDlist: this.props.route.params.idDSlist,
                use: this.props.route.params.use
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
    ButtonXoa(key){
        fetch(http().HTTP('deleteBHlist'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ID: key,
            })
        })
            .then((response) => response.json())
            .then((json) => {
                ToastAndroid.show('Xóa thành công', ToastAndroid.SHORT);
                this.Getlist()
            })
            .catch((err) => {
                console.log(err, "Lỗi")
            })
}
    render() {
        let render_track = this.state.Track.map((e, i) => {
            const Danhmuc = this.props.route.params.Danhmuc
            return (
                <View style={styles.Khampha}>
                <TouchableOpacity style={styles.containerList2Item}      
                   key={i}
                   onPress={() => this.ButtonClick(e.id)}
                >
                {/* <View style={styles.containerList2ItemBody1}><Text style={styles.stt}>{e.id}</Text></View> */}
                <View style={styles.containerList2ItemBody2}>
                    <Image style={styles.imgList2} source={{ uri: e.albumArtUrl }} />
                </View>
                <View style={styles.containerList2ItemBody3}>
                    <Text style={styles.Tenbaihat}>{e.title}</Text> 
                    <Text style={styles.Casi}>{e.artist}</Text> 
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Xoalist1}
            onPress={() => this.ButtonXoa(e.idlist)}><Text>Xóa</Text></TouchableOpacity>
            </View> 
           )
        })
        return (
            <ScrollView style={styles.containerKhamPha}>
                {render_track}
            </ScrollView>
        )
    }
}