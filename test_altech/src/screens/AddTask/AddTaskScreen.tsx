import {
  AltechButton,
  HeaderApp,
  InputFieldAltech,
  Spacer,
} from '@components/atoms';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {Task} from '@models/InterfaceDataListTodo';
import {addTask} from '@redux/reducers/tasksReducer';
import {CheckBox} from '@rneui/themed';
import {AltechColors} from '@theme/colorsAltech';
import {formatDate} from '@utils/Date';
import {addTaskToAsyncStorage} from '@utils/LocalStorage';
import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

interface IAddTaskScreen {}

const AddTaskScreen: FC<IAddTaskScreen> = () => {
  const dispatch = useAppDispatch();
  const navigation = useBaseNavigation();

  const [taskName, setTaskName] = useState<string>('');
  const [completed, setCompleted] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [dateTodo, setDateTodo] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    let coba = () => setDateTodo(formatDate(date));

    coba();
  }, [date]);

  const handleAddTask = async () => {
    try {
      let dataTaskInput: Task = {dateTodo, taskName, completed};
      dispatch(addTask(dataTaskInput));
      let dataTodoForAsyncStorage = {
        ...dataTaskInput,
        id: new Date().toISOString(),
      };
      await addTaskToAsyncStorage('taskTask', dataTodoForAsyncStorage);
      navigation.navigate('Home');
    } catch (error) {
      console.log('error', error);
    }
  };

  // console.log('dateee', dateTodo);
  return (
    <View style={styles.container}>
      <HeaderApp headerName="Add Task" />
      <Spacer height={30} />
      <View style={styles.wrapperContent}>
        <InputFieldAltech
          isLabel
          title="What is to be done?"
          placeHolder="Add new task"
          placeHolderTextColor={AltechColors.gray}
          type="text"
          value={taskName}
          onChange={(text: string) => setTaskName(text)}
        />
        <Spacer height={10} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderWidth: 1,
              height: 40,
              width: 150,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: AltechColors.lightGray,
            }}>
            <Text style={{color: AltechColors.text.menuInactive}}>
              {dateTodo}
            </Text>
          </View>
          <AltechButton
            title=" Open Date "
            onPress={() => setOpen(!open)}
            size="large"
            variant="solid"
          />
          <DatePicker
            modal
            open={open}
            date={date}
            mode="date"
            onConfirm={datePick => {
              setOpen(false);
              setDate(datePick);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>

        <Spacer height={10} />
        <CheckBox
          title="Task Finished!"
          checked={completed}
          onPress={() => setCompleted(!completed)}
          checkedColor={AltechColors.primary}
          uncheckedColor={AltechColors.secondary}
        />
        <AltechButton
          disabled={taskName && date ? false : true}
          title="Save Task"
          onPress={handleAddTask}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperContent: {
    paddingHorizontal: 16,
  },
});

export default AddTaskScreen;
