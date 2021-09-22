/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  Image,
  TextInput,
  Linking,
  Button,
  Alert,
} from 'react-native';
import { Component } from 'react';

const App= ()  => {
  const [text, onChangeText] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return(
    //logo
    // khung đăng nhập
    <View style={styles.container}>
      <View style={styles.signin}>
        <View style={styles.logoImg}>
          <Image
            source={require('D:/NewRN/FirstProject/img/logo 1.png')}
          />
        </View>
      

      <View  style={styles.signinBox}> 
        <View>
          <Text style={styles.text} >Tài khoản</Text>
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Email hoặc số điện thoại"
          />
        </View>

        <View>
          <Text style={styles.password} >Mật khẩu</Text>
          <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Nhập mật khẩu"
          />
        </View>

        <View>
          <Text style={styles.forgotPw}
            onPress={() => Linking.openURL('http://google.com')}>
            Quên mật khẩu
          </Text>
        </View>
        
        <View style = {styles.button}>
          <Button
            title="Đăng nhập"
            onPress={() => Alert.alert('Đăng nhập thành công')}
            color= 'pink'
          />

          <Button
            title="Đăng ký"
            onPress={() => Alert.alert('Đăng ký')}
            color= 'orange'
          />
        </View>
      </View> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    flex: 1,
    alignItems: "center",
  },

  signin: {
    backgroundColor: '#4786FF',
    width: 500,
    height: 300,
    flexDirection: 'column',

  },

  logoImg: {
    width: 130,
    height: 100,
    backgroundColor: 'white',
    marginTop: 90,
    marginLeft:230,
    
  },

  signinBox:{
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    height: 349,
    width: 335,
    marginTop: 35,
    marginLeft: 130
  },

  text: {
    margin: 12,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  password: {
    margin: 12,
    marginBottom: 2,
    fontWeight: 'bold',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white'
  },

  forgotPw: {
    marginTop: 5,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: "center"
  },

  button: {
    color: "black",
    height: 80,
    width: 200,
    marginLeft: 70,
    marginTop: 10,
    justifyContent: 'space-between',
  },
});
export default App;
