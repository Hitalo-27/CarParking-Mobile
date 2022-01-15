import { View, Text, TextInput, Image, FlatList } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Perfil } from '../../components/perfil';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Fontisto} from '@expo/vector-icons';

export default function MinhasVagas() {
    return (
        <>
            <View style={styles.container}>
                <Perfil />
                <Text style={styles.title}>Suas vagas!</Text>
                
                <FlatList
                    numColumns={6}
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,32,33,34,35,36,37,38,39,40,41,42]}
                    renderItem={() => {
                        return (
                            <View style={styles.icons}>
                                <TouchableOpacity>
                                    <Fontisto style={styles.car} name="car" size={40} color='#fff' />
                                    <Text style={styles.number}>1</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        </>
    );
}