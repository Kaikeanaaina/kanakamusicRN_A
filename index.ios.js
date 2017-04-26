         /** <Icon name="chevron-right" size={20} style={styles.personMoreIcon} /> */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, TabBarIOS} from 'react-native'
import AppNavigator from './app/navigation/AppNavigator'

class kanakamusicRN_A extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'tab1'
    }
  }
 render () {
  return (
    <TabBarIOS
      selectedTab={this.state.selectedTab} >

      <TabBarIOS.Item
        selected={this.state.selectedTab === 'tab1'}
        title={`TAB 1`}
        onPress={() => this.setState({selectedTab: 'tab1'})} >
        <AppNavigator
          initialRoute={{ident:'PeopleIndex'}} />

      </TabBarIOS.Item>

      <TabBarIOS.Item
        selected={this.state.selectedTab === 'tab2'}
        title={`TAB 2`}
        onPress={() => this.setState({selectedTab: 'tab2'})} >

        <AppNavigator
          initialRoute={{ident:'PersonShow',
                        person: {firstName: 'jordan', lastName: 'leigh', roomNumber: 30}}} />

      </TabBarIOS.Item>

      <TabBarIOS.Item
        selected={this.state.selectedTab === 'kai'}
        title={`kai`}
        onPress={() => this.setState({selectedTab: 'kai'})} >

        <AppNavigator
          initialRoute={{ident:'KaiLandingPage'}} />

      </TabBarIOS.Item>

    </TabBarIOS>

  )
 }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('kanakamusicRN_A', () => kanakamusicRN_A);
