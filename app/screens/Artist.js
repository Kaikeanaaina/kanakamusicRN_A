'use strict'

import React, { Component } from 'react'
import { View, Text} from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'

import _ from 'lodash'

class Artist extends Component {
  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <Text style={{textAlign:'center'}}>{`${_.capitalize(this.props.artist.name)}`}</Text>
      </ViewContainer>
    )
  }
}

module.exports = Artist