import {SvgWrapper} from '@components/atoms';
import React, {FC} from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

const DeleteIcon: FC<IconsProps> = ({width, height, color}) => {
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
            d="M16.8406 9.37512H8.15936C7.68014 9.37512 7.29166 9.76361 7.29166 10.2428V17.1876C7.29166 18.6259 8.45758 19.7918 9.89582 19.7918H15.1042C15.7948 19.7918 16.4572 19.5174 16.9456 19.029C17.434 18.5407 17.7083 17.8783 17.7083 17.1876V10.2428C17.7083 9.76361 17.3198 9.37512 16.8406 9.37512Z"
            stroke={color} //"#B3B7EE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.625 7.29173L15.5146 7.07194C14.9436 5.9298 13.7764 5.20831 12.4995 5.20831C11.2226 5.20831 10.0553 5.9298 9.48437 7.07194L9.375 7.29173H15.625Z"
            stroke={color} //"#B3B7EE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M11.5135 12.847C11.5135 12.4327 11.1777 12.097 10.7635 12.097C10.3493 12.097 10.0135 12.4327 10.0135 12.847H11.5135ZM10.0135 16.3188C10.0135 16.733 10.3493 17.0688 10.7635 17.0688C11.1777 17.0688 11.5135 16.733 11.5135 16.3188H10.0135ZM14.9864 12.847C14.9864 12.4327 14.6507 12.097 14.2364 12.097C13.8222 12.097 13.4864 12.4327 13.4864 12.847H14.9864ZM13.4864 16.3188C13.4864 16.733 13.8222 17.0688 14.2364 17.0688C14.6507 17.0688 14.9864 16.733 14.9864 16.3188H13.4864ZM15.625 6.54175C15.2108 6.54175 14.875 6.87753 14.875 7.29175C14.875 7.70596 15.2108 8.04175 15.625 8.04175V6.54175ZM17.7083 8.04175C18.1225 8.04175 18.4583 7.70596 18.4583 7.29175C18.4583 6.87753 18.1225 6.54175 17.7083 6.54175V8.04175ZM9.37499 8.04175C9.7892 8.04175 10.125 7.70596 10.125 7.29175C10.125 6.87753 9.7892 6.54175 9.37499 6.54175V8.04175ZM7.29166 6.54175C6.87744 6.54175 6.54166 6.87753 6.54166 7.29175C6.54166 7.70596 6.87744 8.04175 7.29166 8.04175V6.54175ZM10.0135 12.847V16.3188H11.5135V12.847H10.0135ZM13.4864 12.847V16.3188H14.9864V12.847H13.4864ZM15.625 8.04175H17.7083V6.54175H15.625V8.04175ZM9.37499 6.54175H7.29166V8.04175H9.37499V6.54175Z"
            fill={color} //"#B3B7EE"
          />
        </Svg>
      }
    />
  );
};

export default DeleteIcon;
