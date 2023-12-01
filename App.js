
// Import necessary components from React Native
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { width, height } from 'react-native-dimension';
import { Audio } from 'expo-av';
import imagecat from './assets/cat.png';
import botaoVoltar from './assets/botao_voltar.png'
import botaoSom from './assets/botao_som.png'
import botaoReset from './assets/botao_reset.png'

function tecla(i){
  return (
    <TouchableOpacity>
      <View style={styles.tecla}>
        <Text style={styles.teclaLetra}>{alfabeto[i]}</Text>
      </View>
    </TouchableOpacity>
  ) ;
} ;

export default function App() {

  const[sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync( require('./assets/sounds/kittySound.wav'));
    setSound(sound);
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);
  
 return (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={botaoVoltar} style={styles.headerVoltar}/>
      </TouchableOpacity>
      <Text style={styles.headerText}>Soletrar</Text>
    </View>

    <View style={styles.mid}>
      <Image source={imagecat} style={styles.image}/>
      <TouchableOpacity onPress={playSound}>
        <Image source={botaoSom} style={styles.botaoSom}/>
      </TouchableOpacity>
    </View>

    <View style={styles.slots}>
      <View style={styles.slotCell}><Text style={styles.slotLetra}>{slot1}</Text></View>
      <View style={styles.slotCell}><Text style={styles.slotLetra}>{slot2}</Text></View>
      <View style={styles.slotCell}><Text style={styles.slotLetra}>{slot3}</Text></View>
      <View style={styles.slotCell}><Text style={styles.slotLetra}>{slot4}</Text></View>
    </View>

    <View style={styles.keyboard}>
      {tecla(0)}
      {tecla(1)}
      {tecla(2)}
      {tecla(3)}
      {tecla(4)}
      {tecla(5)}
      {tecla(6)}
      {tecla(7)}
      {tecla(8)}
      {tecla(9)}
      {tecla(10)}
      {tecla(11)}
      {tecla(12)}
      {tecla(13)}
      {tecla(14)}
      {tecla(15)}
      {tecla(16)}
      {tecla(17)}
      {tecla(18)}
      {tecla(19)}
      {tecla(20)}
      {tecla(21)}
      {tecla(22)}
      {tecla(23)}
      <View style={styles.invisibleBox}/>
      <View style={styles.invisibleBox}/>
      {tecla(24)}
      {tecla(25)}
      <View style={styles.invisibleBox}>
        <TouchableOpacity>
          <Image source={botaoReset} style={styles.botaoReset}/>
        </TouchableOpacity>
      </View>
      <View style={styles.invisibleBox}/>
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
    flex:1,
 },
 header: {
  backgroundColor: 'rgba(73,	94,	136, 1)',
  width: width(100),
  flex: 1,
  flexShrink: 0,
  flexDirection: 'row'
},
headerVoltar: {
 marginTop: height(5.25),
 height: width(5.8),
 width: width(5.8),
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
  flex: 4,
  flexShrink: 0,
  flexDirection: 'row',
  justifyContent: 'center', // Center the content vertically
  alignItems: 'center', // Center the content horizontally
},
 image: {
    width: width(75), // Set the width of the image
    height: width(75), // Set the height of the imag >>>>>>> master
    flexShrink: 0,
    marginLeft: 26,
    marginTop: height(2),
},
 botaoSom: {
    width: width(5.8), // Set the width of the image
    height: width(5.8), // Set the height of the image
    flexShrink: 0,
},
 slots: {
  backgroundColor: 'white',
  width: width(100),
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center', // Center the content vertically
  alignItems: 'center', // Center the content horizontally
},
 slotCell: {
  backgroundColor: 'rgba(217, 217, 217, 1)',
  width: width(14),
  height: width(14),
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  borderBottomWidth: 2,
  borderColor: 'rgba(52, 152, 219, 1)',
  marginHorizontal: 8,
},
 keyboard: {
  backgroundColor: 'rgba(200, 215, 225, 1)',
  width: width(100),
  flex: 4,
  flexDirection: 'row',
  justifyContent: 'space-around', 
  alignContent: 'space-around',
  flexWrap: 'wrap',
  padding: 10,
},
tecla:{
  backgroundColor: 'white',
  width: width(12.5),
  height: width(12.5),
  borderRadius: 10,
  borderWidth: 2,
  borderColor: 'rgba(52, 152, 219, 1)',
  shadowColor: 'black',
  shadowOpacity: 0.3,
  shadowRadius: 2,
  shadowOffset: {width: 0,height:4},
  justifyContent: 'center', // Center the content vertically
  alignItems: 'center', // Center the content horizontally
  marginHorizontal: 5,
},
teclaLetra:{
  //fontFamily: "helvetica",
  fontWeight: 'bold',
  color: 'rgba(19, 2, 87, 1)',
  fontSize: 30,
},
botaoReset: {
  width: 36, // Set the width of the image
  height: 36, // Set the height of the image
  backgroundColor: 'white',
  flexShrink: 0,
  borderRadius: 17,
  borderWidth: 2,
  borderColor: 'rgba(52, 152, 219, 1)',
  shadowColor: 'black',
  shadowOpacity: 0.3,
  shadowRadius: 2,
  shadowOffset: {width: 0,height:4},
},
invisibleBox: {
  width: width(12.5),
  height: width(12.5),
  justifyContent: 'center', // Center the content vertically
  alignItems: 'center', // Center the content horizontally
  marginHorizontal: 5,
},
})