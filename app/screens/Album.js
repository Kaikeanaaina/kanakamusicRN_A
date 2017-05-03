'use strict'

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'

import _ from 'lodash'

class Album extends Component {
  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <Text style={{textAlign:'center'}}>{`${_.capitalize(this.props.album.title)}`}</Text>
      </ViewContainer>
    )
  }
}

module.exports = Album