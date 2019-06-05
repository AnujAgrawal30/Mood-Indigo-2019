import React, { Component } from 'react';
import { 
  View, 
  Button,
  StyleSheet 
} from 'react-native';

var FBLoginButton = require('../FBLoginButton');

class WelcomeScreen extends Component{

    static navigationOptions = {
      header: null,
    }

  render(){
    return (
      <View style={styles.container}>
        <Button title='Log in' onPress={() => this.props.navigation.navigate
        ('DrawNavigator')} />
        <FBLoginButton />
      </View>
    );
  }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})