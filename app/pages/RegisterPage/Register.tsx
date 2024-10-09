import React, { useState } from "react";
import { styles } from "./styles";
import Logo from '../../assets/images/VinculaAçãoLogo.svg';
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button/index";
import { Text, View, Image, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

export default function Register() {
    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function handleRegister() {
        try {
            setLoading(true);

            if (!email || !password || !confirmPassword) {
                return Alert.alert('Atenção', 'Preencha todos os campos!');
            }

            if (password !== confirmPassword) {
                return Alert.alert('Erro', 'As senhas não coincidem!');
            }

            // Lógica de registro
            navigation.reset({ routes: [{ name: 'BottomRoutes' }] });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
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
                <Text style={styles.text}>Crie sua conta!</Text>
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
                />

                <Input
                    title="SENHA"
                    value={password}
                    onChangeText={setPassword}
                    placeholder="elivelton@123"
                    placeholderTextColor="rgba(128, 128, 128, 0.5)"
                    IconRight={Octicons}
                    iconRightName={showPassword ? "eye-closed" : "eye"}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                    secureTextEntry={showPassword}
                />
                <Input
                    title="CONFIRMAR SENHA"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="elivelton@123"
                    placeholderTextColor="rgba(128, 128, 128, 0.5)"
                    IconRight={Octicons}
                    iconRightName={showPassword ? "eye-closed" : "eye"}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                    secureTextEntry={showPassword}
                />
            </View>
            <View style={styles.boxBottom}>
                <Button text="REGISTRAR" loading={loading} onPress={() => handleRegister()} />
            </View>
        </View>
    );
}
