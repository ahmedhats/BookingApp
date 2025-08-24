import React, { useState } from 'react';
import { StyleSheet,View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from '../../colors/colors';
export default function AppDropDown() {
    const [value, setValue] = useState(null);

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ];

    return (
      <View style={styles.container}>
        <Dropdown
          style={styles.dropdown}
          containerStyle={styles.containerStyle}
          inputSearchStyle={styles.inputSearchStyle}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          itemTextStyle={styles.itemTextStyle}
          itemContainerStyle={styles.itemContainerStyle}
          activeColor={colors.primary}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign style={styles.icon} color="white" name="search1" size={20} />
          )}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
    container:{
      width:'90%',
    },
    containerStyle:{
      backgroundColor:colors.settingsBackGround,
      borderWidth:0,
      borderRadius:20,
      padding:3,
      // paddingTop:5,
    },
    dropdown: {
      padding: 16,
      height: 50,
      borderWidth:2 ,
      borderRadius:21,
      borderColor:colors.borderColor,
      backgroundColor: colors.settingsBackGround,
    },  
    icon: {
      marginRight: 5,
    },
    placeholderStyle: { 
      color:'white',
      fontSize: 16,
    },
    selectedTextStyle: {
      color:'white',
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      color:'white',
      height: 40,
      fontSize: 16,
      padding:9,
      borderRadius:20,
      // borderWidth:0,
    },
    itemTextStyle:{
      color:'white',
    },
    itemContainerStyle:{
      
    }
  });