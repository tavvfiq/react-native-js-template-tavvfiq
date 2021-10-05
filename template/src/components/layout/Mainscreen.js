import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Mainscreen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.mainscreen, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainscreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Mainscreen;
