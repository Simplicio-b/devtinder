import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
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
import itsamatch from '../assets/itsamatch.png';
import Like from '../assets/like.png';
import Deslike from '../assets/dislike.png';

export default function Main({ navigation }) {
  const id = navigation.getParam('user');

  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(null);

  useEffect(() => {
    (async function loadUsers() {
        const response = await API.get('/devs', {
            headers: {
              user: id
            }
        });
        setUsers(response.data);
    })();
  }, [id]);

  useEffect(() => {
    const socket = io('http://10.0.3.2:3333', {
        query: { user: id }
    });

    socket.on('match', dev => {
       setMatchDev(dev);
    });

}, [id])

  async function handleLogout(){
    await AsyncStorage.clear();
    navigation.navigate('Login');
  }

  async function handleLike() {
    const [ user, ...rest ] = users;

    API.post(`/devs/${user._id}/likes`, null, {
      headers: { user: id },  
    });

    setUsers(rest);
  }

  async function handleDeslike() {
    const [ user, ...rest ] = users;

    API.post(`/devs/${user._id}/deslikes`, null, {
      headers: { user: id },  
    });

    setUsers(rest);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Image style={styles.logo} source={Logo} />
      </TouchableOpacity>
      <View style={styles.cardsContainer}>
        {
          users.length != 0 ? 
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
      {
        users.length > 0 ? (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLike}>
              <Image source={Like} />
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.button} onPress={handleDeslike}>
              <Image source={Deslike} />
            </TouchableOpacity>
          </View>
        )
        :
        <View></View>
      }
      {
        matchDev && (
            <View style={styles.matchContainer}>
                <Image style={styles.matchImage} source={itsamatch} />
                <Image 
                  style={styles.matchAvatar} 
                  source={{uri:matchDev.avatar}}/>
                <Text style={styles.matchName}>{matchDev.name}</Text>
                <Text style={styles.matchBio}>{matchDev.bio}</Text>
                <TouchableOpacity onPress={() => setMatchDev(null)}>
                  <Text style={styles.matchClose}>Fechar</Text>
                </TouchableOpacity>
            </View>
        )
       }
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

  },

  matchImage: {
    height: 60,
    resizeMode: 'contain'
  },

  matchContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 30000
  },

  matchAvatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: '#FFF',
    marginVertical: 30,

  },

  matchName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF'
  },

  matchBio: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  matchClose: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold'
  }
});
