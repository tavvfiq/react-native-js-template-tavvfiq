import React from 'react';
import {Text} from 'react-native';
import Button from '../../components/elements/Button';
import Mainscreen from '../../components/layout/Mainscreen';

const Screen2 = ({navigation}) => {
  return (
    <Mainscreen style={{backgroundColor: 'blue'}}>
      <Text>Screen 2</Text>
      <Button
        title="goto screen1"
        onPress={() => {
          navigation.navigate('Screen1');
        }}
      />
    </Mainscreen>
  );
};

export default Screen2;
