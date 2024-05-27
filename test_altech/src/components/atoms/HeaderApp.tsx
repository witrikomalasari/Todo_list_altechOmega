import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Spacer from './Spacer';

interface IHeaderAppProps {
  HeaderName: string;
  RightIcon?: boolean;
  RightIconMap?: boolean;
}

export const HeaderApp: FC<IHeaderAppProps> = ({
  HeaderName = 'HeaderApp',
  RightIcon = false,
  RightIconMap = false,
}) => {
  return (
    <View
      style={{
        borderBottomColor: '#EFEFED',
        borderBottomWidth: 1,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        paddingBottom: 16,
      }}>
      <Spacer height={18} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            // backgroundColor: 'red',
            position: 'absolute',
            left: 0,
          }}>
          {/* <ArrowLeft width={24} height={24} color={'black'} /> */}
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: '800',
            }}>
            {HeaderName}
          </Text>
        </View>
        {RightIcon && (
          <View>
            <TouchableOpacity>
              {/* <Heart width={24} height={24} color={'black'} /> */}
            </TouchableOpacity>
          </View>
        )}
        {RightIconMap && (
          <View style={{backgroundColor: 'red', borderWidth: 1}}>
            <TouchableOpacity>
              {/* <GPS width={24} height={24} color={'black'} /> */}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default HeaderApp;
