// import KeyboardAvoid from '@components/atoms/KeyboardAvoid';
import React from 'react';
// import {Text} from 'react-native';

import {StyleSheet, View} from 'react-native';

const Completed = () => {
  //     const tasks = useSelector((state: RootState) =>
  //       state.tasks.tasks.filter(task => task.completed),
  //     );

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => <TaskItem {...item} />}
        contentContainerStyle={styles.listContainer}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContainer: {
    flexGrow: 1,
  },
});

export default Completed;
