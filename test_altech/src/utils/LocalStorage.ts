import AsyncStorage from '@react-native-async-storage/async-storage';
import {IDataListTodo} from 'src/models/InterfaceDataListTodo';

export const setDataAsyncstorage = async (
  key: string,
  value: IDataListTodo,
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
  } catch (e) {
    // error reading value
    console.log('gagal get data asyncstorage', e);
  }
};

export async function removeData(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data:', error);
  }
}
