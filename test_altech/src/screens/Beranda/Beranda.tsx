import {JSONListTask} from '@assets/dummyData';
import SearchIcon from '@assets/iconSVG/searchIcon';
import {HeaderApp, Spacer} from '@components/atoms';
import CardTask from '@components/molecules/CardTask';
import {Icon} from '@rneui/themed';
import {AltechColors} from '@theme/colorsAltech';
import React, {FC, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface IBeranda {}

export interface DataTask {
  id: number;
  taskName: string;
  date: string;
  category: string;
  completed: boolean;
}

const Beranda: FC<IBeranda> = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [listTodo, setListTodo] = useState<DataTask[]>([]);
  const textInputRef = useRef<TextInput>(null);

  const handleFilter = (UserTextInput: string) => {
    if (!UserTextInput) {
      setListTodo(JSONListTask.data);
    }
    let filterlist = JSONListTask.data.filter(item =>
      item.taskName.toLowerCase().includes(UserTextInput.toLowerCase()),
    );
    setListTodo(filterlist);
  };

  const handleClearInput = () => {
    // setSearchInput('');
    // if (textInputRef.current) {
    //   textInputRef.current.clear();
    // }
  };

  // console.log('ffff', listTodo);

  // const handleDeleteByID = () => {
  // let deleteItem = JSONListTask.data.filter(item => item.id !== id);
  // setListTodo(prevData => prevData.filter(item => item.id !== id));
  // };

  const handleRenderItem = ({item}) => {
    // console.log('fd', item);
    return (
      <CardTask
        taskName={item.taskName}
        category={item.category}
        date={item.date}
        status={item.completed}
        // onEdit={()=>{}}
        // onDelete={() => handleDeleteByID(item.id)}
        // onCompleted={()=>{}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <HeaderApp headerName="Todo App" />
      <View style={styles.wrapper}>
        <View style={styles.section}>
          <Spacer height={10} />
          <View style={styles.searchBar}>
            <View style={styles.wrappTextInput}>
              <TextInput
                ref={textInputRef}
                style={styles.textInput}
                value={searchInput}
                onChangeText={text => {
                  setSearchInput(text);
                  handleFilter(text);
                }}
                placeholder="Search Task here..."
                placeholderTextColor={AltechColors.white}
                keyboardType="ascii-capable"
              />
              <View style={styles.wrappSearchIcon}>
                <SearchIcon color={AltechColors.white} />
              </View>
              <TouchableOpacity
                style={styles.wrappDeleteIcon}
                onPress={() => handleClearInput()}>
                <Icon name="clear" type="material" color={AltechColors.white} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Spacer height={10} />
        <View style={styles.listContainer}>
          <FlatList
            data={listTodo}
            keyExtractor={item => item.id.toString()}
            renderItem={handleRenderItem}
          />
        </View>
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
    backgroundColor: AltechColors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  section: {
    backgroundColor: AltechColors.primary,
    width: '100%',
    height: 100,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 16,
  },
  txt: {color: AltechColors.text.primary},
  searchBar: {
    flexDirection: 'row',
    height: '100%',
  },
  wrappTextInput: {
    width: '100%',
    height: '50%',
    borderWidth: 2,
    borderColor: AltechColors.border.primary,
    backgroundColor: AltechColors.middleGray,
    borderRadius: 10,
    // alignSelf: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '75%',
    height: '90%',
    // backgroundColor: 'yellow',
    marginLeft: 40,
  },
  wrappSearchIcon: {
    position: 'absolute',
    left: 10,
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
  wrappDeleteIcon: {position: 'absolute', right: 13},
  listContainer: {paddingHorizontal: 10},
});

export default Beranda;
