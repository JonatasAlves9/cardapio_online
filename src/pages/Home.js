import { Left } from 'native-base';
import React, { useState, useEffect } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, ImageBackground, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';


export default function home({ navigation }) {

  const data = [
    { id: "00", number: "1" },
    { id: "01", number: "2" },
    { id: "02", number: "3" },
    { id: "03", number: "4" },
    { id: "04", number: "5" },
    { id: "05", number: "6" },
    { id: "06", number: "7" },
    { id: "07", number: "8" },
    { id: "08", number: "9" },
    { id: "09", number: "10" },
    { id: "10", number: "11" },
    { id: "11", number: "12" },
    { id: "12", number: "13" },
    { id: "13", number: "14" },
    { id: "14", number: "15" },
    { id: "15", number: "16" },
  ]

  function onPress() {
    navigation.navigate('table')
  }

  return (
    <View style={styles.background}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Selecione uma mesa</Text>

        <SafeAreaView style={styles.background}>
          <FlatList

            data={data}
            keyExtractor={item => item.id}
            numColumns={4} // Número de colunas
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: 'center',
                    flex: 1,
                    flexDirection: 'column',
                  }}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                  >
                    <Text style={styles.buttonText}>{item.number}</Text>
                  </TouchableOpacity>
                </View>


              );
            }}
          />
        </SafeAreaView>

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    paddingTop: 50,
    paddingLeft: 20,
    fontSize: 20,
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
    backgroundColor: "#558C03",
    height: 50,
    width: 90,
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonText: {
    fontSize: 17,
    color: 'white'
  }

});