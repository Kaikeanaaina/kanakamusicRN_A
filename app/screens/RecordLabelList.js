'use strict'

import React, { Component } from 'react'
import { Text, View, ListView} from 'react-native'

class RecordLabelList extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      recordLabels: ds.cloneWithRows([
        'ekm records', 'blessed sounds llc'
      ])
    }
  }
  render () {
    return (
      <View>
        <Text>This is the RecordLabelList</Text>
        <ListView
          style={{marginTop: 5}}
          dataSource={this.state.recordLabels}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    )
  }

}

module.exports = RecordLabelList