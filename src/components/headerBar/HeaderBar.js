import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import menu from '../../assets/menu.png';
import search from '../../assets/search.png';

export default function Header() {

  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.menu}>
        <Image
          source={menu}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch}>
        <Image
          style={styles.search}
          source={search}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D97C2B',
    height: 90,
    paddingTop: 45,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  touch:{
    marginTop: 35,
    marginRight: 20,
    position: 'absolute',
    right: 0,
  }
});
