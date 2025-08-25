import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import colors from "../../colors/colors";

type Item = {
  label: string;
  value: string;
};

type DropdownProps = {
  data: Item[];
  isTextDropdown: boolean;
  iconName: "search1" | "enviromento";
  iconColor: string;
};

export default function AppDropDown({
  data,
  isTextDropdown = false,
  iconName = "search1",
  iconColor = colors.primary,
}: DropdownProps) {
  const [value, setValue] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Dropdown
        style={isTextDropdown ? styles.textDropdown : styles.dropdown}
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
        onChange={(item) => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={iconColor}
            name={iconName}
            size={20}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  containerStyle: {
    backgroundColor: colors.settingsBackGround,
    borderWidth: 0,
    borderRadius: 20,
    padding: 3,
    // paddingTop:5,
  },
  dropdown: {
    padding: 16,
    height: 50,
    borderWidth: 2,
    borderRadius: 21,
    borderColor: colors.borderColor,
    backgroundColor: colors.settingsBackGround,
  },
  textDropdown: {
    width: "45%",
    borderWidth: 0,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    color: "white",
    fontSize: 16,
  },
  selectedTextStyle: {
    color: "white",
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    color: "white",
    height: 40,
    fontSize: 16,
    padding: 9,
    borderRadius: 20,
    // borderWidth:0,
  },
  textInputSearchStyle: {
    color: "white",
    height: 40,
    fontSize: 16,
    padding: 9,
    borderWidth: 0,
  },
  itemTextStyle: {
    color: "white",
    paddingBottom: 5,
    justifyContent: "center",
  },
  itemContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    borderRadius: 20,
  },
});
