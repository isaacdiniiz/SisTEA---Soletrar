
// Import necessary components from React Native
import { StyleSheet, View, Image, Text } from 'react-native';

import { width, height, totalSize } from 'react-native-dimension';
// Import image from local assets
import imagecat from './assets/imagecat.png';
import botaoVoltar from './assets/botao_voltar.png'
import botaoSom from './assets/botao_som.png'

// Define the main App component
export default function App() {
 // Return the JSX for the App component
 return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image source={botaoVoltar} style={styles.headerVoltar}/>
        <Text style={styles.headerText}>Soletrar</Text>
      </View>

      <View style={styles.mid}>
        <Image source={imagecat} style={styles.image}/>
        <Image source={botaoSom} style={styles.botaoSom}/>
      </View>

      <View style={styles.slots}>
      </View>

      <View style={styles.keyboard}>
      </View>

    </View>
 );
}

// Define the styles for the App component
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
 },
 header: {
  backgroundColor: 'rgba(73,	94,	136, 1)',
  width: width(100),
  height: height(10),
  flexShrink: 0,
  flexDirection: 'row'
},
headerVoltar: {
 marginTop: height(5.25),
 height: 26,
 width: 26,
 alignSelf: 'flex-start',
 marginLeft: width(5),// Center the footer text horizontally
},
 headerText: {
  fontSize: 24, // Set the font size of the footer text
  fontWeight: 'bold',
  lineHeight: height(7.25),
  marginTop: height(3),
  color: 'white', // Set the color of the footer text
  alignSelf: 'flex-start',
  marginLeft: width(5), // Center the footer text horizontally
},
 mid: {
  backgroundColor: 'white',
  width: width(100),
  height: height(40),
  flexShrink: 0,
  flexDirection: 'row',
  justifyContent: 'center', // Center the content vertically
  alignItems: 'center', // Center the content horizontally
},
 image: {
    width: 267, // Set the width of the image
    height: 267, // Set the height of the image
    flexShrink: 0,
    marginLeft: 26,
},
 botaoSom: {
    width: 26, // Set the width of the image
    height: 26, // Set the height of the image
    flexShrink: 0,
},
 slots: {
  backgroundColor: 'white',
  width: 420,
  height: height(10),
},
 keyboard: {
  backgroundColor: 'rgba(200, 215, 225, 1)',
  width: 420,
  height: height(40),
}
})