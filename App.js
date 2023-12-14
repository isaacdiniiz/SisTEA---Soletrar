
// Import necessary components from React Native
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { width, height } from 'react-native-dimension';
import { Audio } from 'expo-av';
import imagecat from './assets/cat.png';
import imagepato from './assets/pato.png';
import botaoVoltar from './assets/botao_voltar.png'
import botaoSom from './assets/botao_som.png'
import botaoReset from './assets/botao_reset.png'
import AwesomeAlert from 'react-native-awesome-alerts';

alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z']

export default function App() {

  const[sound, setSound] = React.useState();
  const[sound2, setSound2] = React.useState();

  async function playSound() {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    const { sound } = await Audio.Sound.createAsync( require('./assets/sounds/kittySound.wav'));
    setSound(sound);
    await sound.playAsync();
  }
  async function playSound2() {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    const { sound: loadedSound2 } = await Audio.Sound.createAsync(
      require('./assets/sounds/plim.wav')
    );
     setSound2(loadedSound2);
    await loadedSound2.playAsync();
 }
  React.useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
        Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      }
      : undefined;
  }, [sound]);
  React.useEffect(() => {
    return sound2
      ? () => {
          sound2.unloadAsync();
          Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
        }
      : undefined;
 }, [sound2]);

  var [slot0, setSlot0] = useState("")
  var [slot1, setSlot1] = useState("")
  var [slot2, setSlot2] = useState("")
  var [slot3, setSlot3] = useState("")

  const[slot0_vazio, setVazio0] = useState(true)
  const[slot1_vazio, setVazio1] = useState(true)
  const[slot2_vazio, setVazio2] = useState(true)
  const[slot3_vazio, setVazio3] = useState(true)
  const[completo, setCompleto] = useState(false)

  // Função que muda slot em que a letra vai aparecer e confere se slot i está vazio ou ocupado
  const clickLetra = (i) => {
    if(slot0_vazio){
      setSlot0(slot0 = alfabeto[i])
      setVazio0(false)
    } else if(slot1_vazio){
      setSlot1(slot1 = alfabeto[i])
      setVazio1(false)
    } else if(slot2_vazio){
      setSlot2(slot2 = alfabeto[i])
      setVazio2(false)
    } else if(slot3_vazio){
      setSlot3(slot3 = alfabeto[i])
      setVazio3(false)
      setCompleto(true)
    }
  }

// Função que limpa os slots (em caso de erro ou reset)
  const clear = () => {
    setSlot0(slot0 = "")
    setSlot1(slot1 = "")
    setSlot2(slot2 = "")
    setSlot3(slot3 = "")
    setVazio0(true)
    setVazio1(true)
    setVazio2(true)
    setVazio3(true)
    setCompleto(false)
  }

  //Variável que determina o nível
  var [n, setNivel] = useState(0);
  
  // Ativa/desativa o alert de acerto
  const [showAlert, setShowAlert] = useState(false)

  // Lista dos níveis e mensagem para o acerto
  const resposta = ['GATO', 'PATO']
  const image = [imagecat, imagepato]
  var mensagemAcerto = 'A resposta era '+resposta[n];

  //Função para checagem da tentativa do usuário
  var tentativa = slot0+slot1+slot2+slot3
  const check = () => {
    if(tentativa == resposta[n]){
      playSound2()
      setShowAlert(true)
    }else{
      clear()
    }
  }
  React.useEffect(() => {
    setTimeout(() => {
      if(completo) {
        check()
        clear()
      }
    }, 300)
  })
 
  // Função que cria as teclas do teclado
  function tecla(i){
    return (
      <TouchableOpacity onPress={() => clickLetra(i)}>
        <View style={styles.tecla}>
          <Text style={styles.teclaLetra}>{alfabeto[i]}</Text>
        </View>
      </TouchableOpacity>
    ) ;
  } ;
  console.log(n)
 return (
  <View style={styles.container}>
    <AwesomeAlert show={showAlert} contentContainerStyle={styles.alert} title="Parabéns!" titleStyle={styles.alertTitle} message={mensagemAcerto} 
    messageStyle={styles.alertMsg} showConfirmButton={true} confirmButtonStyle={styles.alertButton} confirmText='Próximo nível' confirmButtonTextStyle={styles.alertButtonTxt}
    closeOnTouchOutside={false} onConfirmPressed={() => {setNivel(n+1); setShowAlert(false)}}/>
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={botaoVoltar} style={styles.headerVoltar}/>
      </TouchableOpacity>
      <Text style={styles.headerText}>Soletrar</Text>
    </View>

    <View style={styles.mid}>
      <Image source={image[n]} style={styles.image}/>
      <TouchableOpacity onPress={playSound}>
        <Image source={botaoSom} style={styles.botaoSom}/>
      </TouchableOpacity>
    </View>

    <View style={styles.slots}>
      <View style={styles.slotCell}>
        <Text style={styles.teclaSlot}>{slot0}</Text>
      </View>
      <View style={styles.slotCell}>
        <Text style={styles.teclaSlot}>{slot1}</Text>
      </View>
      <View style={styles.slotCell}>
        <Text style={styles.teclaSlot}>{slot2}</Text>
      </View>
      <View style={styles.slotCell}>
        <Text style={styles.teclaSlot}>{slot3}</Text>
      </View>
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
        <TouchableOpacity onPress={clear}>
          <Image source={botaoReset} style={styles.botaoReset}/>
        </TouchableOpacity>
      </View>
      <View style={styles.invisibleBox}/>
    </View>
    
  </View>
  );
}

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
    marginLeft: width(7),
    marginTop: height(3.3),
},
 botaoSom: {
    width: width(7), // Set the width of the image
    height: width(7), // Set the height of the image
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
  justifyContent: 'center', // Center the content vertically
  alignItems: 'center', // Center the content horizontall 
},
  teclaSlot: {
  fontWeight: '800',
  color: 'rgba(19, 2, 87, 1)',
  fontSize: 35,
  textAlign: 'center',
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
  elevation: 10,
  shadowColor: 'black',
  shadowOpacity: 0.3,
  shadowRadius: 2,
  shadowOffset: {width: 0,height:4},
  justifyContent: 'center', // Center the content vertically
  alignItems: 'center', // Center the content horizontally
  marginHorizontal: 5,
},
teclaLetra:{
  fontWeight: 'bold',
  color: 'rgba(19, 2, 87, 1)',
  fontSize: 30,
  textAlign: 'center',
},
botaoReset: {
  width: width(8.5), // Set the width of the image
  height: width(8.5), // Set the height of the image
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
alert: {
  width: width(80),
  height: height(20),
  backgroundColor: 'white',
  borderColor: 'rgba(52, 152, 219, 1)',
  borderWidth: 2,
  borderRadius: 14
},
alertTitle: {
  fontWeight: 'bold',
  color: 'rgba(19, 2, 87, 1)',
  fontSize: 30,
  textAlign: 'center',
},
alertMsg: {
  fontWeight: 'bold',
  color: 'rgba(52, 152, 219, 1)',
  fontSize: 20,
  textAlign: 'center',
},
alertButton: {
  width: width(50),
  backgroundColor: 'rgba(73,	94,	136, 1)',
  borderColor: 'rgba(52, 152, 219, 1)',
  borderRadius: 10,
},
alertButtonTxt: {
  fontWeight: 'bold',
  color: 'white',
  fontSize: 20,
  textAlign: 'center',
}

})