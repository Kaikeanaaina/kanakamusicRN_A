'use strict'

import React, { Component } from 'react'
import { Text, View, ListView, Navigator, TouchableOpacity} from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

import _ from 'lodash'
import axios from 'axios'

class AlbumList extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      albums: ds.cloneWithRows([])
    }
    this._renderAlbumRow = this._renderAlbumRow.bind(this)
    this._navigateToAlbumPage = this._navigateToAlbumPage.bind(this)
  }
  componentDidMount () {
    if (this.props.ArtistId) {
      axios.get(`http://localhost:5050/albums/consumers/ByArtistId/${this.props.ArtistId}`)
      .then((res) => {
        this.setState({
          albums: this.state.albums.cloneWithRows(res.data)
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    } else {
      axios.get(`http://localhost:5050/albums/consumers/`)
      .then((res) => {
        this.setState({
          albums: this.state.albums.cloneWithRows(res.data)
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    }
  }
  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <View>
          <Text style={{textAlign:'center', fontSize:24}} > AlbumList </Text>
          <ListView
            style={{paddingBottom: 30}}
            dataSource={this.state.albums}
            enableEmptySections={true}
            renderRow={(album) => {return this._renderAlbumRow(album) }} />
        </View>
      </ViewContainer>
    )
  }
  _renderAlbumRow(album) {
    return (
      <TouchableOpacity style={{marginTop:2}} onPress={(event) => this._navigateToAlbumPage(album) }>
        <Text style={{fontSize: 24}} > {`${_.capitalize(album.title)}`} </Text>
        <View style={{flex: 1}} />
      </TouchableOpacity>
    )
  }
  _navigateToAlbumPage (album) {
    this.props.navigator.push({
      ident: 'AlbumPage',
      album: album,
      sceneConfig: Navigator.SceneConfigs.FloatFromRight
    })
  }

}

module.exports = AlbumList