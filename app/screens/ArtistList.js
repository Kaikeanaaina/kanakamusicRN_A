'use strict'

import React, { Component } from 'react'
import { Text, View, ListView, TouchableOpacity, Navigator } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

import _ from 'lodash'
import axios from 'axios'

const Styles = {
  ArtistListHeader: {
    textAlign:'center',
    fontSize: 24
  },
  ArtistListListView: {
    paddingBottom: 30
  },
  IndividualArtistContainer: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  IndividualArtistText : {
    fontSize: 24
  }
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class ArtistList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      artists: ds.cloneWithRows([]),
      refreshing: false
    }
    this._renderArtistRow = this._renderArtistRow.bind(this)
    this._navigateToArtistPage = this._navigateToArtistPage.bind(this)
    this._onRefresh = this._onRefresh.bind(this)
  }
  componentWillMount () {
    axios.get(`https://kanakamusicstaging.herokuapp.com/artists/consumers/`)
    .then((res) => {
      this.setState({
        artists: this.state.artists.cloneWithRows(res.data)
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  _onRefresh () {
    this.setState({ refreshing: true})
    axios.get(`https://kanakamusicstaging.herokuapp.com/artists/consumers/`)
    .then((res) => {
      this.setState({
        artists: this.state.artists.cloneWithRows(res.data),
        refreshing: false
      })
    })
    .catch((error) => {
      console.log('axios error', error)
      this.setState({ refreshing: false})
    })
  }
  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <View>
          <Text style={Styles.ArtistListHeader} > ArtistList </Text>
          <ListView
            style={Styles.ArtistListListView}
            dataSource={this.state.artists}
            enableEmptySections={true}
            renderRow={(artist) => {return this._renderArtistRow(artist) }} />
        </View>
      </ViewContainer>
    )
  }

  _renderArtistRow(artist) {
    return (
      <View>
        <TouchableOpacity style={Styles.IndividualArtistContainer} onPress={(event) => this._navigateToArtistPage(artist) }>
          <Text style={Styles.IndividualArtistText} > {`${_.capitalize(artist.name)}`}</Text>
          <View style={{flex:1}} />
        </TouchableOpacity>
      </View>
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