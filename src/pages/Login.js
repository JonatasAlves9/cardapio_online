import { Left } from 'native-base';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';


export default function login({navigation}) {
  const [email, setEmail] = useState();

  function onPress() {
    navigation.navigate('home')
  }

  return (
    <View style={styles.background}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

          <Text style={styles.title}>Cardapio Web</Text>

          <Image
            style={styles.logo}
            source={{
              uri: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg',
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Digite seu email"
          />

          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Digite sua senha"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={onPress}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 150,
  },
  inputText: {
    justifyContent: 'flex-end',
  },
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    color: '#A60303',
  },
  input: {
    height: 50,
    width: 300,
    borderColor: '#F24405',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#F24405",
    height: 50,
    width: 300,
    borderRadius: 10,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 17,
    color: 'white'
  }

});