'use strict'

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

class Song extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <View>
          <Text> this is the song page </Text>
        </View>
      </ViewContainer>
    )
  }
}

module.exports = Song
