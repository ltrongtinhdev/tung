import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import CheckBox from '@react-native-community/checkbox';


var http = require('./config.js');
class dangnhap extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '', Trangthai:false };
    this.ButtonClick = this.ButtonClick.bind(this);
    this.storeData = this.storeData.bind(this);
    //this.checkbox = this.checkbox.bind(this);
    this.kiemtra();
  }
  storeData = async () => {
    try {
      await AsyncStorage.setItem(
        'use', this.state.username
      );
    } catch (error) {
    }
  };
  kiemtra = async () => {
    const value = await AsyncStorage.getItem('use');
    if (value !== null) {
      this.props.navigation.navigate('home', { use: value });
      console.log(value);
    }
    else {
      console.log('vui lòng đăng nhập');
    }
  };
  ButtonClick() {
    console.log(this.state.password)
    console.log(this.state.username)
    const body = {
      taikhoan: this.state.username,
        matkhau: this.state.password
    }
    fetch(`http://10.170.215.131:5001/users/dangnhap`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then((json) => {
        //console.log(json.recordset);
        if(json.data) {
          let user = json.data[0].Taikhoan
          if(user) {
            if (this.state.Trangthai == true) {
              this.storeData()
              ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
              this.props.navigation.navigate('home', { use: this.state.username });
              this.setState({ username: "", password: "" })
            } else {
              ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
              this.props.navigation.navigate('home', { use: this.state.username });
              this.setState({ username: "", password: "" })
            }
          }else {
            ToastAndroid.show('Đăng nhập thất bại', ToastAndroid.SHORT);
          }
        }else {
          ToastAndroid.show('Đăng nhập thất bại', ToastAndroid.SHORT);
        }
        
        
      })
      .catch((err) => {
        console.log(err, "sadsada ")
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#4169E1', 'white']}
          style={styles.lineargradient}
        />
        <Text style={styles.txtHead}> MUSIC DNC</Text>
        <TextInput style={styles.inputText}
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder=' username'
        ></TextInput>
        <TextInput style={styles.inputText}
          value={this.state.password}
          placeholder=' password'
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry={true}
        ></TextInput>
        <View style={styles.check}>
          <CheckBox 
          value={this.state.Trangthai}
          onChange={() =>this.setState({Trangthai:!this.state.Trangthai})}></CheckBox>
          <Text style={styles.checktext}>Lưu đăng nhập</Text>
        </View>

        <View style={styles.ctnDangNhap}>
          <TouchableOpacity style={styles.btnDangNhap}
            title="Go to Home"
            onPress={this.ButtonClick}
          >
            <Text style={styles.btnText}>Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
        <Text>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity
          title="Go to sgin up"
          onPress={() => this.props.navigation.navigate("sign up")}
        >
          <Text style={styles.txtDangky}>Đăng ký ngay!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default dangnhap

