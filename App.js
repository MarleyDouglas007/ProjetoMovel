import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const getNomeCompleto = (nome, sobrenome, idade) => {
  return nome + ' ' + sobrenome + ' ' + idade;
}

const Cat = ({nome, sobrenome, idade}) => {
  return <Text>Hello, I am {getNomeCompleto(nome, sobrenome, idade).toUpperCase()}!</Text>
}

export default IFAL;

function IFAL() {
  return (
    <View style={styles.container}>
      <Cat nome="black" sobrenome="red" idade="13"/>
      <Cat nome="apolo" sobrenome="roots" idade="9"/>
      <Cat nome="ban" sobrenome="tururu" idade="3000"/>
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
