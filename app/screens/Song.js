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

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
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
                <Text style={style.chordsAndLyrics} > {this.props.song.chord1} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric1} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord2} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric2} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord3} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric3} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord4} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric4} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord5} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric5} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord6} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric6} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord7} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric7} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord8} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric8} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord9} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric9} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord10} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric10} </Text>
              </View>
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
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord20} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric20} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord21} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric21} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord22} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric22} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord23} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric23} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord24} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric24} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord25} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric25} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord26} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric26} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord27} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric27} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord28} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric28} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord29} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric29} </Text>
              </View>
              <View style={style.chordsAndLyricsContainer}>
                <Text style={style.chordsAndLyrics} > {this.props.song.chord30} </Text>
                <Text style={style.chordsAndLyrics} > {this.props.song.lyric30} </Text>
              </View>
            </View>

            <Text style={{marginBottom: 100}}> {this.props.song.description} </Text>
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
