import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image,ScrollView } from 'react-native';
import styles from '../style';
import List1 from './List1';
import List2 from './List2';
import Slide from './slide';
//import {Octicons} from 'react-native-vector-icons';
//import {AntDesign}  from 'react-native-vector-icons';
//import {LinearGradient} from 'react-native-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
export default class trangchu extends Component {
    constructor(props) {
        super(props)
        this.state = { data: '' };
        this.buttontimkiem =this.buttontimkiem.bind(this);
    }
    buttontimkiem(){
        this.props.navigation.navigate("Timkiem",{text:this.state.data})
        this.setState({data:''});
    }
    render() {
        //const use = this.props.route.params.use
        return (
            <ScrollView     
            style={styles.containerHome}>
                <LinearGradient
                    colors={['rgba(14,55,149,2.8)', 'white']}
                    style={styles.lineargradient}
                />
                <View style={styles.containerTop}>
                    <View style={styles.containerTop1}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Cá Nhân",{use:this.props.route.params.use})}>
                            <Image style={styles.iconimg}
                                source={require('../img/use.png')} />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.inputTimkiem}
                            placeholder='Nhập tên bài hát...'
                            value={this.state.data}
                            onChangeText={(data) => this.setState({ data })}
                            onSubmitEditing={this.buttontimkiem}
                        >
                        </TextInput>
                        {/* <Octicons name="search" size={20} color="black" style={{
                            position: 'absolute',
                            left: 80,
                        }} /> */}
                    </View>
                    <Slide />
                    <View style={styles.containerTop3}>
                        <TouchableOpacity style={styles.containerIcon}
                        onPress={() => this.props.navigation.navigate("Nhạc hay",{Danhmuc:"NhacMoi"})}>
                            <Image style={styles.titleimgicon}
                                source={require('../img/icon1.png')} />
                            <Text>Nhạc mới</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Thể Loại")} 
                        style={styles.containerIcon}>
                            <Image style={styles.titleimgicon}
                                source={require('../img/icon2.png')} />
                            <Text>Thể loại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerIcon}
                        onPress={() => this.props.navigation.navigate("Nhạc hay",{Danhmuc:"Nghenhieu"})}>
                            <Image style={styles.titleimgicon}
                                source={require('../img/icon3.png')} />
                            <Text>Nghe nhiều</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerBottom}>
                    <TouchableOpacity style={styles.titleList}>
                        <Text style={styles.titleText}>Có Thể Bạn Muốn Nghe</Text>
                        {/* <AntDesign style={styles.icon} name="right" size={20} color="black" /> */}
                    </TouchableOpacity>
                    <List1  username={this.props.route.params.use} navigation={this.props.navigation} />
                    <TouchableOpacity style={styles.titleList}>
                    <Text style={styles.titleText}>Những bài hát hay nhất</Text>
                    {/* <AntDesign style={styles.icon} name="right" size={20} color="black" /> */}
                     </TouchableOpacity> 
                    <List2 navigation={this.props.navigation} />
                </View>
            </ScrollView>
        )
    }
}
// username={this.props.route.params.use}