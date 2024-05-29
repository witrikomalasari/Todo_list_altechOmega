import {AltechColors} from '@theme/colorsAltech';
import React, {FC, ReactNode} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface KeyboardAvoidProps {
  children: ReactNode;
}

const KeyboardAvoid: FC<KeyboardAvoidProps> = ({children}) => {
  //   const [isScrollView, setIsScrollView] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {children}
        {/* {isScrollView && (
          <ScrollView showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        )} */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: AltechColors.secondary},
  wrapper: {
    flex: 1,
    // backgroundColor: AltechColors.error,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // paddingHorizontal: 16,
  },
});

export default KeyboardAvoid;
