'use strict'

import React, { Component } from 'react'
import { Text, View, ListView, Navigator, TouchableOpacity} from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

import _ from 'lodash'
import axios from 'axios'

const Styles = {
  AlbumListHeader: {
    textAlign:'center',
    fontSize: 24
  },
  AlbumListListView: {
    paddingBottom: 30
  },
  IndividualAlbumContainer: {
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  IndividualAlbumText : {
    fontSize: 24
  }
}

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
          <Text style={Styles.AlbumListHeader} > AlbumList </Text>
          <ListView
            style={Styles.AlbumListListView}
            dataSource={this.state.albums}
            enableEmptySections={true}
            renderRow={(album) => {return this._renderAlbumRow(album) }} />
        </View>
      </ViewContainer>
    )
  }
  _renderAlbumRow(album) {
    return (
      <View>
        <TouchableOpacity style={Styles.IndividualAlbumContainer} onPress={(event) => this._navigateToAlbumPage(album) }>
          <Text style={Styles.IndividualAlbumText} > {`${_.capitalize(album.title)}`} </Text>
          <View style={{flex: 1}} />
        </TouchableOpacity>
      </View>
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