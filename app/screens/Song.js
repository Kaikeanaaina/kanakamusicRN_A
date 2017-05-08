'use strict'

import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
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
        <ScrollView>
          <View >
            <Text style={{textAlign:'center', fontSize: 24}}> {`${_.capitalize(this.props.song.title)}`} </Text>

            <View>
              <Text> {this.props.song.ArtistId} </Text>
              <Text> {this.props.song.AlbumId} </Text>
              <Text> {this.props.song.RecordLabelId} </Text>
            </View>

            <View>
              <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
                <Text> WeeklyViews: {this.props.song.weeklyViews} </Text>
                <Text> MonthlyViews: {this.props.song.monthlyViews} </Text>
                <Text> TotalViews: {this.props.song.totalViews} </Text>
              </View>

              <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
                <Text> Mem.WVs: {this.props.song.memberWeeklyViews} </Text>
                <Text> Mem.MVs: {this.props.song.memberMonthlyViews} </Text>
                <Text> Mem.TVs: {this.props.song.memberTotalViews} </Text>
              </View>
            </View>

            <View style={{marginTop:5}}>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord11} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric11} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord12} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric12} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord13} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric13} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord14} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric14} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord15} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric15} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord16} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric16} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord17} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric17} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord18} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric18} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord19} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric19} </Text>
              </View>
            </View>

            <Text style={{marginTop: 20}}> {this.props.song.description} </Text>
          </View>
        </ScrollView>
      </ViewContainer>
    )
  }
}

var style = {
  chordsAndLyricsContainer: {
    marginTop: 4
  },
  chordsAndLyrics: {
    fontFamily: 'Courier'
  }
}

module.exports = Song
