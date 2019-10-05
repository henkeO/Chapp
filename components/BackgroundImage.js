import React from 'react';
import {ImageBackground} from 'react-native';

const image = require('../assets/images/giphy.gif');
export default function BackgroundImage(props) {
  return (
  <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
    {props.children}
  </ImageBackground>
  );
}
