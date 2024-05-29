import SearchIcon from '@assets/iconSVG/searchIcon';
import {HeaderApp, Spacer} from '@components/atoms';
import CardTask from '@components/molecules/CardTask';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {useAppSelector} from '@hooks/useAppSelector';
import {Task} from '@models/InterfaceDataListTodo';
import {deleteTask, setTasks, toggleTask} from '@redux/reducers/tasksReducer';
import {Icon} from '@rneui/themed';
import {AltechColors} from '@theme/colorsAltech';
import React, {FC, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface IBeranda {}

const Beranda: FC<IBeranda> = () => {
  const dispatch = useAppDispatch();
  // const navigation = useBaseNavigation();

  const {tasks} = useAppSelector(state => state.tasks);
  const [searchInput, setSearchInput] = useState<string>('');
  const [loading, _setLoading] = useState<boolean>(false);
  const [listFilterSearch, setListFilterSearch] = useState<Task[]>(tasks);
  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    dispatch(setTasks(tasks));
  }, [dispatch, tasks]);

  const handleFilterSearch = (inputTextUser: string) => {
    const trimmedInput = inputTextUser.trim();

    if (trimmedInput.length > 0) {
      const searchResults = tasks.filter(item =>
        item.taskName.toLowerCase().includes(trimmedInput.toLowerCase()),
      );
      setListFilterSearch(searchResults);
    } else {
      setListFilterSearch(tasks);
    }
  };

  const handleRenderItem = ({item}: {item: Task}) => {
    console.log('itemini', item);
    const {id, taskName, dateTodo, completed} = item;
    return (
      <CardTask
        taskName={taskName}
        date={dateTodo}
        status={completed}
        onDelete={() => dispatch(deleteTask(id!))}
        onCompleted={() => dispatch(toggleTask(id!))}
      />
    );
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator style={{marginVertical: 20}} />
        <Text style={styles.footerText}>Sedang memuat...</Text>
      </View>
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
                  handleFilterSearch(text);
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
                onPress={() => {
                  setSearchInput('');
                  setListFilterSearch(tasks);
                }}>
                <Icon name="clear" type="material" color={AltechColors.white} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Spacer height={10} />
        <View style={styles.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={listFilterSearch}
            keyExtractor={item => item.id as string}
            renderItem={handleRenderItem}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
            initialNumToRender={10}
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
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'black',
  },
});

export default Beranda;
