import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Button } from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../../global/global';

export default function Cadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senha2, setSenha2] = useState("");
    const [hidePass, setHidePass] = useState(true);
    const [hidePass2, setHidePass2] = useState(true);

    const navigation = useNavigation();

    function handleHome() {
        navigation.navigate("Home");
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Faça o seu cadastro aqui!
                </Text>

                <TextInput
                    style={styles.input}
                    placeholderTextColor="#fff"
                    placeholder="Digite o seu Nome"
                    value={nome}
                    onChangeText={setNome}
                />

                <TextInput
                    style={styles.input}
                    placeholderTextColor="#fff"
                    placeholder="Digite o seu CPF"
                    value={nome}
                    onChangeText={setNome}
                />

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

                <View style={styles.viewOlho}>
                    <TextInput
                        style={styles.inputOlho}
                        placeholder="Digite a sua senha novamente"
                        placeholderTextColor="#fff"
                        secureTextEntry={hidePass2}
                        onChangeText={setSenha2}
                        value={senha2}
                    />

                    <TouchableOpacity
                        style={styles.olho}
                        onPress={() => setHidePass2(!hidePass2)}
                    >
                        {hidePass2 ? (
                            <Ionicons name="eye" color={theme.color} size={20} />
                        ) : (
                            <Ionicons name="eye-off" color={theme.color} size={20} />
                        )}
                    </TouchableOpacity>
                </View>


                <Button onPress={handleHome} title="Criar Conta" />
            </View>
        </>
    );
}