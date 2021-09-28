import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  render() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: this.props.route.params.colorSelectionBackground }}>
        <Text>Welcome to Chat!</Text>
        <Button
          title="Go to Start"
          onPress={() => this.props.navigation.navigate("Start")}
        />
      </View>
    )
  }
}