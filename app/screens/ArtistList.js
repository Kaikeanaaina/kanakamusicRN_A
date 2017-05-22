'use strict'

import React, { Component } from 'react'
import { Text, View, ListView, TouchableOpacity, Navigator } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

import _ from 'lodash'
import axios from 'axios'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class ArtistList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      artists: ds.cloneWithRows([])
    }
    this._renderArtistRow = this._renderArtistRow.bind(this)
    this._navigateToArtistPage = this._navigateToArtistPage.bind(this)
  }
  componentWillMount () {
    axios.get(`http://localhost:5050/artists/consumers/`)
    .then((res) => {
      this.setState({
        artists: this.state.artists.cloneWithRows(res.data)
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <View>
          <Text style={{textAlign:'center', fontSize:24}} > ArtistList </Text>
          <ListView
            style={{paddingBottom: 30}}
            dataSource={this.state.artists}
            enableEmptySections={true}
            renderRow={(artist) => {return this._renderArtistRow(artist) }} />
        </View>
      </ViewContainer>
    )
  }

  _renderArtistRow(artist) {
    return (
      <TouchableOpacity style={{marginTop:2}} onPress={(event) => this._navigateToArtistPage(artist) }>
        <Text style={{fontSize: 24}} > {`${_.capitalize(artist.name)}`}</Text>
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