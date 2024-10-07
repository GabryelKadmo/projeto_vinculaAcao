import React, { useState } from "react";
import { styles } from "./styles";
import Logo from '../../assets/images/VinculaAçãoLogo.svg';
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button/index";
import { Text, View, Image, Alert } from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);


  async function getLogin() {
    try {
      setLoading(true)

      if (!email || !password) {
        return Alert.alert('Anteção 2', 'Informe os campos obrigatórios!')
      }
      navigation.reset({ routes: [{ name: 'BottomRoutes' }] });
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Image
          source={Logo}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.text}>Bem vindo de volta!</Text>
      </View>
      <View style={styles.boxMid}>
        <Input
          title="ENDEREÇO E-MAIL"
          value={email}
          onChangeText={setEmail}
          placeholder="fulano@gmail.com"
          placeholderTextColor="rgba(128, 128, 128, 0.5)"
          IconRight={MaterialIcons}
          iconRightName="email"
          onIconRightPress={() => console.log('OLA')}
        />
        <Input
          title="SENHA"
          value={password}
          onChangeText={setPassword}
          placeholder="elivelton123"
          placeholderTextColor="rgba(128, 128, 128, 0.5)"
          IconRight={Octicons}
          iconRightName={showPassword ? "eye-closed" : "eye"}
          onIconRightPress={() => setShowPassword(!showPassword)}
          secureTextEntry={showPassword}
        />
        <Text style={styles.textBottom}>Não tem conta? <Text style={styles.textBottomCreate}>Crie agora</Text></Text>

      </View>
      <View style={styles.boxBottom}>
        <Button text="ENTRAR" loading={loading} onPress={() => getLogin()} />

      </View>
    </View>
  )
}