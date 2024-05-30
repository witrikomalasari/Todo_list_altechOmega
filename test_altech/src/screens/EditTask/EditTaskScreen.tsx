import React from 'react';
import {StyleSheet, View} from 'react-native';

const EditTaskScreen = () => {
  //  const [text, setText] = useState(initialText);
  //  const dispatch = useDispatch();

  //  const handleEditTask = () => {
  //    if (text.trim()) {
  //      dispatch(editTask({id, text}));
  //      onCancel();
  //    }
  //  };
  return (
    <View style={styles.container}>
      {/* <TextInput style={styles.input} value={text} onChangeText={setText} />
      <Button title="Save" onPress={handleEditTask} />
      <Button title="Cancel" onPress={onCancel} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
});

export default EditTaskScreen;
