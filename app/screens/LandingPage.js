         /** <Icon name="chevron-right" size={20} style={styles.personMoreIcon} /> */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, ListView, TouchableOpacity, Navigator } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash'
// import Icon from 'react-native-vector-icons/FontAwesome'

class LandingPage extends Component {
  // constructor(props) {
  //   super(props)
  //   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
  //   this.state = {
  //     peopleDataSource: ds.cloneWithRows(people)
  //   }
  // }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <TouchableOpacity >
          <Text>alignItems</Text>
          <View style={{flex: 1}} />
        </TouchableOpacity>

        <TouchableOpacity >
          <Text>flexDirection</Text>
          <View style={{flex: 1}} />
        </TouchableOpacity>

        <TouchableOpacity >
          <Text>justifyContent</Text>
          <View style={{flex: 1}} />
        </TouchableOpacity>

        <TouchableOpacity >
          <Text>HandlingTextInput</Text>
          <View style={{flex: 1}} />
        </TouchableOpacity>

        <TouchableOpacity >
          <Text>ScrollView</Text>
          <View style={{flex: 1}} />
        </TouchableOpacity>

        <TouchableOpacity >
          <Text>ListView</Text>
          <View style={{flex: 1}} />
        </TouchableOpacity>

      </ViewContainer>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  personRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50
  },
  personName: {
    marginLeft: 25
  },
  personMoreIcon: {
    color: 'green',
    height: 20,
    width: 20
  }

});

module.exports = LandingPage