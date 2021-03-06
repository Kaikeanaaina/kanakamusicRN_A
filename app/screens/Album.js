'use strict'

import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'

import SongList from './SongList'

import _ from 'lodash'

class Album extends Component {
  constructor (props) {
    super(props)
    this.state = {
      songs: []
    }
  }
  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <ScrollView>
          <View>
            <View>
              <Text style={{textAlign:'center', fontSize: 24}}>{`${_.capitalize(this.props.album.title)}`}</Text>
            </View>

            <View>
              <Text> {this.props.album.ArtistId} </Text>
              <Text> {this.props.album.RecordLabelId} </Text>
            </View>

            <View style={{marginTop: 10}}>
              <Text> {this.props.album.description} </Text>
            </View>

            <View style={{marginTop: 10}}>
              <Text> SONG LIST</Text>
              <SongList AlbumId={this.props.album.id} navigator={this.props.navigator}/>
            </View>
          </View>
        </ScrollView>
      </ViewContainer>
    )
  }
}

module.exports = Album