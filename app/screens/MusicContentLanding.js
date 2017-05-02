         /** <Icon name="chevron-right" size={20} style={styles.personMoreIcon} /> */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, ListView, TouchableOpacity, Navigator, Slider, Button } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash'
// import Icon from 'react-native-vector-icons/FontAwesome'

import SongList from '../screens/SongList'
import ArtistList from '../screens/ArtistList'
import AlbumList from '../screens/AlbumList'
import RecordLabelList from '../screens/RecordLabelList'

class MusicContentLanding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      SongList: true,
      ArtistList: false,
      AlbumList: false,
      RecordLabelList: false
    }
    this.ShowSongList = this.ShowSongList.bind(this)
    this.ShowArtistList = this.ShowArtistList.bind(this)
    this.ShowAlbumList = this.ShowAlbumList.bind(this)
    this.ShowRecordLabelList = this.ShowRecordLabelList.bind(this)
  }

  ShowSongList (e) {
    this.setState({
      SongList: true,
      ArtistList: false,
      AlbumList: false,
      RecordLabelList: false
    })
  }
  ShowArtistList (e) {
    this.setState({
      SongList: false,
      ArtistList: true,
      AlbumList: false,
      RecordLabelList: false
    })
  }
  ShowAlbumList (e) {
    this.setState({
      SongList: false,
      ArtistList: false,
      AlbumList: true,
      RecordLabelList: false
    })
  }
  ShowRecordLabelList (e) {
    this.setState({
      SongList: false,
      ArtistList: false,
      AlbumList: false,
      RecordLabelList: true
    })
  }



  render () {
    let songListRender = null
    if (this.state.SongList) {
      songListRender = <SongList />
    }
    let artistListRender = null
    if (this.state.ArtistList) {
      artistListRender = <ArtistList />
    }
    let albumListRender = null
    if (this.state.AlbumList) {
      albumListRender = <AlbumList />
    }
    let recordLabelListRender = null
    if (this.state.RecordLabelList) {
      recordLabelListRender = <RecordLabelList />
    }
    return (
      <ViewContainer>
        <StatusBarBackground />
        <Text style={{textAlign: 'center', fontSize: 20}}>KanakaMusic</Text>
        <View>
          <TouchableOpacity onPress={this.ShowSongList} >
            <Text> Song </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.ShowArtistList} >
            <Text> Artist </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.ShowAlbumList} >
            <Text> Album </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.ShowRecordLabelList} >
            <Text> RecordLabel </Text>
          </TouchableOpacity>
        </View>

        <View>
          {songListRender}
          {artistListRender}
          {albumListRender}
          {recordLabelListRender}
        </View>
      </ViewContainer>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  personRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50
  },
  personName: {
    marginLeft: 25
  },
  personMoreIcon: {
    color: 'green',
    height: 20,
    width: 20
  }

});

module.exports = MusicContentLanding