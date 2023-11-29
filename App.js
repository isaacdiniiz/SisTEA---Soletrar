
// Import necessary components from React Native
import { StyleSheet, View, Image, Text } from 'react-native';

import { width, height, totalSize } from 'react-native-dimension';
// Import image from local assets
import imagecat from './assets/cat.png';
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
      <View style={styles.slotCell} />
      <View style={styles.slotCell} />
      <View style={styles.slotCell} />
      <View style={styles.slotCell} />
    </View>

    <View style={styles.keyboard}>
    </View>

  </View>
 );
}

alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

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
    width: 300, // Set the width of the image
    height: 300, // Set the height of the image
    flexShrink: 0,
    marginLeft: 26,
    marginTop: height(2),
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
  flexDirection: 'row',
  justifyContent: 'center', // Center the content vertically
  alignItems: 'center', // Center the content horizontally
},
 slotCell: {
  backgroundColor: 'rgba(217, 217, 217, 1)',
  width: 56,
  height: 56,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  borderBottomWidth: 2,
  borderColor: 'rgba(52, 152, 219, 1)',
  marginHorizontal: 8,
},
 keyboard: {
  backgroundColor: 'rgba(200, 215, 225, 1)',
  width: 420,
  height: height(40),
}
})
