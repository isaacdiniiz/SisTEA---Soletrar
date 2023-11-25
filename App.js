
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
      <View style={styles.header}>
        <Text style={styles.headerText}>Soletrar</Text>
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
 header: {
    backgroundColor: '#495E88',
    width: 360,
    height: 30,
    flexShrink: 0,
 },
 headerText: {
    fontFamily: 'inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 24,
 }
})