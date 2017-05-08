'use strict'

import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'

import _ from 'lodash'

class Artist extends Component {
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
        <ScrollView>
          <View>
            <Text style={{textAlign:'center', fontSize: 24}}>{`${_.capitalize(this.props.artist.name)}`}</Text>

            <View>
              <View>
                <Text> {this.props.artist.bookingPhoneNumber} </Text>
                <Text> {this.props.artist.bookingEmail} </Text>
              </View>
              <View>
                <Text> {this.props.artist.instagram} </Text>
                <Text> {this.props.artist.facebook} </Text>
                <Text> {this.props.artist.twitter} </Text>
              </View>
              <View>
                <Text> {this.props.artist.description} </Text>
              </View>
            </View>

            <View style={{marginTop: 10}}>

              <View style={{marginTop: 10}}>
                <Text>BandMemberList</Text>
              </View>

              <View style={{marginTop: 10}}>
                <Text> forward to Gigs, with artist in search bar </Text>
              </View>

              <View style={{marginTop: 10}}>
                <Text>AlbumList</Text>
              </View>

              <View style={{marginTop: 10}}>
                <Text>SongList</Text>
              </View>

            </View>
          </View>
        </ScrollView>
      </ViewContainer>
    )
  }
}

module.exports = Artist