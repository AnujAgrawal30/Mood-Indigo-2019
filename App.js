import React from 'react'
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen'
import DrawNavigator from './screens/DrawNavigator'

const AppStackNavigator = createStackNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  DrawNavigator: {
    screen: DrawNavigator,
    navigationOptions: {
      header: null
    }
  }
}, {
  navigationOptions: {
    gesturesEnabled: false
  }
});

const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    )
  }
}