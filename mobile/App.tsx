import { StatusBar } from 'expo-status-bar';
import { ButtonProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Send 1'/>
      <Button title='Send 2'/>
      <Button title='Send 3'/>
      <StatusBar style="auto" />
    </View>
  );
}
interface ButtonProps{
  title:string;
}

function Button(props: ButtonProps){
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
