// components/FunFactScreen.tsx
import React from 'react';
import { View, Text, Button, ViewStyle } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Fact } from '../store/reducers/funfactReducer';

const Home = () => {
  return (
    <View style = {$rootStyle}>
      <Text>Fun Facts</Text>
      <Button title="Add Fun Fact"
       onPress={
        ()=>{}
       } />
    </View>
  );
};


const $rootStyle: ViewStyle = {
  flexDirection: "column",
  backgroundColor: "red"



}
export default Home;
