import { StyleSheet} from 'react-native';
import { theme } from '../../../global/global';

export const styles = StyleSheet.create({
  container:{
    flex:1,
    top: 50,
  },
    header:{
     width:'100%',
     flexDirection:'row',
     justifyContent:'flex-end',
     right: 20,
    },
    image:{
      width: 40,
      height: 40,
      borderRadius:20,
      borderColor:theme.color,
      borderWidth:1
    }
});