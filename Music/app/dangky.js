import React, { Component } from 'react';
import {
  View,
  Text, TextInput, TouchableOpacity, ToastAndroid, Button
} from 'react-native';
//import axios from 'axios';
import styles from './style'
import LinearGradient from 'react-native-linear-gradient';
var http = require('./config.js');
class dangky extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '', gmail: '' };
    this.ButtonClick = this.ButtonClick.bind(this);
  }
  
  ButtonClick() {
    //console.log("test")
    fetch(http().HTTP('users/dangki'), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        taikhoan: this.state.username,
        matkhau: this.state.password,
        gmail: this.state.gmail
      })
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        if(json.message === 'success') {
          this.setState({ username: "", password: "", gmail: "" });
          ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT);
          this.props.navigation.navigate('sign in');
        }else {
          ToastAndroid.show('Tài khoản tồn tại', ToastAndroid.SHORT);
        }
      })
      .catch((err) => {
        console.log(err, "sadsada ")
        ToastAndroid.show('Lỗi vui lòng nhập lại sau', ToastAndroid.SHORT);
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#4169E1', 'white']}
          style={styles.lineargradient}
        />
        <Text style={styles.txtHead}>MUSIC DNC</Text>
        <TextInput style={styles.inputText}
          keyboardType='default'
          placeholder=' username'
          returnKeyType='next'
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
        ></TextInput>
        <TextInput style={styles.inputText}
          keyboardType='default'
          placeholder=' password'
          returnKeyType='next'
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        ></TextInput>

        <TextInput style={styles.inputText}
          keyboardType='email-address'
          placeholder='email'
          returnKeyType='next'
          value={this.state.gmail}
          onChangeText={(gmail) => this.setState({ gmail })}
        ></TextInput>

        <View style={styles.ctnDangNhap}>
          <TouchableOpacity style={styles.btnDangNhap}
            onPress={this.ButtonClick}>
            <Text style={styles.btnText}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>
        <Text>{this.state.text}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("sign in")}
        >
          <Text style={styles.txtDangky}>Đăng nhập ngay!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
// function dangky({ route, navigation }) {
//   /* 2. Get the param */
//   const { text } = route.params;
//   state = { username: '', password: '', gmail: '' };
//  // ButtonClick = this.ButtonClick.bind(this);
//   ButtonClickb =() => {
//     console.log("test")
//     fetch('http://192.168.43.128:5000/test', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         username: this.state.username,
//         password: this.state.password,
//         gmail: this.state.gmail
//       })
//     })
//       .then((json) => {
//         this.setState({ username: "", password: "", gmail: "" });
//         ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT);
//         this.props.navigation.navigate('sign in');
//       })
//       .catch((err) => {
//         console.log(err, "sadsada ")
//       })
//   }
//   return (
//     <View style={styles.container}>
//       <Text style={styles.txtHead}> MUSIC DNC</Text>
//       <TextInput style={styles.inputText}
//         keyboardType='default'
//         placeholder=' username'
//         returnKeyType='next'
//         value={this.state.username}
//         onChangeText={(username) => this.setState({ username })}
//       ></TextInput>
//       <TextInput style={styles.inputText}
//         keyboardType='default'
//         placeholder=' password'
//         returnKeyType='next'
//         value={this.state.password}
//         onChangeText={(password) => this.setState({ password })}
//       ></TextInput>

//       <TextInput style={styles.inputText}
//         keyboardType='email-address'
//         placeholder='email'
//         returnKeyType='next'
//         value={this.state.gmail}
//         onChangeText={(gmail) => this.setState({ gmail })}
//       ></TextInput>

//       <View style={styles.ctnDangNhap}>
//         <TouchableOpacity style={styles.btnDangNhap}
//           onPress={this.ButtonClick}>
//           <Text style={styles.btnText}>Đăng Ký</Text>
//         </TouchableOpacity>
//       </View>
//       {/* <Text>{params.test}</Text> */}
//       <TouchableOpacity
//         onPress={() => this.props.navigation.navigate("sign in")}
//       >
//         <Text style={styles.txtDangky}>Đăng nhập ngay!</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
export default dangky