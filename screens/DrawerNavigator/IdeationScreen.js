import React, { Component } from 'react';
import { 
  View, 
  Text,
  Button,
  StyleSheet 
} from 'react-native';
import {
  createStackNavigator
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

class IdeationScreen extends Component{
  static navigationOptions = ({navigation}) => {
      return {
          headerLeft: (
              <View style={{padding: 10}}>
                  <Ionicons 
                    name='md-menu' 
                    size={24}
                    onPress={() => navigation.openDrawer()}/>
              </View>
          )
      }
  }
  render(){
    return (
      <View style={styles.container}>
      <Text>IdeationScreen</Text>
      </View>
    );
  }
}

const AppContainer = createStackNavigator({
  Home: {
    screen: IdeationScreen
  }
})
export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})