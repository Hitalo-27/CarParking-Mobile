import { StyleSheet} from 'react-native';
import { theme } from '../../../global/global';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor:theme.background,
    },
    title: {
        marginTop:'25%',
        marginBottom:'15%',
        color: theme.color,
        fontSize: 30,
    },
    input: {
        width:'60%',
        height:55,
        borderRadius: 8,
        fontSize: 13,
        borderWidth:1,
        paddingHorizontal:16,
        paddingTop:16,
        textAlignVertical:'top',
        marginTop:30,
        color: '#fff',
        borderColor:theme.color,
    },
    button:{
        width:'60%',
        height:55,
        borderRadius: 8,
        backgroundColor: theme.color
    },

    viewOlho:{
        flexDirection:'row',
        width:'60%',
        borderRadius:8,
        height:55,
        fontSize: 13,
        alignItems:'center',
        borderWidth:1,
        marginTop:30,
        borderColor:theme.color
      },
      inputOlho:{
        width:'85%',
        height:50,
        padding: 8,
        color: "#fff"
      },
      olho:{
        width:'15%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
      },
})