import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput, TouchableOpacity, Image,ScrollView
} from 'react-native';
import styles from '../style';
import LinearGradient from 'react-native-linear-gradient';
// import { MaterialCommunityIcons,AntDesign,Entypo,Ionicons } from '@expo/vector-icons';
var http = require('../config.js');
export default class khampha extends Component{
    render(){
        return(
            <ScrollView style={styles.containerKhamPha}>              
                <View style={styles.Theloai}>
                 <TouchableOpacity style={styles.containertheloai1}
                 onPress={() => this.props.navigation.navigate("Listmusic",{Theloai:"TinhYeu"})}
                 >
                 <View style={styles.containerList2ItemBody3tl}>
                     <Text style={styles.Tenbaihat}>Tình Yêu</Text> 
                 </View>
             </TouchableOpacity>   
             <TouchableOpacity style={styles.containertheloai2}
             onPress={() => this.props.navigation.navigate("Listmusic",{Theloai:"NhacTre"})}>
                 <View style={styles.containerList2ItemBody3tl}>
                     <Text style={styles.Tenbaihat}>Nhạc Trẻ</Text> 
                 </View>
             </TouchableOpacity>   
             </View>              
             <View style={styles.Theloai}>
                 <TouchableOpacity style={styles.containertheloai3}
                 onPress={() => this.props.navigation.navigate("Listmusic",{Theloai:"TruTinh"})}>
                 <View style={styles.containerList2ItemBody3tl}>
                     <Text style={styles.Tenbaihat}>Trữ Tình</Text> 
                 </View>
             </TouchableOpacity>   
             <TouchableOpacity style={styles.containertheloai4}
             onPress={() => this.props.navigation.navigate("Listmusic",{Theloai:"QueHuong"})}>
                 <View style={styles.containerList2ItemBody3tl}>
                     <Text style={styles.Tenbaihat}>Quê Hương</Text> 
                 </View>
             </TouchableOpacity>   
             </View>              
            </ScrollView>
        )
    }
}