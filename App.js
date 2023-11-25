import { StyleSheet, View, Image } from 'react-native';
import imagecat from './assets/imagecat.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={imagecat} style={styles.image}/>
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
      resizeMode: 'contain'
    },
})
