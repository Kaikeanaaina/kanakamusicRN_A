'use strict'

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

import _ from 'lodash'

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
          <Text style={{textAlign:'center'}}> {`${_.capitalize(this.props.song.name)}`} </Text>
        </View>
      </ViewContainer>
    )
  }
}

module.exports = Song
