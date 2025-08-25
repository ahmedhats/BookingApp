import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../../../colors/colors';

type InputProps ={
    placeHolder: string;
    autoCapitalize: 'none' | 'sentences' | 'words' | 'characters';
    secureTextEntry?: boolean;
    keyBoardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'name-phone-pad' | 'decimal-pad' | 'twitter' | 'web-search' | 'visible-password';
}

const styles = StyleSheet.create({
  common:{
    borderRadius:24,
    borderColor: `${colors.borderColor}`,
  }
}) 

const Input = (props: InputProps) => {
  return (
    <>
      <TextInput placeholder={props.placeHolder} autoCorrect={false} secureTextEntry={props.secureTextEntry}  autoCapitalize={props.autoCapitalize} textContentType='password' />
    </>
  );
};

export default Input;
