'use strict'

import React, { Component } from 'react'
import { Text, View, ListView} from 'react-native'

class AlbumList extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      albums: ds.cloneWithRows([
        'beginning', 'all for you', 'shores of waiehu'
      ])
    }
  }
  render () {
    return (
      <View>
        <Text>This is the AlbumList</Text>
        <ListView
          style={{marginTop: 5}}
          dataSource={this.state.albums}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    )
  }
  _renderAlbumRow(person) {
    return (
      <TouchableOpacity style={styles.personRow} onPress={(event) => this._navigateToPersonShow(person) }>
        <Text style={styles.personName}> {`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`} </Text>
        <View style={{flex: 1}} />
      </TouchableOpacity>
    )
  }

}

module.exports = AlbumList