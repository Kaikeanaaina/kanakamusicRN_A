'use strict'

import React, { Component } from 'react'
import { Text, View, ListView, TouchableOpacity, Navigator } from 'react-native'
import _ from 'lodash'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

import axios from 'axios'

class SongList extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      songs: ds.cloneWithRows([]),
    }
    this._renderSongRow = this._renderSongRow.bind(this)
    this._navigateToSongPage = this._navigateToSongPage.bind(this)
  }
  componentWillMount () {
    axios.get(`http://localhost:5050/songs/consumers/`)
      .then((res) => {
        this.setState({
          songs: this.state.songs.cloneWithRows(res.data)
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
  }
  render () {
    return (
      <ViewContainer>
        <View>
          <StatusBarBackground />
          <ListView
            style={{marginTop: 5, height: 500}}
            dataSource={this.state.songs}
            renderRow={(song) => {return this._renderSongRow(song) }}
            enableEmptySections={true} />
        </View>
      </ViewContainer>
    )
  }

  _renderSongRow(song) {
    return (
      <TouchableOpacity style={{marginTop:2}} onPress={(event) => this._navigateToSongPage(song) }>
        <Text style={{fontSize: 24}}> {`${_.capitalize(song.title)}`} </Text>
        <View style={{flex: 5}} />
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