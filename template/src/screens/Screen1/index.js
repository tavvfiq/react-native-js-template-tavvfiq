import React from 'react';
import {Text} from 'react-native';
import Button from '../../components/elements/Button';
import Mainscreen from '../../components/layout/Mainscreen';

const Home = ({navigation}) => {
  return (
    <Mainscreen style={{backgroundColor: 'red'}}>
      <Text>This is screen1</Text>
      <Button
        title="goto screen2"
        onPress={() => {
          navigation.navigate('Screen2');
        }}
      />
    </Mainscreen>
  );
};

export default Home;
