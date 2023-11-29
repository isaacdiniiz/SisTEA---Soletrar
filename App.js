import { StyleSheet, View, Image, Text} from 'react-native';

import imagecat from './assets/imagecat.png';

export default function App() {

 return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Soletrar</Text>
      </View>
      <View>
        <Image source={imagecat} style={styles.image}/>
      </View>
    </View>
 );
}


const styles = StyleSheet.create({
 container: {
    justifyContent: 'center', 
    alignItems: 'center', 
 },
 image: {
    width: 267, 
    height: 267, 
    flexShrink: 0,
    marginTop: 50
 },
 footer: {
   backgroundColor: 'rgba(73,	140,	255, 1)',
   width: 420,
   height: 60,
   flexShrink: 0,
},
 footerText: {
   fontSize: 24, 
   fontWeight: 'bold',
   lineHeight: 80,
   color: 'white', 
   alignSelf: 'flex-start',
   marginLeft: 65,
}
})