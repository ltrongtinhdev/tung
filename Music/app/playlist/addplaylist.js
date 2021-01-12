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
            idDSlist: '',
            Tenplaylist: '',
            Tenlist: '',
            List: []

        };
        const txt = this.props.route.params.use
        const id = this.props.route.params.id
        console.log(id,txt)
        this.Getlist();
        this.ButtonClick = this.ButtonClick.bind(this);
        this.ButtonXoa = this.ButtonXoa.bind(this);
        this.ButtonClickadd = this.ButtonClickadd.bind(this);
    }
    Getlist() {
        fetch(http().HTTP('playlist'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Taikhoan: this.props.route.params.use,
            })
        })
            .then((response) => response.json())
            .then((json) => {
                const List = [];
                for (let i = 0; i < json.recordset.length; i++) {
                    const obj = {
                        Tenplaylist: json.recordset[i].Tenplaylist,
                        idDSlist: json.recordset[i].idDSlist,
                    }
                    List.push(obj);
                }
                console.log(List)
                this.setState({ List: List })
            })
            .catch((err) => {
                console.log(err, "Lỗi")
            })
    }
    ButtonClick(key, id) {
        fetch(http().HTTP('addbaihatlist'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                IDlist:key,
                ID:id
            })
        })
            .then((response) => response.json())
            .then((json) => {
                ToastAndroid.show('Thêm vào playlis thành công ', ToastAndroid.SHORT);
            })
            .catch((err) => {
                console.log(err, "Lỗi")
            })
    }
    ButtonXoa(key) {
        fetch(http().HTTP('deletelist'), {
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
                console.log('sdfdgdrr')
                this.Getlist()
            })
            .catch((err) => {
                console.log(err, "Lỗi")
            })
    }
    ButtonClickadd() {
        fetch(http().HTTP('addlist'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ID:this.props.route.params.use,
                Tenlist: this.state.Tenlist,
            })
        })
            .then((response) => response.json())
            .then((json) => {
                ToastAndroid.show('Tạo list thành công ', ToastAndroid.SHORT);
                this.setState({Tenlist:""})
                this.Getlist();
            })
            .catch((err) => {
                console.log(err, "Lỗi")
            })
    }
    render() {
        let render_track = this.state.List.map((e, i) => {
        //const txt = this.props.route.params.use
        const id = this.props.route.params.id
            return (
                <View style={styles.playlist}>
                    <TouchableOpacity style={styles.containerlist}
                        onPress={() => this.ButtonClick(e.idDSlist, id)}
                    >
                        <Text style={styles.Tenplaylist}>{e.Tenplaylist}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Xoalist}
                        onPress={() => this.ButtonXoa(e.idDSlist)}><Text>Xóa</Text>
                    </TouchableOpacity>
                </View>
            )
        })
        return (
            <ScrollView style={styles.containerplaylist}>
                <View style={styles.buttonplaylist}>
                    <TouchableOpacity
                        onPress={this.ButtonClickadd}
                        style={styles.addplay}>
                        <Image style={styles.imgList2} source={require('./imglis/icon1.jpg')} />
                    </TouchableOpacity>
                    <TextInput style={styles.inputlist}
                        value={this.state.Tenlist}
                        onChangeText={(Tenlist) => this.setState({ Tenlist })}
                        placeholder='Nhập tên playlist'
                    ></TextInput>
                </View>
                <Text style={styles.titleplaylist}>Danh sách playlist:</Text>
                {render_track}
            </ScrollView>
        )
    }
}



// trang HomeScreen 
//onPress={() => this.props.navigation.navigate("detailScreen",{item:item})}>
// trang detailScreen
// const item = this.props.route.params.item



