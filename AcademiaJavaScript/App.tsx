import React from 'react';
import {Button, ImageBackground, View, ScrollView, Text, TextInput, StyleSheet} from 'react-native';
import acad from './assets/academia.png';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

const estilos = StyleSheet.create({ 
  input: {
    backgroundColor: "#ffa",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 15,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 20,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOffset: {width: 6, height: 6},
    padding: 10,
  },
  botao: {  
    backgroundColor: "#ff6961",
    fontSize: 30,
    color: "white",
    marginHorizontal: 50, 
    marginTop: 20,
    borderRadius: 30,
    shadowColor: "black", 
    shadowRadius: 10,
    shadowOffset: {width: 5, 
    height: 5},
    textShadowColor: "black",
    textShadowRadius: 5,
    fontWeight: "bold",
    paddingVertical: 10,
    textAlign: "center"
  },
  item : {
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "red",
    paddingVertical: 15,

  },
    dadosdotreino:{
    color: "blue"
  },
    nomedotreino: {
    fontSize: 25,
    fontFamily: "normal",
    fontWeight: "bold",
}

});



const Lista = () =>
       <ScrollView>
          <View style = {estilos.item }>
             <Text style = {[estilos.nomedotreino, {}]}>Peito </Text>
            <Text style = {estilos.dadosdotreino}>Supino Reto - Barra - 4 Séries</Text>
             </View>
          <View style = {estilos.item}>
             <Text style = {estilos.nomedotreino}>Costas </Text>
            <Text style = {estilos.dadosdotreino}> Pulley frente - Polia alta- 4 Séries</Text>
             </View>
         <View style = {estilos.item}>
             <Text style = {estilos.nomedotreino}>Ombro </Text>
             <Text style = {estilos.dadosdotreino}>Desenvolvimento - halteres - 4 Séries</Text>
            </View>
          <View style = {estilos.item}>
             <Text style = {estilos.nomedotreino}>Cárdio </Text>
             <Text style = {estilos.dadosdotreino}>Corrida - Esteira - 5 km</Text>
           </View>
      </ScrollView>


const Formulario = () =>
  <ScrollView>
      <TextInput placeholder = "Treino:"
                 style = {estilos.input} />
      <TextInput placeholder = "Exercício:" 
                 style = {estilos.input}/>
      <TextInput placeholder = "Máquina/Outro:" 
                 style = {estilos.input}/>
      <TextInput placeholder = "Séries:" 
                 style = {estilos.input}/>
      <Text style={estilos.botao}>Gravar</Text>
  </ScrollView>



const Principal = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
     <ImageBackground style={{flex: 1, alignItems: "stretch"}} source={acad}>
          <Text style={{fontSize: 48, 
          color: 'white', 
          backgroundColor: "rgba(65, 105, 225, 0.6)",
          borderRadius: 20,
          textAlign: "center",
          textShadowOffset : {width: 5, height: 5},
          textShadowColor:"black", textShadowRadius:5 }}>ACADEMIA</Text>
        </ImageBackground>

        <View style={{flex: 2}}>
         <Tab.Navigator>
           <Tab.Screen name="Cadastro Ficha de Treino" component={Formulario} />
           <Tab.Screen name="Lista" component = {Lista} />
           </Tab.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}

export default Principal;