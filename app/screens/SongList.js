'use strict'

import React, { Component } from 'react'
import { Text, View, ListView, TouchableOpacity, Navigator } from 'react-native'
import _ from 'lodash'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

class SongList extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      songs: ds.cloneWithRows([
        {name: 'Shore of Waiehu'},
        {name: 'Down in the Valley'},
        {name: 'Old Fashion Touch'}
      ])
    }
    this._renderSongRow = this._renderSongRow.bind(this)
    this._navigateToSongPage = this._navigateToSongPage.bind(this)
  }
  render () {
    return (
      <ViewContainer>
        <View>
          <StatusBarBackground />
          <ListView
            style={{marginTop: 5}}
            dataSource={this.state.songs}
            renderRow={(song) => {return this._renderSongRow(song) }} />
        </View>
      </ViewContainer>
    )
  }

  _renderSongRow(song) {
    return (
      <TouchableOpacity style={{marginTop:2}} onPress={(event) => this._navigateToSongPage(song) }>
        <Text> {`${_.capitalize(song.name)}`} </Text>
        <View style={{flex: 1}} />
      </TouchableOpacity>
    )
  }

  _navigateToSongPage (song) {
    this.props.navigator.push({
      ident: "SongPage",
      song: song,
      sceneConfig: Navigator.SceneConfigs.FloatFromRight
    })
  }

}

module.exports = SongList