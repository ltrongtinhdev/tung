import {
  StyleSheet,
  Dimensions,
} from 'react-native';
const styles = StyleSheet.create({
  //Đăng nhập và đăng ký
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtHead: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFDEAD',
  },
  inputText: {
    width: 200,
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F4A460',
    marginTop: 20,
    paddingLeft: 20,
    backgroundColor: 'white'
  },
  check: {
    flexDirection: 'row',
    width: 150,
    height: 40,
    //backgroundColor:'red',
    paddingTop: 10
  },
  checktext: {
    paddingTop: 5
  },
  btnDangNhap: {
    width: 100,
    height: 30,
    backgroundColor: '#D2691E',
    borderRadius: 10,
    alignItems: 'center',
    margin: 15,
  },
  btnText: {
    padding: 5,
    color: 'white'
  },
  txtDangky: {
    fontStyle: 'italic',
    color: '#800000',
  },
  //Trang chủ chính - Khám phá
  containerHome: {
    flex: 1,
    // justifyContent: 'center',
  },
  containerTop: {
    height: 320,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop:Dimensions.get('screen').height-(Dimensions.get('screen').height-25),
    position: 'relative',
  },
  containerTop1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTimkiem: {
    width: Dimensions.get('window').width - 100,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    paddingLeft: 40,
    position: 'relative',
    backgroundColor: 'white'
  },
  iconimg: {
    width: 40,
    height: 40,
    borderRadius: 75,
    backgroundColor: 'green',
    marginRight: 30,

  },
  iconimgavt: {
    width: 60,
    height: 60,
    borderRadius: 75,
    backgroundColor: 'green',
    marginRight: 10,

  },
  searchIcon: {
    padding: 10,
  },

  containerTop2: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 40,
    borderRadius: 15,
    backgroundColor: 'gray'
  },
  titleimg:
  {
    width: Dimensions.get('window').width - 40,
    height: 162,
    borderRadius: 15,
  },
  child: {
    width: Dimensions.get('window').width - 40,
    height: 162,
    borderRadius: 15,
    justifyContent: 'center'
  },
  containerTop3: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIcon: {
    width: 80,
    height: 70,
    margin: 20,
    alignItems: 'center',
  },
  titleimgicon:
  {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  containerBottom: {
    flex: 6,
    paddingLeft: 20,
    paddingRight: 20,
    // backgroundColor: 'white'
  },
  lineargradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('screen').height + 210,
  },
  // trang chủ - list có thể bạn muốn nghe
  containerList1: {
    height: 140,
    // backgroundColor:'red'
  },
  titleList: {
    // backgroundColor:'blue',
    height: 40,
    flexDirection: 'row'
  },
  titleText: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
  titleplaylist: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft:20
  },
  icon: {
    marginLeft: 20,
    width: 20,
    height: 25
  },
  ListColum: {
    flex: 5,
    // flexDirection: 'row',
    // backgroundColor: 'green'
  },
  ListColumBody: {
    // justifyContent:'center',
    width: Dimensions.get('window').width - 40,
    // backgroundColor :'green',
    flex: 1,
    flexDirection: 'row',
    // alignItems:'center'
  },
  ListItem: {
    width: 100,
    height: 120,
    // backgroundColor:'red',
    marginLeft: 10
  },
  imghot: {
    width: 100,
    height: 100,
    borderRadius: 15,
    position: 'relative'
  },
  txtTen: {
    fontSize: 12
  },
  //trang chủ List những bài hát hay
  containerList2: {
    padding: 10,
    marginBottom: 18,
    height: 500,
    backgroundColor: '#E6E6FA',
    borderRadius: 15
  },
  containerList2Item: {
    height: 70,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'gray',
    // borderRadius:25,
    marginLeft: 20,
    marginTop: 10,
    width:300,
    // backgroundColor:'red'
  },
  containerlist: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#990000',
    marginLeft: 20,
    marginTop: 10,
    width:300,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20
  },
  Tenplaylist: {
    fontWeight: '100',
    fontSize: 15,
    color: 'white',
    marginLeft:10
  },
  inputlist: {
    width: 200,
    height: 50,
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#F4A460',
    paddingLeft: 20,
    backgroundColor: 'white',
    marginLeft:10
  },
  containertheloai1: {
    height: 70,
    width: 150,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6699FF',
    borderRadius: 25,
    marginLeft: 30,
    marginTop: 10,
  },
  containertheloai2: {
    height: 70,
    width: 150,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AA0000',
    borderRadius: 25,
    marginLeft: 30,
    marginTop: 10,
  },
  containertheloai3: {
    height: 70,
    width: 150,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FF33FF',
    borderRadius: 25,
    marginLeft: 30,
    marginTop: 10,
  },
  containertheloai4: {
    height: 70,
    width: 150,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#0033FF',
    borderRadius: 25,
    marginLeft: 30,
    marginTop: 10,
  },
  containerList2ItemBody1: {
    width: 30,
    height: 30,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: "white",
    borderBottomWidth: 5,
    borderRadius: 5
  },
  stt: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white'
  },
  containerList2ItemBody2: {
    width: 50,
    height: 50,
  },
  imgList2: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  containerList2ItemBody3: {
    width: 220,
    height: 50,
    paddingLeft: 10,
  },
  containerList2ItemBody3tl: {
    width: 220,
    height: 50,
    paddingLeft: 40,
    paddingTop:10
  },
  Khampha: {
    flexDirection: 'row',
  },
  playlist: {
    flexDirection: 'row',
  },
  Theloai: {
    flexDirection: 'row',
    marginTop: 20

  },
  Xoalist: {
    marginTop: 10,
    width: 60,
    height: 70,
    backgroundColor: '#BDBDBD',
    paddingTop: 25,
    paddingLeft: 10,
    borderTopRightRadius:20,
    borderBottomRightRadius:20
  },
  Xoalist1: {
    marginTop: 10,
    width: 60,
    height: 70,
    //backgroundColor: '#BDBDBD',
    paddingTop: 25,
    paddingLeft: 20,
    //color:'red'
    // borderTopRightRadius:20,
    // borderBottomRightRadius:20
  },
  Tenbaihat: {
    fontWeight: '100',
    fontSize: 15,
    color: 'black'
  },
  Casi: {
    fontSize: 10,
    color: 'black'
  },
  addplaylist:{
    flexDirection: 'row',
  },      
  addplay:{ 
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width:50,
    height:50,
    //backgroundColor:'red',
    marginLeft:10
  },
  textadd:{
    marginLeft:20,
    marginTop:15 
  },
  containerKhamPha: {
    flex: 1,
    // backgroundColor:'black',
    // alignItems:"center",
    // marginTop:Dimensions.get('screen').height-(Dimensions.get('screen').height-10)
  },
  containerplaylist: {
    flex: 1,
    // alignItems:"center",
    // marginTop:Dimensions.get('screen').height-(Dimensions.get('screen').height-10)
  },
  buttonplaylist:{
    marginTop:20,
    flexDirection: 'row',
    height: 50,
    marginLeft:20
    //backgroundColor: 'green',
  },
  containeravt: {
    width: Dimensions.get('screen').width - 20,
    height: 100,
    marginLeft: Dimensions.get('screen').height - (Dimensions.get('screen').height - 10),
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'gray',
    borderBottomWidth: 1
  },
  containerTitle: {
    width: Dimensions.get('screen').width - 20,
    height: 60,
    marginLeft: Dimensions.get('screen').height - (Dimensions.get('screen').height - 10),
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'gray',
    borderBottomWidth: 1
  },
  containerTitleds: {
    width: Dimensions.get('screen').width - 20,
    height: 50,
    marginTop: Dimensions.get('screen').height - 320,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    marginLeft: Dimensions.get('screen').height - (Dimensions.get('screen').height - 10),
  },
  txtTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  txtCanhan: {
    fontSize: 15,
    color: 'white',
    justifyContent: 'center',
    fontWeight: '200'
  },
  txtaddplaylist: {
    marginLeft:10,
    marginTop:10,
    fontSize: 15,
    justifyContent: 'center',
    fontWeight: '200'
  }
})
export default styles;