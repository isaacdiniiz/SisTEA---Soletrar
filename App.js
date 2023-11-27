
// Import necessary components from React Native
import { StyleSheet, View, Image, Text } from 'react-native';
// eu usei npm install --save react-native-dimension para instalar a biblioteca
import { width, height, totalSize } from 'react-native-dimension';

// Import image from local assets
import imagecat from './assets/imagecat.png';

// Define the main App component
export default function App() {
 // Return the JSX for the App component
 return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Soletrar</Text>
      </View>
      <Image source={imagecat} style={styles.image}/>
    </View>
 );
}


// Define the styles for the App component
const styles = StyleSheet.create({
 container: {
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
 },
 image: {
    width: 267, // Set the width of the image
    height: 267, // Set the height of the image
    flexShrink: 0,
    marginTop: 50
 },
 header: {
  backgroundColor: 'rgba(73,	94,	136, 1)',
  width: width(100),
  height: height(6.25),
  marginTop: height(4.5),
  flexShrink: 0,
},
 headerText: {
  fontSize: 24, // Set the font size of the footer text
  fontWeight: 'bold',
  lineHeight: height(5.25),
  color: 'white', // Set the color of the footer text
  alignSelf: 'flex-start',
  marginLeft: 65 // Center the footer text horizontally
},
})