import SearchIcon from '@assets/iconSVG/searchIcon';
import {HeaderApp, Spacer} from '@components/atoms';
import CardTask from '@components/molecules/CardTask';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {useAppSelector} from '@hooks/useAppSelector';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {Task} from '@models/InterfaceDataListTodo';
import {deleteTask, toggleTask} from '@redux/reducers/tasksReducer';
import {CheckBox} from '@rneui/base';
import {Icon} from '@rneui/themed';
import {AltechColors} from '@theme/colorsAltech';
import {getDataAsyncstorage, removeData} from '@utils/LocalStorage';
import {filteredByNames} from '@utils/SearchLogic';
import React, {FC, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface IBeranda {}

const {height} = Dimensions.get('window');

const Beranda: FC<IBeranda> = () => {
  const dispatch = useAppDispatch();
  const navigation = useBaseNavigation();

  const {tasks} = useAppSelector(state => state.tasks);
  const [searchInput, setSearchInput] = useState<string>('');
  const [loading, _setLoading] = useState<boolean>(false);
  const [listFilterSearch, setListFilterSearch] = useState<Task[]>(tasks);
  const [unCompleted, setUnCompleted] = useState(false);
  const [unfinishedList, setUnfinishedList] = useState<Task[]>(tasks);
  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    setListFilterSearch(tasks);
    setUnfinishedList(tasks);
  }, [tasks]);

  useEffect(() => {
    const coba = async () => {
      let liat = await getDataAsyncstorage('taskTask');
      console.log('liat isi asyn', liat);
    };

    coba();
  }, [tasks]);

  const handleFilterSearch = (inputTextUser: string) => {
    let resultFilterByName = filteredByNames(tasks, inputTextUser, unCompleted);

    setListFilterSearch(resultFilterByName);
  };

  const handleFilterUnfinished = (unFinished: boolean) => {
    console.log('unf', unFinished);
    const task = tasks.filter(item => item.completed === unFinished);
    if (task) {
      console.log('task', task);
      setUnfinishedList(task);
    }
    if (!task) {
      setUnfinishedList(tasks);
    }
  };

  const handleRenderItem = ({item}: {item: Task}) => {
    // console.log('itemini', item);
    const {id, taskName, dateTodo, completed} = item;
    return (
      <CardTask
        taskName={taskName}
        date={dateTodo}
        status={completed}
        onEdit={() => {
          navigation.navigate('EditTaskScreen');
        }}
        onDelete={async () => {
          await removeData('taskTask');
          dispatch(deleteTask(id!));
        }}
        onCompleted={() => dispatch(toggleTask(id!))}
      />
    );
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.footer}>
        {/* <Spacer height={60} /> */}
        <ActivityIndicator style={{marginVertical: 20}} />
        <Text style={styles.footerText}>Sedang memuat...</Text>
      </View>
    );
  };

  console.log('tasks', tasks);

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
          <View style={{position: 'absolute', top: 70, left: 10}}>
            <CheckBox
              title="Task unFinished!"
              checked={unCompleted}
              onPress={() => {
                setUnCompleted(!unCompleted);
                handleFilterUnfinished(unCompleted);
              }}
              checkedColor={AltechColors.primary}
              uncheckedColor={AltechColors.secondary}
              size={15}
            />
          </View>
        </View>
        <Spacer height={10} />
        <View style={styles.listContainer}>
          <FlatList
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            data={unfinishedList || listFilterSearch}
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
    height,
    backgroundColor: AltechColors.secondary,
  },
  wrapper: {
    flex: 1,
    paddingBottom: 140,
    backgroundColor: AltechColors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  section: {
    backgroundColor: AltechColors.primary,
    width: '100%',
    height: 120,
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
