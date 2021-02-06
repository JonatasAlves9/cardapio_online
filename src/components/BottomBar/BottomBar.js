import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import menu from '../../assets/menu.png';
import search from '../../assets/search.png';
import home from '../../assets/home1.png';
import profile from '../../assets/profile.png';
import lista from '../../assets/lista.png';
export default function BottomBar() {

  return (
    <View style={styles.container} >
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={home}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.icon1}
          source={lista}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.icon2}
          source={profile}
        />
      </TouchableOpacity>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 70,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row"

  },
  icon: {
    width: 30,
    height: 30,
  },
  icon1: {
    width: 30,
    height: 30,
    marginLeft: 90
  },
  icon2: {
    width: 30,
    height: 30,
    marginLeft: 90
  },

});
