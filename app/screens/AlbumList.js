'use strict'

import React, { Component } from 'react'
import { Text, View, ListView, Navigator, TouchableOpacity} from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

import _ from 'lodash'

class AlbumList extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      albums: ds.cloneWithRows([
        {title:'beginning'},
        {title: 'all for you'},
        {title: 'shores of waiehu'}
      ])
    }
    this._renderAlbumRow = this._renderAlbumRow.bind(this)
    this._navigateToAlbumPage = this._navigateToAlbumPage.bind(this)
  }
  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <View>
          <ListView
            style={{marginTop: 5}}
            dataSource={this.state.albums}
            renderRow={(album) => {return this._renderAlbumRow(album) }} />
        </View>
      </ViewContainer>
    )
  }
  _renderAlbumRow(album) {
    return (
      <TouchableOpacity style={{marginTop:2}} onPress={(event) => this._navigateToAlbumPage(album) }>
        <Text> {`${_.capitalize(album.title)}`} </Text>
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