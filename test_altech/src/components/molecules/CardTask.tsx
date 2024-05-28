import {CheckIcon, DeleteIcon, EditIcon} from '@assets/iconSVG';
import {Spacer} from '@components/atoms';
import {AltechColors} from '@theme/colorsAltech';
import React, {FC} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ICardTaskProps {
  taskName: string;
  category: string;
  date: string;
  status?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onCompleted?: () => void;
}

const CardTask: FC<ICardTaskProps> = ({
  taskName,
  category,
  date,
  onEdit,
  onDelete,
  onCompleted,
}) => {
  return (
    <Animated.View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.text}>{taskName}</Text>
        <Text style={styles.text}>{date}</Text>
        <Text style={styles.text}>{category}</Text>
        {/* <Text style={styles.text}>{status}</Text> */}
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => onEdit && onEdit()}>
          <EditIcon color={AltechColors.white} />
        </TouchableOpacity>
        <Spacer width={15} />
        <TouchableOpacity onPress={() => onDelete && onDelete()}>
          <DeleteIcon color={AltechColors.white} />
        </TouchableOpacity>
        <Spacer width={15} />
        <TouchableOpacity onPress={() => onCompleted && onCompleted()}>
          <CheckIcon color={AltechColors.white} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    padding: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderRadius: 8,
    backgroundColor: AltechColors.primary,
    marginBottom: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  text: {
    flex: 1,
    color: AltechColors.white,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'yellow',
  },
  shadowButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  buttonColor: {
    color: AltechColors.white,
  },
});

export default CardTask;
