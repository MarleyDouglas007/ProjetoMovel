import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{userState} from 'React';
import { Button } from 'react-native';

const getNomeCompleto = (nome, sobrenome, idade) => {
  return nome + ' ' + sobrenome + ' ' + idade;
}

const Cat = ({nome, sobrenome, idade}) => {
  
// let texto = "anos";{
//    if(idade <=1)
//    texto=" ano ";
// }

const texto = (idade <= 1 ) ? "ano" : "anos";
return <Text>Hello, I am{getNomeCompleto(nome, sobrenome, idade).toUpperCase()}! E eu tenho{idade} {texto}.</Text>
}

export default IFAL;

function IFAL() {
  return (
    <View style={styles.container}>
      <Cat nome="black" sobrenome="red " idade={13}/>
      <Cat nome="apolo" sobrenome="roots " idade={9}/>
      <Cat nome="ban" sobrenome="tururu " idade={10}/>
      <StatusBar style="auto" />
    </View>
  );
 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/* const [cliques,setCliques] = userState(0);
  <Button title ="okkk"onPress={ ()=>{
    setCliques(cliques + 1);
  }}
  />
  <Text>Quantidade de cliques:{cliques}</Text>*/