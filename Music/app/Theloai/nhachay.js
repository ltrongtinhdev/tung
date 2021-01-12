import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput, TouchableOpacity, Image, ScrollView
} from 'react-native';
import styles from '../style';
import LinearGradient from 'react-native-linear-gradient';
// import { MaterialCommunityIcons,AntDesign,Entypo,Ionicons } from '@expo/vector-icons';
var http = require('../config.js');
export default class nhachay extends Component {
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
        this.Getlist();
        this.ButtonClick = this.ButtonClick.bind(this);
    }
    Getlist() {
        console.log('ds1')
        fetch(http().HTTP('getidDanhmuc'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.props.route.params.Danhmuc
            })
        })
            .then((response) => response.json())
            .then((json) => {
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
                console.log(data)
                this.setState({ Track: data })
            })
            .catch((err) => {
                console.log(err, "Lỗi")
            })
    }
    ButtonClick(key,Danhmuc) {
        fetch(http().HTTP(`List2/${key}`), {
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
        // const txt = this.props.route.params.usename
        // console.log(txt)
        let render_track = this.state.Track.map((e, i) => {
            const Danhmuc = this.props.route.params.Danhmuc
            return (
                <TouchableOpacity style={styles.containerList2Item}
                    key={i}
                    onPress={() => this.ButtonClick(e.id,Danhmuc)}

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
            )
        })
        return (
            <ScrollView style={styles.containerKhamPha}>
                {render_track}
            </ScrollView>
        )
    }
}