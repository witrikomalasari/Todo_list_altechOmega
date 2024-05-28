import {JSONListTask} from '@assets/dummyData';
import SearchIcon from '@assets/iconSVG/searchIcon';
import {HeaderApp, Spacer} from '@components/atoms';
import CardTask from '@components/molecules/CardTask';
import {Icon} from '@rneui/themed';
import {AltechColors} from '@theme/colorsAltech';
import React, {FC, useEffect, useState} from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';

interface IBeranda {}

// const {height, width} = Dimensions.get('window');

export interface DataTask {
  id: number;
  task: string;
}

const Beranda: FC<IBeranda> = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    // console.log('pas', searchInput);
  }, [searchInput]);

  const {data} = JSONListTask;

  const handleRenderItem = ({item}) => {
    // console.log('itemTask', item);
    console.log('item', item);
    return (
      <CardTask
        taskName={item.taskName}
        category={item.category}
        date={item.date}
        status={item.status}
        // onEdit={()=>{}}
        // onDelete={()=>{}}
        // onCompleted={()=>{}}
      />
    );
  };

  // console.log('json', data);
  return (
    <View style={styles.container}>
      <HeaderApp headerName="Todo App" />
      <View style={styles.wrapper}>
        <View style={styles.section}>
          <Spacer height={10} />
          <View style={styles.searchBar}>
            <View style={styles.wrappTextInput}>
              <TextInput
                style={styles.textInput}
                value={searchInput}
                onChangeText={text => setSearchInput(text)}
                placeholder="Search Task here..."
                placeholderTextColor={AltechColors.white}
                keyboardType="ascii-capable"
              />
              <View style={styles.wrappSearchIcon}>
                <SearchIcon color={AltechColors.white} />
              </View>
              <View style={styles.wrappDeleteIcon}>
                <Icon name="clear" type="material" color={AltechColors.white} />
              </View>
            </View>
          </View>
        </View>
        <Spacer height={10} />
        <View style={{paddingHorizontal: 16}}>
          <FlatList
            data={data}
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
    // paddingHorizontal: 16,
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
});

export default Beranda;
