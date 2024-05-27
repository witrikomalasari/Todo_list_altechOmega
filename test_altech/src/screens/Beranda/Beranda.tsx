import {HeaderApp} from '@components/atoms';
import {AltechText} from '@components/molecules';
import {AltechColors} from '@theme/colorsAltech';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

interface IBeranda {}

const Beranda: FC<IBeranda> = () => {
  return (
    <View style={styles.container}>
      <HeaderApp headerName="Todo App" />
      <View style={styles.wrapper}>
        <AltechText textType="bold">Beranda</AltechText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AltechColors.secondary,
  },
  wrapper: {
    flex: 1,
    backgroundColor: AltechColors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 16,
  },
  txt: {color: AltechColors.text.primary},
});

export default Beranda;
