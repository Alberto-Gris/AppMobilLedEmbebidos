import { Image, StyleSheet, TextInput, Pressable,Text, Button } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import React, { useState } from 'react';
import Slider from '@react-native-community/slider';

export default function HomeScreen() {
  const [text, onChangeText] = React.useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [ sliderRed,setSliderRed ] = useState<number>();
  const [ sliderGreen,setSliderGreen ] = useState<number>();
  const [ sliderBlue,setSliderBlue ] = useState<number>();

  const buttonColor = `rgb(${sliderRed}, ${sliderGreen}, ${sliderBlue})`;

  function saveConection() {
    console.log("{Envio :",text,"}");
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
        <ThemedText type="title">Tira de LED's RGB controlable</ThemedText>
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
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Control RGB</ThemedText>
        <Slider
        minimumValue={0}
        maximumValue={255}
        minimumTrackTintColor='red'
        maximumTrackTintColor='red'
        value={sliderRed}
        onValueChange={(value)=>setSliderRed(value)}
        />
        <Slider
        minimumValue={0}
        maximumValue={255}
        minimumTrackTintColor='green'
        maximumTrackTintColor='green'
        value={sliderGreen}
        onValueChange={(value)=>setSliderGreen(value)}
        />
        <Slider
        minimumValue={0}
        maximumValue={255}
        minimumTrackTintColor='blue'
        maximumTrackTintColor='blue'
        value={sliderBlue}
        onValueChange={(value)=>setSliderBlue(value)}
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
