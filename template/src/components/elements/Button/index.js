import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const Button = ({
  touchableComponent = TouchableOpacity,
  title = 'title',
  buttonContainerStyle = {},
  buttonStyle = {},
  titleStyle = {},
  onPress = () => {},
}) => {
  const TouchableComponent = touchableComponent;
  return (
    <TouchableComponent style={buttonContainerStyle} onPress={onPress}>
      <View style={buttonStyle}>
        <Text style={titleStyle}>{title}</Text>
      </View>
    </TouchableComponent>
  );
};

export default Button;
