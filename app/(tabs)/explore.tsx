import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
        source={require('@/assets/images/pico.png')}
        style={styles.headerImage}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type='title'>Pasos a Seguir</ThemedText>
      </ThemedView>

      <ThemedText>Es esta pagina encontrara una serie de pasos a seguir para conectarse y hacer funcionar la tarjeta pico w.</ThemedText>
      <Collapsible title="Conectarse a la misma red">
        <ThemedText>
          Usted debe de conectarse a la misma red en donde esta conectada y funcionando la tarjeta
        </ThemedText>
        <ThemedText>
          Estos ajustes de red los puede encontrar en {''}<ThemedText type='defaultSemiBold'>Configuracion/Wi-Fi</ThemedText> de su telefono mobil.
        </ThemedText>
        <Image source={require('@/assets/images/wifi.jpeg')} style={{ alignSelf: 'center' }} />
      </Collapsible>
      <Collapsible title="Ingresar la ip">
        <ThemedText>
          Debera de ingresar la ip dada por su tarjeta, en la seccion de {' '}
          <ThemedText type="defaultSemiBold">Conexion</ThemedText> de la pantalla principal de esta aplicacion. Despues de esto debera de presionar 
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
      </Collapsible>
      <Collapsible title="Utilizar el menu rgb">
        <ThemedText>
          Una vez presionado el boton conectar, podra escoger mediante las tres barras rgb el color que desea poner en la tira de luz led rgb 
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
      </Collapsible>
      <Collapsible title="Desarrollo">
        <ThemedText>
          Esta aplicacion fue creada con <ThemedText type="defaultSemiBold">React-Native</ThemedText> como principal framework de desarrollo movil.
          Ademas de que se ocupo la herramienta de Expo para el desarrollo de la App, esta herramienta nos ayuda a tener mas herramienta y librerias disponibles
          para el desarrollo de apps mobiles en diferentes sistemas operativos(ios,andorid).
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/get-started/set-up-your-environment/">
          <ThemedText type="link">Expo</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
