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
      selectedTab: 'SongList'
    }
  }
 render () {
  return (
    <TabBarIOS
      selectedTab={this.state.selectedTab} >

      <TabBarIOS.Item
        selected={this.state.selectedTab === 'SongList'}
        title={`SongList`}
        onPress={() => this.setState({selectedTab: 'SongList'})} >
        <AppNavigator
          initialRoute={{ident:'SongList'}} />

      </TabBarIOS.Item>

      <TabBarIOS.Item
        selected={this.state.selectedTab === 'ArtistList'}
        title={`ArtistList`}
        onPress={() => this.setState({selectedTab: 'ArtistList'})} >

        <AppNavigator
          initialRoute={{ident:'ArtistList'}} />

      </TabBarIOS.Item>

      <TabBarIOS.Item
        selected={this.state.selectedTab === 'AlbumList'}
        title={`AlbumList`}
        onPress={() => this.setState({selectedTab: 'AlbumList'})} >

        <AppNavigator
          initialRoute={{ident:'AlbumList'}} />

      </TabBarIOS.Item>

    </TabBarIOS>

  )
 }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('kanakamusicRN_A', () => kanakamusicRN_A);
