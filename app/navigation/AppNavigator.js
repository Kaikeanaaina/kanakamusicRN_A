 'use strict'
import React, { Component } from 'react'
import { Navigator, StyleSheet} from 'react-native'
import MusicContentLanding from '../screens/MusicContentLanding'

import SongList from '../screens/SongList'
import ArtistList from '../screens/ArtistList'
import AlbumList from '../screens/AlbumList'

import SongPage from '../screens/Song'
import ArtistPage from '../screens/Artist'
import AlbumPage from '../screens/Album'

class AppNavigator extends Component {
  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch (route.ident) {

      case "MusicContentTab":
        return (
          <MusicContentLanding
            {...globalNavigatorProps} />
        )

      case "SongList":
        return (
          <SongList
            {...globalNavigatorProps} />
        )

      case "ArtistList":
        return (
          <ArtistList
            {...globalNavigatorProps} />
        )

      case "AlbumList":
        return (
          <AlbumList
            {...globalNavigatorProps} />
        )

      case "SongPage":
        return (
          <SongPage
            {...globalNavigatorProps}
            song={route.song} />
        )

      case "ArtistPage":
        return (
          <ArtistPage
            {...globalNavigatorProps}
            artist={route.artist} />
        )

      case "AlbumPage":
        return (
          <AlbumPage
            {...globalNavigatorProps}
            album={route.album} />
        )

      default:
        return (
          <SongList
            {...globalNavigatorProps} />
        )
    }
  }
 render () {
  return (
    <Navigator
      initialRoute={this.props.initialRoute}
      ref='appNavigator'
      style={styles.navigatorStyles}
      renderScene={this._renderScene}
      configureScene={(route) => ({
        ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} />
  )
 }
}

const styles = StyleSheet.create({
});

module.exports = AppNavigator
