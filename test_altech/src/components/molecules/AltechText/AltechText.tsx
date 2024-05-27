import {Text, TextStyle} from 'react-native';
import {Preset, weightPreset} from './AltechText.preset';
import React, {FC} from 'react';
import {BaseProps} from './AltechText.props';

export const AltechText: FC<BaseProps> = ({
  children,
  fontSize,
  fontWeight,
  textType = 'normal',
  fontColors,
  style,
  debug,
  numberOfLines,
  ellipsizeMode,
  textLineHeight,
}) => {
  let fontStyle: TextStyle = {};

  if (textType) fontStyle = {...fontStyle, ...Preset[textType]};
  if (fontSize) fontStyle = {...fontStyle, fontSize: Number(fontSize)};
  if (fontWeight) fontStyle = {...fontStyle, ...weightPreset[fontWeight]};
  if (fontColors) fontStyle = {...fontStyle, color: fontColors};
  if (textLineHeight) fontStyle = {...fontStyle, lineHeight: textLineHeight};

  // Most priority is style props
  fontStyle = {...fontStyle, ...style};
  if (debug) console.log(fontStyle);

  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={fontStyle}>
      {children}
    </Text>
  );
};

export default AltechText;
