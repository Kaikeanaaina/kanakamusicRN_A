'use strict'

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'

class Album extends Component {
  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <Text>this is the album page</Text>
      </ViewContainer>
    )
  }
}

module.exports = Album