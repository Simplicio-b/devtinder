import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import API from '../services/API';

import Logo from '../assets/logo.png';
import Like from '../assets/like.png';
import Deslike from '../assets/dislike.png';

export default function Main({ navigation }) {
  const id = navigation.getParam('user');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const res = await API.get('/devs', {
        headers: {
          user: id,
        }
      });
      setUsers(users.filter(u => e._id != e._id));
    }
    loadUsers();
  }, [id]);

  

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <View style={styles.cardsContainer}>
        {
          users > 0 ? 
          users.map((e, i) => (
            <View key={e._id} style={[styles.card, { zIndex: users.length - i }]}>
              <Image style={styles.avatar} source={{uri: e.avatar}} />
              <View style={styles.footer}>
                <Text style={styles.name} >{e.name}</Text>
                <Text style={styles.bio} numberOfLines={3}>
                  {e.bio}
                </Text>
              </View>
            </View>
            ))
            :
            <Text style={styles.empty}>Acabou :(</Text>
        }
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={Like} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image source={Deslike} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    marginTop: 30
  },

  empty: {
    alignSelf: 'center',
    color: '#999',
    fontSize: 24,
    fontWeight: 'bold'
  },

  cardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500,
  },

  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  avatar: {
    flex: 1,
    height: 300
  },

  footer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },

  bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },

  }
});
