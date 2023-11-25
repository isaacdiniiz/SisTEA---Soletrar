
// Import necessary components from React Native
import { StyleSheet, View, Image, Text } from 'react-native';

// Import image from local assets
import imagecat from './assets/imagecat.png';

// Define the main App component
export default function App() {
 // Return the JSX for the App component
 return (
    <View style={styles.container}>
      <Image source={imagecat} style={styles.image}/>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Soletrar</Text>
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
 image: {
    width: 267, // Set the width of the image
    height: 267, // Set the height of the image
    flexShrink: 0,
    marginTop: 50
 },
 footer: {
  backgroundColor: 'rgba(73,	140,	255, 1)',
  padding: 10,
  marginTop: 20,
},
 footerText: {
  fontSize: 16, // Set the font size of the footer text
  color: 'white', // Set the color of the footer text
  textAlign: 'center', // Center the footer text horizontally
},
})