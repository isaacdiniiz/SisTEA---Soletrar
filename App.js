
// Import necessary components from React Native
import { StyleSheet, View, Image, Text } from 'react-native';

// Import image from local assets
import imagecat from './assets/imagecat.png';

// Define the main App component
export default function App() {
 // Return the JSX for the App component
 return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Soletrar</Text>
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
 footer: {
  backgroundColor: 'rgba(73,	140,	255, 1)',
  width: 360,
  height: 60,
  flexShrink: 0,
},
 footerText: {
  fontSize: 24, // Set the font size of the footer text
  fontWeight: 'bold',
  lineHeight: 80,
  color: 'white', // Set the color of the footer text
  alignSelf: 'flex-start',
  marginLeft: 65 // Center the footer text horizontally
},
})