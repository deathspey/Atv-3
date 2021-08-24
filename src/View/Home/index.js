import React, {useState}  from 'react';
import {View,Text, ScrollView, Switch, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'

import Header from  '../../components/Header'
import styles from './styles'

import save from '../../assets/verificado.png'

  
  export default function Home(){

    const [enabled, setEnabled] = useState(false);
    const [name, setName] = useState(' ');
    const [number, setNumber] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [salario, setSalario] = useState(0);
    const [stated, setStated] = useState(null);
    const [acting, setActing] = useState(null);

    const states= [
      {key: 1, name:'Acre'},
      {key: 2, name:'Alagoas'},
      {key: 3, name:'Amapá'},
      {key: 4, name:'Amazonas'},
      {key: 5, name:'Bahia'},
      {key: 6, name:'Ceará'},
      {key: 7, name:'Distrito Federal'},
      {key: 8, name:'Espírito Santo'},
      {key: 9, name:'Goiás'},
      {key: 10, name:'Maranhão'},
      {key: 11, name:'Mato Grosso'},
      {key: 12, name:'Mato Grosso do Sul'},
      {key: 13, name:'Minas Gerais'},
      {key: 14, name:'Pará'},
      {key: 15, name:'Paraíba'},
      {key: 16, name:'Paraná'},
      {key: 17, name:'Pernambuco'},
      {key: 18, name:'Piauí'},
      {key: 19, name:'Rio de Janeiro'},
      {key: 20, name:'Rio Grande do Norte'},
      {key: 21, name:'Rio Grande do Sul'},
      {key: 22, name:'Rondônia'},
      {key: 23, name:'Roraima'},
      {key: 24, name:'Santa Catarina'},
      {key: 25, name:'São Paulo'},
      {key: 26, name:'Sergipe'},
      {key: 27, name:'Tocantins'},
    ]
    
    const actings = [
      {key: 1, name:'Advogado'},
      {key: 2, name:'Analista de Sistemas'},
      {key: 3, name:'Dentista'},
      {key: 4, name:'Engenheiro'},
      {key: 5, name:'Fisioterapeuta'},
      {key: 6, name:'Geólogo'},
      {key: 7, name:'Médico'},
      {key: 8, name:'Professor'}
    ]

    function runAlert() {
      let data = "Nome: " + name + "\n" +
      "Telefone: " + number + "\n" +
      "E-mail: " + email +  "\n" +
      "Residência: " + stated + "\n" +
      "Área de Atuação: " + acting + "\n" +
      "Habilitação: " + (enabled ? "Sim" : "Não") + "\n" +
      "Pretenção Salarial: R$" + salario.toFixed(2)
      Alert.alert(
        "Deseja Salvar os Dados?",
        data,
        [ 
          {
            text: "Não",
            onPress: () => { } 
          },
          {
            text: "Sim",
            onPress: () => { }
          }
        ]
      )
    }

    return(

      <View style={styles.container} >

        <Header/>

        <View style={styles.main}>  
        
          <ScrollView style={styles.scrollview} contentContainerStyle={{alignItems:'center'}} >

            
          
            <TextInput style={[styles.input, styles.text]} placeholder="Nome"
            onChangeText={(nameInput) => setName(nameInput)}
            keyboardType='default'>
            </TextInput>

            <TextInput style={[styles.input, styles.text]} placeholder="Telefone"
            onChangeText={(numberInput) => setNumber(numberInput)}
            keyboardType='number-pad'>
            </TextInput>

            <TextInput style={[styles.input, styles.text]} placeholder="Email" 
            onChangeText={(emailInput) => setEmail(emailInput)}>
            </TextInput>

            <View style={styles.box}>

              <Picker
                prompt={"Local de Residência"}
                selectedValue = {stated}
                style={{ height: 50, width: 200 }}
                onValueChange = {(index) => setStated(index)}
              >
                {
                  states.map((item,index)=>{
                    return<Picker.Item style={styles.item} key={index} value={item.name} label={item.name}/>
                  })
                }

              </Picker>

            </View>  
            
            <View style={styles.box}>

              <Picker
                prompt={"Área de Atuação"}
                selectedValue = {acting}
                style={{ height: 50, width: 200 }}
                onValueChange = {(item) => setActing(item)}
              >
                {
                  actings.map(item=>{
                    return<Picker.Item style={styles.item} key={item.key} value={item.name} label={item.name}/>
                  })  
                }
              </Picker>
            </View>
            
            <View style={styles.box}>

              <Text style={styles.text}>Possui Habilitação?</Text>
              <Switch
                trackColor={{ false: "#A00", true: "#0A0" }}
                thumbColor={enabled ? "#DFD" : "#FDD"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setEnabled(!enabled) }
                value={enabled}
                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
              />
            </View>

            <View style={ styles.slider}>
              <Text style={styles.sliderText}>Pretensão Salarial</Text>
              <Slider 
              style = {{width: 250, height: 70}}
              minimumValue={0}
              maximumValue={10000}
              minimumTrackTintColor= "#292"
              maximumTrackTintColor= "#888"
              value={salario}
              step={500}
              onValueChange={(value) => setSalario(value)}/>
              <Text style={styles.sliderText}>R${salario.toFixed(0)}</Text>
            </View>

            <TouchableOpacity style={styles.save}
            onPress={() => runAlert()}>
              <Image source={save} style={styles.image}/>
            </TouchableOpacity>

          </ScrollView>

         

        </View>  

      </View>

    )
  
     
  }
