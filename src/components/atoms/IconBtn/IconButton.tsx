import React from 'react';
import { Pressable, StyleSheet } from 'react-native';


type IconButtonProps = {
  Icon: React.ComponentType<any>;
  isRounded?: boolean;            
  onPress?: () => void;           
};

const IconButton: React.FC<IconButtonProps> = ({ Icon, isRounded = false, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { 
          backgroundColor: pressed ? '#ddd' : '#fff',
          borderRadius: isRounded ? 50 : 6,
          padding: isRounded ? 10 : 20,
        }
      ]}
    >
      <Icon />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
  },
});

export default IconButton;
