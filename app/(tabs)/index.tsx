import { Image, StyleSheet, TextInput, Pressable,Text, Button } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import React, { useState } from 'react';
import Slider from '@react-native-community/slider';

export default function HomeScreen() {
  const [text, onChangeText] = React.useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [ sliderRed,setSliderRed ] = useState<number>(0);
  const [ sliderGreen,setSliderGreen ] = useState<number>(0);
  const [ sliderBlue,setSliderBlue ] = useState<number>(0);

  const buttonColor = `rgb(${((sliderRed+1)/256)-1}, ${((sliderGreen+1)/256)-1}, ${((sliderBlue+1)/256)-1})`;
  const url = `http://` + text;
  
  let estatus:String = '';


  async function saveConection() {
    
    estatus = await getConnection();
    console.log(estatus);
    if(estatus == 'raspberry ok'){
      setIsLoading(true);
    }else{
      setIsLoading(false);
    }
  }

  const getConnection = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json.status
    } catch (error) {
      console.error(error);
    }
  };

  const sendColor = async (op:number) => {
    switch(op) {
      case 1:
        fetch(url+'/r/'+`${sliderRed.toFixed(0)}`);
        break;
      case 2:
        fetch(url+'/g/'+`${sliderGreen.toFixed(0)}`);
        break;
      case 3:
        fetch(url+'/b/'+`${sliderBlue.toFixed(0)}`);
        break;
      default:
        console.log("Invalid type");
    }
  }



  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/led.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Tira de LED's RGB</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Conexion</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Ingrese la IP"
          keyboardType='numeric'
        />
        <Pressable style={styles.button} onPress={()=>{setIsLoading(false),saveConection()}}>
            <Text style={styles.text}>Conectar</Text>
        </Pressable>
        
        {(() => {
              if (isLoading){
                  return (
                    <Pressable style={[styles.buttonM,{ backgroundColor: 'green' }]}>
                      <Text style={styles.text}>Conectado</Text>
                    </Pressable>
                  )
              }else{
                return (
                  <Pressable style={[styles.buttonM,{ backgroundColor: 'red' }]}>
                    <Text style={styles.text}>Desconectado</Text>
                  </Pressable>
                )
              }
            })()}
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Control RGB</ThemedText>
        <Slider
        minimumValue={0}
        maximumValue={65535}
        minimumTrackTintColor='red'
        maximumTrackTintColor='red'
        value={sliderRed}
        onValueChange={(value)=>setSliderRed(value)}
        onSlidingComplete={(value)=>sendColor(1)}
        />
        <Slider
        minimumValue={0}
        maximumValue={65535}
        minimumTrackTintColor='green'
        maximumTrackTintColor='green'
        value={sliderGreen}
        onValueChange={(value)=>setSliderGreen(value)}
        onSlidingComplete={(value)=>sendColor(2)}
        />
        <Slider
        minimumValue={0}
        maximumValue={65535}
        minimumTrackTintColor='blue'
        maximumTrackTintColor='blue'
        value={sliderBlue}
        onValueChange={(value)=>setSliderBlue(value)}
        onSlidingComplete={(value)=>sendColor(3)}
        />
        <Pressable style={[styles.buttonSame, { backgroundColor: buttonColor }]}
        ></Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300,
    width: 500,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'cyan',
  },
  buttonM: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  buttonSame: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});
