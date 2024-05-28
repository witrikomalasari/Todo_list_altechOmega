import React, {FC, useState} from 'react';
import {Dimensions, StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import Spacer from './Spacer';
import {AltechColors} from '@theme/colorsAltech';
import {AltechText} from '@components/molecules';

interface IInputFieldProps {
  value?: string;
  placeHolder?: string;
  onChange?: (text: string) => void;
  title?: string;
  type?: 'text' | 'password' | 'number';
  errorText?: string;
  placeHolderTextColor?: string;
  isLabel?: boolean;
}

const {width} = Dimensions.get('window');

export const InputFieldAltech: FC<IInputFieldProps> = ({
  value,
  placeHolder,
  onChange,
  isLabel,
  title,
  type = 'text',
  errorText = '',
  placeHolderTextColor,
}) => {
  const [uiValue, setUiValue] = useState<string>(value ? value : '');

  let containerStyle: ViewStyle = styles.textContainer;

  if (errorText !== '')
    containerStyle = {...containerStyle, borderColor: AltechColors.error};

  return (
    <View style={styles.container}>
      {isLabel && (
        <>
          <AltechText>{title}</AltechText>
          <Spacer height={8} />
        </>
      )}
      <TextInput
        keyboardType={type === 'text' ? 'ascii-capable' : 'number-pad'}
        style={containerStyle}
        placeholder={placeHolder}
        placeholderTextColor={placeHolderTextColor}
        value={uiValue}
        onChangeText={text => {
          setUiValue(text);
          onChange && onChange(text);
        }}
      />
      <Spacer height={5} />
      {errorText ? (
        <AltechText style={{color: 'red', paddingLeft: 5}}>
          {errorText}
        </AltechText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width},
  textContainer: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 0,
    color: AltechColors.text.black,
  },
});

export default InputFieldAltech;
