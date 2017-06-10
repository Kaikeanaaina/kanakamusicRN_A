'use strict'

import React, { Component } from 'react'
import { Text, View, ListView, Navigator, TouchableOpacity, RefreshControl} from 'react-native'
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
    paddingLeft: 20,
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
      albums: ds.cloneWithRows([]),
      refreshing: false
    }
    this._renderAlbumRow = this._renderAlbumRow.bind(this)
    this._navigateToAlbumPage = this._navigateToAlbumPage.bind(this)
    this._onRefresh = this._onRefresh.bind(this)
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
  _onRefresh () {
    this.setState({refreshing: true})
    if (this.props.ArtistId) {
      axios.get(`http://localhost:5050/albums/consumers/ByArtistId/${this.props.ArtistId}`)
      .then((res) => {
        this.setState({
          albums: this.state.albums.cloneWithRows(res.data),
          refreshing: false
        })
      })
      .catch((error) => {
        console.log('axios error', error)
        this.setState({refreshing: false})
      })
    } else {
      axios.get(`http://localhost:5050/albums/consumers/`)
      .then((res) => {
        this.setState({
          albums: this.state.albums.cloneWithRows(res.data),
          refreshing: false
        })
      })
      .catch((error) => {
        console.log('axios error', error)
        this.setState({refreshing: false})
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
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
            renderRow={(album) => {return this._renderAlbumRow(album) }} />
        </View>
      </ViewContainer>
    )
  }
  _renderAlbumRow(album) {
    return (
      <View>
        <TouchableOpacity style={Styles.IndividualAlbumContainer} onPress={(event) => this._navigateToAlbumPage(album) }>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 30}} >
            <Text style={Styles.IndividualAlbumText} > {`${_.capitalize(album.title)}`} </Text>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          </View>
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