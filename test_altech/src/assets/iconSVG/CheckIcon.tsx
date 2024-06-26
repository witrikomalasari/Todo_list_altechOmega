import {SvgWrapper} from '@components/atoms';
import React, {FC} from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const CheckIcon: FC<IconsProps> = ({width = 25, height = 25, color}) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={25 / 25}
      children={
        <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.20834 12.5002C5.20859 9.02152 7.6661 6.02747 11.078 5.34905C14.4898 4.67062 17.9058 6.49678 19.2368 9.71072C20.5678 12.9247 19.4432 16.6313 16.5507 18.5637C13.6582 20.4962 9.80341 20.1163 7.34376 17.6564C5.97634 16.2889 5.2082 14.4341 5.20834 12.5002Z"
            stroke={color} //"#B3B7EE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M8.85419 12.5002L11.2844 14.9304L16.1459 10.0699"
            stroke={color} //"#B3B7EE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default CheckIcon;
