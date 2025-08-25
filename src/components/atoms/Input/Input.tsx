import React from 'react';
import { TextInput, StyleSheet, View, Image } from 'react-native';
import colors from '../../../colors/colors';

type InputProps ={
    placeHolder: string;
    autoCapitalize: 'none' | 'sentences' | 'words' | 'characters';
    secureTextEntry?: boolean;
    keyBoardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'name-phone-pad' | 'decimal-pad' | 'twitter' | 'web-search' | 'visible-password';
    size: 'small' | 'medium' | 'large';
    type?: 'search'|'password'|'default';
}

const styles = StyleSheet.create({
  common:{
    borderRadius:24,
    borderColor: `${colors.borderColor}`,
    paddingHorizontal:16,
    paddingVertical:12,
    borderWidth:2,
    backgroundColor:`${colors.settingsBackGround}`,
    color:'#fff',
  },
  large:{
    width:'90%',
  },
  medium:{
    width:'45%',
  },
  small:{
    width:'20%',
  },
  input:{
    color:'#fff',
  }
})

const EyeIcon = () => {
  return (
    <Image
      source={require('../../../../assets/icons/eye.png')}
      style={{ width: 24, height: 24 }}
    />
  );
}

const Input = (props: InputProps) => {
  return (
    <View style={[styles.common,styles[props.size]]}>
      <TextInput placeholder={props.placeHolder} autoCorrect={false} secureTextEntry={props.secureTextEntry} underlineColorAndroid="transparent" placeholderTextColor={colors.placeHolder} autoCapitalize={props.autoCapitalize} textContentType='password' style={styles.input} />
      {props.type === 'password' && <EyeIcon />}
    </View>
  );
};

export default Input;
