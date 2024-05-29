import {Task} from '@models/InterfaceDataListTodo';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataAsyncstorage = async (
  key: string,
  value: Task[],
): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    // console.log('gagal simpan data', e);
    return false;
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
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data:', error);
  }
}
