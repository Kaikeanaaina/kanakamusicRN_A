'use strict'

import React, { Component } from 'react'
import { Text, View, ListView, TouchableOpacity, Navigator } from 'react-native'
import _ from 'lodash'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

import axios from 'axios'

var API_KEY = '73b19491b83909c7e07016f4bb4644f9:2:60667290'
var QUERY_TYPE = 'hardcover-fiction'
var API_STEM = 'http://api.nytimes.com/svc/books/v3/lists'
var Endpoint = `${API_STEM}/${QUERY_TYPE}?response-format=json&api-key=${API_KEY}`

class SongList extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      songs: ds.cloneWithRows([
        {
          title: 'Shore of Waiehu',
          description: 'this is the description for the song',
          type: 'meleHawaii',
          chord11: 'chord11',
          chord12: 'chord12',
          chord13: 'chord13',
          chord14: 'chord14',
          chord15: 'chord15',
          chord16: 'chord16',
          chord17: 'chord17',
          chord18: 'chord18',
          chord19: 'chord19',
          lyric11: 'lyric11',
          lyric12: 'lyric12',
          lyric13: 'lyric13',
          lyric14: 'lyric14',
          lyric15: 'lyric15',
          lyric16: 'lyric16',
          lyric17: 'lyric17',
          lyric18: 'lyric18',
          lyric19: 'lyric19',
          visibilityBySong: true,
          visibilityByAlbum: true,
          visibilityByArtist: true,
          totalViews: 0,
          weeklyViews: 1,
          monthlyViews: 2,
          memberTotalViews: 3,
          memberWeeklyViews: 4,
          memberMonthlyViews: 5,
          ArtistId: 11,
          AlbumId: 22,
          RecordLabelId: 33,
        },
        {title: 'Down in the Valley'},
        {title: 'Old Fashion Touch'}
      ]),
      theManySongs: ''
    }
    this._renderSongRow = this._renderSongRow.bind(this)
    this._navigateToSongPage = this._navigateToSongPage.bind(this)
  }
  componentDidMount () {
    // console.log(1111111)
    // axios.get('http://localhost:5050/songs')
    // .then((res) => {
    //   this.setState({
    //     songs: this.state.songs.cloneWithRows(res.data)
    //   })
    //   console.log(this.state.songs.cloneWithRows(res))
    //   console.log(this.state.songs.cloneWithRows(res._dataBlob))
    // })

    // axios.get(Endpoint)
    // .then((res) => {
    //   return this.setState({
    //     songs: this.state.songs.cloneWithRows(res.results.books)
    //   })
    // })

    // fetch(Endpoint)
    // .then((response) => response.json())
    // .then((rjson) => {
    //   this.setState({
    //     songs: this.state.songs.cloneWithRows(rjson.results.books)
    //   })
    // })
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
        <Text> {`${_.capitalize(song.title)}`} </Text>
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