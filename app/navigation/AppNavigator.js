 'use strict'
import React, { Component } from 'react'
import { Navigator, StyleSheet} from 'react-native'
import LandingPage from '../screens/LandingPage'


class AppNavigator extends Component {
  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch (route.ident) {

      case "LandingPage":
        return (
          <LandingPage
            {...globalNavigatorProps} />
        )

      default:
        return (
          <LandingPage
            {...globalNavigatorProps} />
        )
    }
  }
 render () {
  return (
    <Navigator
      initialRoute={this.props.initialRoute}
      ref='appNavigator'
      style={styles.navigatorStyles}
      renderScene={this._renderScene}
      configureScene={(route) => ({
        ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} />
  )
 }
}

const styles = StyleSheet.create({
});

module.exports = AppNavigator
