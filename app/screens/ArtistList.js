'use strict'

import React, { Component } from 'react'
import { Text, View, ListView, TouchableOpacity, Navigator } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

import _ from 'lodash'

class ArtistList extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      artists: ds.cloneWithRows([
        {name:'Ekolu'},
        {name: 'Maoli'},
        {name: 'Opihi Pickers'},
        {name: 'Kapena'}
      ])
    }
    this._renderArtistRow = this._renderArtistRow.bind(this)
    this._navigateToArtistPage = this._navigateToArtistPage.bind(this)
  }
  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <View>
          <ListView
            style={{marginTop: 5}}
            dataSource={this.state.artists}
            renderRow={(artist) => {return this._renderArtistRow(artist) }}/>
        </View>
      </ViewContainer>
    )
  }

  _renderArtistRow(artist) {
    return (
      <TouchableOpacity style={{marginTop:2}} onPress={(event) => this._navigateToArtistPage(artist) }>
        <Text> {`${_.capitalize(artist.name)}`}</Text>
        <View style={{flex:1}} />
      </TouchableOpacity>
    )
  }

  _navigateToArtistPage (artist) {
    this.props.navigator.push({
      ident: 'ArtistPage',
      artist: artist,
      sceneConfig: Navigator.SceneConfigs.FloatFromRight
    })
  }

}

module.exports = ArtistList