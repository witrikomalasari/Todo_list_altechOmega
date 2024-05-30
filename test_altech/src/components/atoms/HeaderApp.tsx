import {ArrowLeft} from '@assets/iconSVG';
import {AltechText} from '@components/molecules';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {AltechColors} from '@theme/colorsAltech';
import {type} from '@theme/fontAltech';
import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

interface IHeaderAppProps {
  headerName?: string;
}

export const HeaderApp: FC<IHeaderAppProps> = ({headerName}) => {
  const navigation = useBaseNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.popToTop();
        }}
        // style={{backgroundColor: 'red'}}
      >
        <ArrowLeft color={AltechColors.text.black} />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <AltechText
          textType="bold"
          fontSize={16}
          fontColors={AltechColors.text.white}
          style={{
            fontFamily: type.openSansSemiBold,
            letterSpacing: 2,
            textAlign: 'center',
            paddingRight: 32,
          }}>
          {headerName}
        </AltechText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: AltechColors.primary,
    justifyContent: 'space-between',
    paddingVertical: 16,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});

export default HeaderApp;
