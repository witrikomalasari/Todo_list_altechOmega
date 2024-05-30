import {Task} from '@models/InterfaceDataListTodo';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to add a single Task to the array in AsyncStorage
export const addTaskToAsyncStorage = async (
  key: string,
  newTask: Task,
): Promise<Task[]> => {
  try {
    const existingData = await AsyncStorage.getItem(key);
    let taskArray: Task[] = existingData ? JSON.parse(existingData) : [];
    console.log('taskar', taskArray);
    taskArray.push(newTask);
    await AsyncStorage.setItem(key, JSON.stringify(taskArray));
    return taskArray;
  } catch (e) {
    console.error('Failed to save data', e);
    throw e;
  }
};

export const setDataAsyncstorage = async (
  key: string,
  value: Task[],
): Promise<Task[]> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return value;
  } catch (e) {
    console.error('Failed to save data', e);
    throw e;
  }
};

export const getDataAsyncstorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log('value', value);
    if (value !== null) {
      return JSON.parse(value);
    }
    [];
  } catch (e) {
    // error reading value
    console.log('gagal get data asyncstorage', e);
    return [];
  }
};

export async function removeData(key: string): Promise<void> {
  try {
    let coba = await AsyncStorage.removeItem(key);
    console.log('cobaremove', coba);
  } catch (error) {
    console.error('Error removing data:', error);
  }
}

export const removeTaskFromAsyncStorage = async (
  key: string,
  taskId: string,
): Promise<Task[]> => {
  try {
    const existingData = await AsyncStorage.getItem(key);
    let taskArray: Task[] = existingData ? JSON.parse(existingData) : [];

    taskArray = taskArray.filter(task => task.id !== taskId);
    await AsyncStorage.setItem(key, JSON.stringify(taskArray));

    return taskArray;
  } catch (e) {
    console.error('Failed to remove data', e);
    throw e;
  }
};
