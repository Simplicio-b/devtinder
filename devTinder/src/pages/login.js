import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView
} from 'react-native';

// API
import API from '../services/API';

// Logo
import Logo from '../assets/logo.png';

function Login({ navigation }) {
  const [user, setUser] = useState('');
  
  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if(user) {
         navigation.navigate('Main', { user })
      }
    })
  }, []);

  async function handleLogin() {
    const res = await API.post('/devs', { username: user })
    
    const { _id } = res.data;

   await AsyncStorage.setItem('user', _id);

    navigation.navigate('Main', { _id });
  }

  return (
    <KeyboardAvoidingView
     behavior="padding"
     enabled={Platform.OS === "ios"}
     style={styles.container}
    >
        <Image source={Logo} />
        
        <TextInput 
            style={styles.input}
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu user no git-hub !"
            value={user}
            onChangeText={setUser}
        />

        <TouchableOpacity 
          onPress={handleLogin}
          style={styles.button}
        >
            <Text style={styles.btnText}>Enviar</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#DF4723',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default Login;
