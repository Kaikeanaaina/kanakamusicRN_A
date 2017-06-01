'use strict'

import React, { Component } from 'react'
import { Text, View, ListView, TouchableOpacity, Navigator } from 'react-native'
import _ from 'lodash'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

import axios from 'axios'

const Styles = {
  SongListHeader: {
    textAlign:'center',
    fontSize: 24
  },
  SongListListView: {
    paddingBottom: 30
  },
  IndividualSongContainer: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 30
  },
  IndividualSongText : {
    fontSize: 24
  }
}

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
  componentDidMount () {
    if (this.props.ArtistId) {
      axios.get(`http://localhost:5050/songs/consumers/ByArtistId/${this.props.ArtistId}`)
      .then((res) => {
        this.setState({
          songs: this.state.songs.cloneWithRows(res.data)
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    } else if (this.props.AlbumId) {
      axios.get(`http://localhost:5050/songs/consumers/ByAlbumId/${this.props.AlbumId}`)
      .then((res) => {
        this.setState({
          songs: this.state.songs.cloneWithRows(res.data)
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    } else {
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
  }
  render () {
    return (
      <ViewContainer>
        <View>
          <StatusBarBackground />
          <Text style={Styles.SongListHeader} > SongList </Text>
          <ListView
            style={Styles.SongListListView}
            dataSource={this.state.songs}
            renderRow={(song) => {return this._renderSongRow(song) }}
            enableEmptySections={true} />
        </View>
      </ViewContainer>
    )
  }

  _renderSongRow(song) {
    return (
      <View >
        <TouchableOpacity style={Styles.IndividualSongContainer} onPress={(event) => this._navigateToSongPage(song) }>

          <View style={{flexDirection: 'column'}}>
            <View>
              <Text style={Styles.IndividualSongText}> {`${_.capitalize(song.title)}`} </Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <Text>Artist</Text>
              <View style={{width:10}} />
              <Text>Album</Text>
            </View>
          </View>

          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />

        </TouchableOpacity>
      </View>
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