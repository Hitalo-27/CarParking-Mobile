import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import logo from '../../assets/logoEsta.png';
import { Button } from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { theme } from '../../../global/global';

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [hidePass, setHidePass] = useState(true);
    
    const navigation = useNavigation();

    function handleCadastro() {
        navigation.navigate("Cadastro");
    }

    function validacao(){
        if(email=="" || senha==""){
            Alert.alert("Digite e o email e senha!")
        }
        else{
            navigation.navigate("Home");
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.title}>
                    Car Parking
                </Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#fff"
                    placeholder="Digite o seu Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <View style={styles.viewOlho}>
                    <TextInput
                        style={styles.inputOlho}
                        placeholder="Digite a sua senha"
                        placeholderTextColor="#fff"
                        secureTextEntry={hidePass}
                        onChangeText={setSenha}
                        value={senha}
                    />

                    <TouchableOpacity
                        style={styles.olho}
                        onPress={() => setHidePass(!hidePass)}
                    >
                        {hidePass ? (
                            <Ionicons name="eye" color={theme.color} size={20} />
                        ) : (
                            <Ionicons name="eye-off" color={theme.color} size={20} />
                        )}
                    </TouchableOpacity>
                </View>

                <Button onPress={validacao} title="Entrar" />

                <TouchableOpacity onPress={handleCadastro} style={styles.touchable}>
                    <Text style={styles.cadastro}>Fazer Cadastro</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}