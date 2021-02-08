import { Left } from 'native-base';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';


export default function cancel({navigation}) {
  const [email, setEmail] = useState();

  function onPress() {
    navigation.navigate('home')
  }

  return (
    <View style={styles.background}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

          <Text style={styles.title}>Pedido Finalizado com sucesso!</Text>

          
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={() => navigation.navigate("home")}
          >
            <Text style={styles.buttonText}>Voltar para a pagina inicial</Text>
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
    textAlign: 'center'
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
  buttonCancel: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#558C03",
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