import React, { Component } from 'react'
import { Text, View, Button, Slider } from 'react-native'

const maxNumOfTeams = 8
const defaultNumOfTeams = 4
const minNumOfTeams = 2

export class CreateGameScreen extends Component {
  static navigationOptions = {
    title : 'Create Game',
  }

  constructor(props) {
    super(props)
    this.state = {
      numOfTeams: defaultNumOfTeams,
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text>Pick Topic</Text>
        <Text>Pick Difficulty Level?</Text>
        <Text>Pick Number of Teams: {this.state.numOfTeams}</Text>
        <View style={{flexDirection:'row'}}>
          <Text>2</Text>
            <Slider
              maximumValue={maxNumOfTeams}
              minimumValue={minNumOfTeams}
              onValueChange={(sliderValue)=>this.setState({numOfTeams: sliderValue})}
              onSlidingComplete={(sliderValue)=>this.setState({numOfTeams: sliderValue})}
              step={1}
              value={defaultNumOfTeams}
              style={{flex:1}}
            />
          <Text>{maxNumOfTeams}</Text>
        </View>
        <Text>How to Choose Teams</Text>
        <View style={{flexDirection:'row'}}>
          <Button
            color='lightblue'
            title='Randomly Choose'
            accessibilityLabel='Randomly choose'
            onPress={()=>{}}
          />
          <Button
            color='green'
            title='I Choose'
            accessibilityLabel='I choose'
            onPress={()=>{}}
          />
          <Button
            color='red'
            title='Players Choose'
            accessibilityLabel='Players choose'
            onPress={()=>{}}
          />
        </View>
      </View>
    );
  }
}
