import { StyleSheet } from 'react-native';
import { theme } from '../../../global/global';

export const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.background,
    },
    title: {
        marginTop:'15%',
        color: theme.color,
        fontSize: 30,
        marginBottom: 60
    },
    icons: {
        flexDirection:'row',
        padding:10
    },
    car:{
    },
    number:{
        color:'#fff',
        textAlign:'center',
    }
})