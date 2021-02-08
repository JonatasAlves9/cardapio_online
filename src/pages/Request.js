import React, { useState, useEffect } from 'react'
import {
  FlatList, SafeAreaView, StyleSheet, Text,
  View, ImageBackground, Image, ScrollView, TextInput,
  TouchableOpacity, Button, UselessTextInput
} from 'react-native';

export default function request({ navigation }) {

  const [isModalVisible, setModalVisible] = useState(false);
  const [quant, setQuant] = useState();
  const [product, setProduct] = useState();
  const [obs, setObs] = useState();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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

  return (
    <>

      <View style={styles.background}>
        <ScrollView style={styles.scrollView}>
          <View style={{
            flex: 1, flexDirection: 'row',
          }}>
            <View>
              <Text style={styles.price}>Mesa: 05</Text>
              <Text style={styles.seller}>Garçom: Jônatas</Text>
            </View>
            <View>
              <Text style={styles.title}>R$ 24,00</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={{
              flex: 1,
            }}>
              <Text style={styles.name}>Lasanha</Text>
              <Text style={styles.priceProduct}>R$ 0,00      Quantidade: 01</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={toggleModal}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.buttonDelete}
                onPress={toggleModal}
              >
                <Text style={styles.buttonText}>D</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={{
        padding: 10,
      }}>
        <TouchableOpacity
          style={styles.buttonEndRequest}
          onPress={() => navigation.navigate("table")}
        >
          <Text style={styles.buttonTextEnd}>Adicionar mais produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonEndRequest}
          onPress={() => navigation.navigate("endRequest")}
        >
          <Text style={styles.buttonTextEnd}>Finalizar pedido</Text>
          
        </TouchableOpacity>
      </View>
    </>
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
  name: {
    fontSize: 20,
    width: 200,
    color: 'white',
  },
  title: {
    paddingTop: 50,
    textAlign: 'right',
    fontSize: 20,
    width: 200,
    color: '#A60303',
  },
  textModal: {
    paddingTop: 30,
    paddingLeft: 30,
    fontSize: 20,
    color: '#A60303',
  },
  textPrice: {
    paddingLeft: 30,
    fontSize: 20,
    color: '#A60303',
  },
  priceProduct: {
    paddingTop: 5,
    fontSize: 15,
    width: 200,
    color: 'white',
  },
  price: {
    paddingLeft: 20,
    width: 200,
    paddingTop: 50,
    fontSize: 15,
    color: '#A60303',
  },
  seller: {
    paddingLeft: 20,
    width: 200,
    fontSize: 15,
    color: '#A60303',
  },
  input: {
    height: 50,
    width: 300,
    borderColor: '#F24405',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
  inputArea: {
    height: 100,
    width: 300,
    borderColor: '#F24405',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "white",
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 8,
    marginTop: 5,
  },
  buttonDelete: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "white",
    height: 50,
    width: 50,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonEndRequest: {
    marginBottom: 10,
    height: 50,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#A60303",
    borderRadius: 10,
  },
  buttonEnd: {
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    width: 300,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "red",
    borderRadius: 10,
    backgroundColor: '#558C03',
  },
  buttonCancel: {
    height: 50,
    width: 300,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#A60303",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 25,
    color: "#A60303"
  },
  buttonTextEnd: {
    fontSize: 22,
    color: "white"
  },
  buttonTextModals: {
    fontSize: 15,
    color: "white"
  },
  card: {
    flexDirection: 'row',
    height: 100,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#A60303',
  },

});