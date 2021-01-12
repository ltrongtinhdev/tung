import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import dangnhap from './dangnhap';
import dangky from './dangky';
import trangchu from './Home/Trangchu';
import khampha from './Khampha/khampha';
import Music from './Music';
import TK from './Home/Timkiem';
import playlist from './playlist/playlist';
import addlist from './playlist/addplaylist';
import Dslist from './playlist/DSList';
import nhachay from './Theloai/nhachay';
import Theloai from './Theloai/Theloai';
import ListTL from './Theloai/ListTL';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createStackNavigator();
function Na() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="sign in" component={dangnhap} />
      <Stack.Screen name="home" component={trangchu} options={{ headerShown: false }} />
      <Stack.Screen name="playlist" component={playlist} />
      <Stack.Screen name="addplaylist" component={addlist} />
      <Stack.Screen name="Timkiem" component={TK} />
      <Stack.Screen name="Danh sách bài hát" component={Dslist} />
      <Stack.Screen name="Cá Nhân" component={khampha} />
      <Stack.Screen name="sign up" component={dangky} />
      <Stack.Screen name="Nhạc hay" component={nhachay} />
      <Stack.Screen name="Thể Loại" component={Theloai} />
      <Stack.Screen name="Listmusic" component={ListTL} />
      <Stack.Screen name="music" component={Music} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const Tap = createMaterialBottomTabNavigator();
function Tab() {
  return (
    <Tap.Navigator 
    initialRouteName="trangchu"
    >     
      <Tap.Screen name="trangchu" component={Na} options={{tabBarLabel: 'Trang chủ',}}/>
      <Tap.Screen name="khampha" component={khampha} options={{title:'Cá nhân',}}/>
    </Tap.Navigator>
  );
}
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer >
        <Na />
        {/* <Tab/> */}
      </NavigationContainer>
    )
  }
};
