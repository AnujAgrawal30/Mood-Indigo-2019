import React, { Component } from 'react';
import { 
  View, 
  Text,
  Button,
  StyleSheet 
} from 'react-native';

class SignUpScreen extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>SignUpScreen</Text>
      </View>
    );
  }
}
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})