import {SvgWrapper} from '@components/atoms';
import React, {FC} from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const CompletedIcon: FC<IconsProps> = ({
  width = 30,
  height = 30,
  color,
}) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={30 / 30}
      children={
        <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <Path
            d="M6.25 15.625L12.0838 21.25L23.75 10"
            stroke={color} //"#8B8787"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default CompletedIcon;
