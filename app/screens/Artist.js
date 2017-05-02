'use strict'

import React, { Component } from 'react'
import { View, Text} from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'

class Artist extends Component {
  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <Text>this is the artist page</Text>
      </ViewContainer>
    )
  }
}

module.exports = Artist