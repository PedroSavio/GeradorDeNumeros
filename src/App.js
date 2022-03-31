import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'

import Mega from './Componentes/Mega/Mega'

export default () => (
    <SafeAreaView style = {style.App}> 
      <Mega qtdeNumeros = {7} />
    </SafeAreaView>
)

//criação de estilo
const style = StyleSheet.create ({
    App:{
      // backgroundColor: '#A00', Muda a cor de fundo, no caso foi vermelho
      flexGrow: 1,                        //Permite o componente utilizar a tela toda
      justifyContent: 'center',           //Coloca o texto no centro da coluna 
      alignItems: 'center',                //Coloca o texto no centro da linha
      padding:20,                         // Espaçamento nas bordas
    }
  
  })