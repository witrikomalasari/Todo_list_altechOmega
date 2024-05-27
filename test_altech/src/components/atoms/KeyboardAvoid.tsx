import React, {FC, ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

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
  container: {flex: 1, backgroundColor: 'red'},
  wrapper: {flex: 1},
});

export default KeyboardAvoid;
